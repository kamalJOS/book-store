import { Component } from '@angular/core';
import { BooksService } from 'src/app/books.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  
  constructor(public bookService: BooksService) {

  }
  

  ngOnDestroy() {

    this.bookService.setKeyword(undefined);
    this.bookService.setPage(undefined);
    this.bookService.setStatus(false);
    this.bookService.setPages(1);

  }
}
