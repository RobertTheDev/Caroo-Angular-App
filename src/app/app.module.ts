import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { CarModule } from './car/car.module';
import { LayoutModule } from './layout/layout.module';
import { AccountModule } from './account/account.module';
import { CarOwnerModule } from './car-owner/car-owner.module';
import { ContentfulService } from './services/contentful/contentful.service';

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
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent],
})
export class AppModule {}
