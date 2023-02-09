import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  keyword;
  page;
  
  
  constructor(public bookService: BooksService, private route: ActivatedRoute) {
    this.keyword = bookService.getKeyword();
    this.page = bookService.getPage();

  }
  

  ngOnDestroy() {

    this.bookService.setKeyword(undefined);
    this.bookService.setPage(undefined);
    this.bookService.setStatus(false);
    this.bookService.setPages(1);

  }

  //using DoCheck to tap changes
  ngDoCheck(): void {

    //if keyword changes
    if(this.keyword!==this.bookService.getKeyword()) {
      this.keyword=this.bookService.getKeyword();

      //if keyword is defined and is not a empty string 
      if(this.keyword!==null && this.keyword!=='' && this.keyword!==undefined)
          this.bookService.fetchBooks()
          .subscribe(observer => {
            //when fetching failed an empty array is returned
            if(observer.docs.length===0) this.bookService.setStatus(null);
            else {

              this.bookService.setStatus(true);
              this.bookService.setBooks(observer.docs);
              this.bookService.setPages(observer.numFound);

              //resetting memory data for each new keyword
              this.bookService.resetInMemoryData();
              this.bookService.insertDataIntoMemory(observer.docs, this.page);

            }

          });

    }
    
    if(this.page!==this.bookService.getPage()) {
      this.page=this.bookService.getPage();

      //if page changes
      //first attempting the fetch from memory
      if(this.keyword!==null && this.keyword!=='' && this.keyword!==undefined)
          this.bookService.fetchInMemoryBooks()
          .subscribe(observer => {

            //when fetching failed an empty array is returned
            //only when the data is fetched from server
            if(observer.docs.length===0) this.bookService.setStatus(null);
            else {

              this.bookService.setStatus(true);
              this.bookService.setBooks(observer.docs);

              //only when the data is fetched from memory
              if(observer.numFound) {

                this.bookService.setPages(observer.numFound);
                this.bookService.insertDataIntoMemory(observer.docs, this.page);

              }

            }

          });

    }

  }

}
