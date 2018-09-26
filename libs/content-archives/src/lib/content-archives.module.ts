import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { BackendModule } from '@gcc/backend';
import { MarkdownModule } from 'ngx-markdown';
import { ContentComponent } from './content/content.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule,
    RouterModule.forChild([
      { path: '', component: ContentComponent }
    ]),
  ],
  declarations: [ContentComponent],
  exports: []
})
export class ContentArchivesModule { }
