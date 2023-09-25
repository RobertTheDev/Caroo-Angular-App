import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}

  setMetaTagsAndTitle(
    title: string,
    description: string,
    keywords: string,
    canonicalUrl: string,
  ) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    });
    this.metaService.updateTag({ rel: 'canonical', href: canonicalUrl });
  }
}
