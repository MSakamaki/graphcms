import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
// import { Contents, ContentService } from '../../../../backend/src/lib/graphql/content.service';
import { ContentService, Contents } from 'backend';

@Component({
  selector: 'lib-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contents$: Observable<Contents[]>;
  loading$: Observable<boolean>;

  constructor(
    private content: ContentService
    ) {}

  ngOnInit() {
    this.contents$ = this.content.get().pipe(
      map(({ data }) => data.contents ),
    );
    this.loading$ = this.content.get().pipe(
      map(({ loading }) => loading ),
      startWith(true),
    );
  }

}
