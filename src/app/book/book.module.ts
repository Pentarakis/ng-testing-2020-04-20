import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [BookComponent, BookListComponent],
  exports: [BookComponent, BookListComponent],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class BookModule { }
