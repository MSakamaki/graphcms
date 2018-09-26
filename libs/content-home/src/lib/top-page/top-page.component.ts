import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Contents, ContentService } from 'backend';
// import { ContentService, Contents } from '../../../../backend/src/lib/graphql/content.service';

@Component({
  selector: 'lib-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent implements OnInit {

  contents$: Observable<Contents[]>;
  loading$: Observable<boolean>;

  constructor(
    private content: ContentService
    ) {
    }

  ngOnInit() {
    this.contents$ = this.content.latest().pipe(
      map(c => c.data.contents ),
    );
    this.loading$ = this.content.latest().pipe(
      map(c => c.loading ),
      startWith(true),
    );
  }

}
