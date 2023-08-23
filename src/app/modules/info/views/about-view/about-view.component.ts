import { Component } from '@angular/core';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css'],
})
export class AboutViewComponent {
  markdownContent = `
  # Hello, Markdown!
  
  This is **bold** and *italic* text.
  
  - List item 1
  - List item 2
  `;
}
