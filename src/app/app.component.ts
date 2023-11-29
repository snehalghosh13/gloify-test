import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpHandlesService } from './services/http-handles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private http: HttpHandlesService) {

  }

  allMovies: any;
  displayedMovies: Array<any> = [];
  currentIndex = 0;
  counter: any;
  

  ngOnInit(): void {
    this.http.getCall().subscribe((movies: any) => {
      if (movies && movies.posts) {
        this.allMovies = movies.posts;
        console.log('Heroes data',this.allMovies);
        this.counter = setInterval(() => {
          this.movieAdder();
        }, 3000);
      }
    })
  }

  movieAdder() {
    let endIndex = this.currentIndex + 50;
    for (let i = this.currentIndex; i < endIndex; i++) {
      if (this.allMovies[i]) {
        this.displayedMovies.push(this.allMovies[i]);  
      } else {
        endIndex = this.allMovies.length - 1;
        clearInterval(this.counter);
        console.log('All added', this.displayedMovies);
        break;
      }
    }
    this.currentIndex = endIndex;
  }

  trackByItem(index: number, item: any) {
    return item.id;
  }

  ngOnDestroy(): void {
    clearInterval(this.counter);
  }

}
