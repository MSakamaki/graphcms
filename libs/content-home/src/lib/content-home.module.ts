import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopPageComponent } from './top-page/top-page.component';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule,
    RouterModule.forChild([
      { path: '', component: TopPageComponent }
    ]),
  ],
  declarations: [TopPageComponent],
  exports: []
})
export class ContentHomeModule { }
