import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { CarModule } from './modules/car/car.module';
import { LayoutModule } from './modules/layout/layout.module';
import { AccountModule } from './modules/account/account.module';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { InfoModule } from './modules/info/info.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { CreateCarModule } from './modules/create-car/create-car.module';
import { SavedCarModule } from './modules/saved-car/saved-car.module';
import { CarRequestModule } from './modules/car-request/car-request.module';
import { CarOwnerModule } from './modules/car-owner/car-owner.module';
import { ProfileModule } from './modules/profile/profile.module';
import { UserModule } from './modules/user/user.module';
import { UserSettingsModule } from './modules/user-settings/user-settings.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    CreateCarModule,
    CarModule,
    CarRequestModule,
    CarOwnerModule,
    ProfileModule,
    UserModule,
    UserSettingsModule,
    SavedCarModule,
    LayoutModule,
    AccountModule,
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
