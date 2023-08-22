import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from './page-layout/page-layout.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [PageLayoutComponent],
})
export class LayoutModule {}
