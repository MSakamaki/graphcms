import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { CommonModule } from '@angular/common';
import { BackendModule } from 'backend';
// import { BackendModule } from '../../libs/backend/src/lib/backend.module';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BackendModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
