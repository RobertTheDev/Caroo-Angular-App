import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-privacy-policy-view',
  templateUrl: './privacy-policy-view.component.html',
})
export class PrivacyPolicyViewComponent implements OnInit {
  constructor(
    private logger: NGXLogger,
    private meta: Meta,
    private title: Title,
  ) {}

  markdownContent: string | null = null;
  loading = true;

  private async loadMarkdownContent() {
    try {
      const response = await fetch('assets/content/privacy-policy.md');
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

    this.title.setTitle('Privacy Policy | Caroo');

    this.meta.updateTag({
      name: 'description',
      content:
        "Discover Caroo's commitment to your privacy. Explore our comprehensive privacy policy to understand how we safeguard your data and prioritize your online security.",
    });
  }
}
