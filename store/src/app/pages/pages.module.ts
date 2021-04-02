import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { ListComponent } from './list/list.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    PagesComponent,
    ListComponent,
    BookComponent
  ],
  exports: [
    PagesComponent,
    ListComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
