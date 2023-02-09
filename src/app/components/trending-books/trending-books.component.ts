import { Component } from '@angular/core';


@Component({
  selector: 'app-trending-books',
  templateUrl: './trending-books.component.html',
  styleUrls: ['./trending-books.component.sass']
})
export class TrendingBooksComponent {
  trendingBooks = ['java', 'c', 'python'];
}
