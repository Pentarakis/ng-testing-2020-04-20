import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../model/book';

@Component({
  selector: 'ngb-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {

  selectedBook: Book = new Book();
  books: Book[];

  constructor(private bookService: BookService) {
    this.books = this.bookService.readAll();
  }

  ngOnInit() {
  }

  save(book: Book): void {
    book.id = this.createId();
    this.books.push(book);
  }

  private createId(): number {
    const lastBook = this.books[this.books.length - 1];
    if (lastBook && lastBook.id) {
      return lastBook.id + 1;
    }
    return 1;
  }

}
