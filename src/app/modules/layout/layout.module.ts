import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [PageLayoutComponent],
})
export class LayoutModule {}
