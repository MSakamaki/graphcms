import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, tap } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';
import { Observable } from 'rxjs';

const query = gql`{
    contents(orderBy: id_DESC) {
      title
      author
      content
    }
  }`;

const latestPost = gql`{
    contents(first: 1, orderBy: id_DESC) {
      title
      author
      content
    }
  }`;

export interface Contents {
  title: string;
  author: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private apollo: Apollo) { }

  latest() {
    return this.apollo.query<{ contents: Contents[] }>({ query: latestPost });
  }

  get() {
    return this.apollo.query<{ contents: Contents[] }>({ query: query });
  }
}
