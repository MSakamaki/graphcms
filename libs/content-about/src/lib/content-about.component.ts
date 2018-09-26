import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-content-about',
  template: `
    <h2>About</h2>
    <p>
    graphcms sample page
    </p>
    <p><a href="https://github.com/MSakamaki/graphcms">github.com</a>
    <p><a href="https://graphcms.com">graphcms.com</a>
  `,
  styles: []
})
export class ContentAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
