import { Component, OnInit } from '@angular/core';
import { ContentService, Contents } from '@gcc/backend';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  contents$: Observable<Contents[]>;

  constructor(private content: ContentService) {}

  ngOnInit() {
    this.contents$ = this.content.get();
  }
}
