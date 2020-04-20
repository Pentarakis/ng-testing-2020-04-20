import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import {BookService} from "../book.service";
import {BookServiceStub} from "../book.service.stub";
import {Book} from "../model/book";

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let bookService: BookServiceStub;

  beforeEach(async(() => {

    bookService = new BookServiceStub();

    TestBed.configureTestingModule({
      declarations: [ BookListComponent, BookComponentStub ],
      providers: [
        {
          provide: BookService,
          useValue: bookService
        }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should load books using BookService', () => {
    const testBook: Book = {id: 3, name: 'A Storm of Swords', isbn: '978-0553106633'} as Book;
    const spy = jest.spyOn(bookService, 'readAll').mockReturnValue([
      testBook
    ]);

    fixture.detectChanges();

    expect(component.books).toEqual([testBook]);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

@Component({
  selector: 'ngb-book',
  template: ''
})
class BookComponentStub {
  @Input() book;
}
