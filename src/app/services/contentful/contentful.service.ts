import { Injectable } from '@angular/core';
import { Entry, createClient } from 'contentful';
// import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private client = createClient({
    space: String(process.env['CONTENTFUL_SPACE_ID']),
    accessToken: String(process.env['CONTENTFUL_ACCESS_TOKEN']),
  });

  // getAllEntries() {
  //   this.client.getEntries().then((entries) => console.log(entries));
  // }

  async getAboutPage(query?: object): Promise<Entry<any>[]> {
    const res = await this.client.getEntries(
      Object.assign(
        {
          content_type: 'aboutPage',
        },
        query,
      ),
    );
    return res.items;
  }

  // getEntryByContentType(contentType: string) {
  //   const entry = this.client
  //     .getEntries({ content_type: contentType })
  //     .then((entry) => {
  //       entry.items[0];
  //     });
  //   return from(entry);
  // }
}
