import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import {MaterialModule} from '@material/material.module';
import { BookDetailComponent } from './book-detail/book-detail.component';



@NgModule({
  declarations: [BookComponent, BookListComponent, BookDetailComponent],
  exports: [
    BookComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class BooksModule { }
