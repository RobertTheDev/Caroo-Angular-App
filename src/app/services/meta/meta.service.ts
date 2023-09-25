import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import companyName from 'src/app/lib/constants/companyName';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}

  setMeta(
    title: string,
    description: string,
    keywords: string,
    canonicalUrlPath?: string | null,
  ) {
    this.titleService.setTitle(`${title} | ${companyName}`);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    });
    this.metaService.updateTag({
      rel: 'canonical',
      href: `http://localhost:4001/${canonicalUrlPath}`,
    });
  }
}
