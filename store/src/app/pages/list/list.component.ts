import { Component, OnInit } from '@angular/core';

import { Global } from 'src/app/services/Global';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public url: string;
  public books: Book[];
  public recentBooks: Book[];

  constructor(
    private _booksService: BooksService
  ) {
    this.url = `${Global.url}/`;
    this.books = [];
    this.recentBooks = [];
  }

  async ngOnInit(): Promise<void> {
    await this.getData();
  }

  private async getData(): Promise<void> {
    try {
      let data = await this._booksService.getAll();
      if (data['code'] === '200') {
        this.books = data['data'];
      }

      data = await this._booksService.getRecent();
      if (data['code'] === '200') {
        this.recentBooks = data['data'];
      }
   
    } catch (err) {
      console.log(<any>err);
    }
  }
}
