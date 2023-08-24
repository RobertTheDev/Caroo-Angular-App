import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css'],
})
export class AboutViewComponent implements OnInit {
  markdownContent: string | null = null;

  ngOnInit(): void {
    this.loadMarkdownContent();
  }

  private async loadMarkdownContent() {
    const response = await fetch('assets/content/about.md');
    this.markdownContent = await response.text();
  }
}
