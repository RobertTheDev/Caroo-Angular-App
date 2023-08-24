import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-accessibility-statement-view',
  templateUrl: './accessibility-statement-view.component.html',
})
export class AccessibilityStatementViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  markdownContent: string | null = null;
  loading = true;

  private async loadMarkdownContent() {
    try {
      const response = await fetch('assets/content/accessibility-statement.md');
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

    this.title.setTitle('Accessibility Statement | Caroo');

    this.meta.updateTag({
      name: 'description',
      content:
        "Caroo's commitment: Enhancing digital accessibility for all. Our focus is on improving user experience through relevant accessibility standards.",
    });
  }
}
