import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful/contentful.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) {}

  page: Entry<any> | null = null;

  ngOnInit() {
    this.contentfulService
      .getAboutPage()
      .then((products: any) => (this.page = products));
  }
}
