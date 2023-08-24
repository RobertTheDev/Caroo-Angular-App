import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cookie-policy-view',
  templateUrl: './cookie-policy-view.component.html',
})
export class CookiePolicyViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  markdownContent: string | null = null;
  loading = true;

  private async loadMarkdownContent() {
    try {
      const response = await fetch('assets/content/cookie-policy.md');
      if (response.ok) {
        this.markdownContent = await response.text();
      } else {
        throw new Error('Markdown file not found.');
      }
    } catch (error) {
      console.error('Error loading Markdown content:', error);
      this.markdownContent = null;
    } finally {
      this.loading = false;
    }
  }

  ngOnInit(): void {
    this.loadMarkdownContent();

    this.title.setTitle('Cookie Policy | Caroo');

    this.meta.updateTag({
      name: 'description',
      content:
        "Explore Caroo's transparent cookie policy. Learn how we use cookies responsibly to enhance your browsing experience and protect your privacy.",
    });
  }
}
