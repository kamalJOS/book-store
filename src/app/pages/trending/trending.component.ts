import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/books.service';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.sass']
})
export class TrendingComponent {
  
  constructor(private route: ActivatedRoute, public bookService: BooksService) {
  }

  ngOnInit() {

    this.route.params.subscribe(observer => {
      this.bookService.setKeyword(observer['book']);
    })

  }

  ngOnDestroy() {

    this.bookService.setKeyword(undefined);
    this.bookService.setPage(undefined);
    this.bookService.setStatus(false);
    this.bookService.setPages(1);

  }

}
