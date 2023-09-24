import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { CarModule } from './modules/car/car.module';
import { LayoutModule } from './modules/layout/layout.module';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { InfoModule } from './modules/info/info.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { CarRequestModule } from './modules/car-request/car-request.module';
import { AccountModule } from './modules/account/account.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    AccountModule,
    AuthModule,
    CarModule,
    CarRequestModule,
    LayoutModule,
    NotFoundModule,
    InfoModule,
    FontAwesomeModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
