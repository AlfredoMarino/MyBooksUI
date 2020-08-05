import { Component, OnInit } from '@angular/core';
import { BookService } from '@core/services/books/book.service';
import { Book } from '@core/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooksByName("nostradamus").subscribe(books => this.books = books);
    // this.bookService.getBooksByPersonId(11).subscribe(books => this.books = books);
  }

  searchHandler(algo: string) {
    console.log(algo)
  }

}
