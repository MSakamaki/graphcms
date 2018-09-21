import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

const query = gql`{
    contents {
      title
      author
      content
    }
  }`;

export  interface Contents {
  title: string;
  author: string;
  content: string;

}

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private apollo: Apollo) { }


  get() {
    return this.apollo.watchQuery<{ contents: Contents[] }>({ query: query })
      .valueChanges.pipe(
        map( (data) => data.data.contents )
      );
  }
}
