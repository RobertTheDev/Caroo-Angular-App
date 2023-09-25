import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { LayoutService } from 'src/app/services/layout/layout.service';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageLayoutComponent,
    BurgerMenuComponent,
    ProfileMenuComponent,
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [PageLayoutComponent],
  providers: [LayoutService],
})
export class LayoutModule {}
