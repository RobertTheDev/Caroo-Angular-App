import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-and-conditions-view',
  templateUrl: './terms-and-conditions-view.component.html',
})
export class TermsAndConditionsViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  markdownContent: string | null = null;
  loading = true;

  private async loadMarkdownContent() {
    try {
      const response = await fetch('assets/content/terms-and-condition.md');
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

    this.title.setTitle('Terms and Conditions| Caroo');

    this.meta.updateTag({
      name: 'description',
      content:
        "Navigate Caroo's terms and conditions. Learn about our guidelines for usage, responsibilities, and the agreement that governs your interaction with our platform.",
    });
  }
}
