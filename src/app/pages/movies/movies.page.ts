import { Component } from '@angular/core';
import { MovieService } from 'src/app/features/movies/movie.service';

@Component({
  selector: 'app-movies.page',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss']
})
export class MoviesPage {
  constructor(private movieService: MovieService) {}

  async ngOnInit() {
    console.log(await this.movieService.getPopularMovies());
  }
}
