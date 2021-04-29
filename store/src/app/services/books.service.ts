import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Global } from 'src/app/services/Global';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = `${Global.url}`;
  }

  public async getAll(): Promise<any> {
    return await this._httpClient.get(`${this.url}`).toPromise();
  }

  public async getRecent(): Promise<any> {
    return await this._httpClient.get(`${this.url}/recent-books`).toPromise();
  }

  public async create(book: Book, photo: File): Promise<any> {
    const formData = new FormData();
    formData.append('title', book.title.toString());
    formData.append('description', book.description.toString());
    formData.append('image', photo);

    return await this._httpClient.post(`${this.url}/book`, formData).toPromise();
  }
}
