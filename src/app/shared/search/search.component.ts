import { Component, Input } from '@angular/core';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  data = {keyword: ''};
  @Input() placeholder?: string;
  @Input() from?: string;

  constructor(public booksService: BooksService) {}

  //setting keyword here
  Search() {

    this.booksService.setKeyword(this.data.keyword);
    this.booksService.setFrom(this.from);

  }
}
