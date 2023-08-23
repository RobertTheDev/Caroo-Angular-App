import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { CarModule } from './modules/car/car.module';
import { LayoutModule } from './modules/layout/layout.module';
import { AccountModule } from './modules/account/account.module';
import { CarOwnerModule } from './modules/car-owner/car-owner.module';
import { ContentfulService } from './services/contentful/contentful.service';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { InfoModule } from './modules/info/info.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    CarModule,
    LayoutModule,
    AccountModule,
    CarOwnerModule,
    NotFoundModule,
    InfoModule,
    FontAwesomeModule,
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent],
})
export class AppModule {}
