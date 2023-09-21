import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import appRouter from './api/router';
import * as session from 'express-session';
import { createClient } from 'redis';
import RedisStore from 'connect-redis';
import * as cors from 'cors';

declare module 'express-session' {
  interface SessionData {
    user: {
      id: string;
      createdAt: Date;
      updatedAt?: Date;
      firstName: string;
      lastName: string;
      emailAddress: string;
    } | null;
  }
}

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/caroo-angular-app/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    }),
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    }),
  );

  // Allow cors origin for dev local host.
  server.use(
    cors({
      origin: ['http://localhost:4401'],
      methods: ['DELETE', 'GET', 'PATCH', 'PUT', 'POST'],
      credentials: true,
    }),
  );

  // Allow JSON to be used.
  server.use(express.json());

  server.set('trust proxy', 1); // trust first proxy

  const redisClient = createClient();
  redisClient.connect().catch(console.error);

  // Initialize store.
  const redisStore = new RedisStore({
    client: redisClient,
    prefix: 'myapp:',
  });

  const oneDay = 1000 * 60 * 60 * 24;
  server.use(
    session({
      store: redisStore,
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      cookie: {
        path: '/',
        secure: false,
        httpOnly: false,
        maxAge: oneDay,
      },
    }),
  );

  // Use app router to get api routes.
  server.use('/api', appRouter);

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
