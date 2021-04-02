import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { BookComponent } from './book/book.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path: 'store',
    component: PagesComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'book', component: BookComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
