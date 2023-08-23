import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageLayoutComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [PageLayoutComponent],
})
export class LayoutModule {}
