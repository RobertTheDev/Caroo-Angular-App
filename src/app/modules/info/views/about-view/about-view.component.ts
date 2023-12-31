import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css'],
})
export class AboutViewComponent implements OnInit {
  constructor(
    private logger: NGXLogger,
    private meta: Meta,
    private title: Title,
  ) {}

  markdownContent: string | null = null;
  loading = true;

  private async loadMarkdownContent() {
    try {
      const response = await fetch('assets/content/about.md');
      if (response.ok) {
        this.markdownContent = await response.text();
        this.logger.info('Successfully rendered the about page markdown file.');
      } else {
        throw new Error('Markdown file not found.');
      }
    } catch (error) {
      this.markdownContent = null;
      this.logger.error('Error loading Markdown content:', error);
    } finally {
      this.loading = false;
    }
  }

  ngOnInit(): void {
    this.loadMarkdownContent();

    this.title.setTitle('About | Caroo');

    this.meta.updateTag({
      name: 'description',
      content:
        'Discover Caroo: Your top destination for car enthusiasts, sellers, and buyers. Experience seamless vehicle transactions and connections on Caroo.',
    });
  }
}
