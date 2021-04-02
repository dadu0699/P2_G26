import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public book: Book;

  public photo: File;
  public photoSelected: string | ArrayBuffer;

  constructor(
    private _router: Router,
    private _booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.book = new Book();
  }

  onPhotoSelected(event: HTMLInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.photo = <File>event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e => this.photoSelected = reader.result);
      reader.readAsDataURL(this.photo);
    }
  }

  async onSubmit() {
    try {
      await this._booksService.create(this.book, this.photo);
      this._router.navigate(['/']);
    } catch (err) {
      console.log(<any>err);
    }
  }
}
