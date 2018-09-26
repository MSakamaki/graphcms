import { NgModule } from '@angular/core';
import { ContentAboutComponent } from './content-about.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ContentAboutComponent }
    ]),
  ],
  declarations: [ContentAboutComponent],
  exports: [ContentAboutComponent]
})
export class ContentAboutModule { }
