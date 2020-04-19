import { Injectable } from '@angular/core';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [
    {id: 3, name: 'A Storm of Swords', isbn: '978-0553106633'},
    {id: 4, name: 'The Hedge Knight', isbn: '978-0976401100'},
    {id: 5, name: 'A Feast for Crows', isbn: '978-0553801507'}
  ];

  readAll(): Book[] {
    return this.books;
  }

  read(id: number): Book | void  {
    return this.books.find(book => book.id === id);
  }

  constructor() { }
}
