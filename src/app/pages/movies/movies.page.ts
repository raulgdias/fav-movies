import { Component } from '@angular/core';
import { MovieService } from 'src/app/features/movies/movie.service';
import { Movie } from './interfaces/movie';

@Component({
  selector: 'app-movies.page',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss']
})
export class MoviesPage {
  public page: number = 1;
  public movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  async ngOnInit() {
    await this.getMovies();
  }

  public async increasePage(): Promise<void> {
    this.page += 1;

    await this.getMovies();
  }

  public async decreasePage(): Promise<void> {
    if (this.page === 1) { return; }
    this.page -= 1;

    await this.getMovies();
  }

  private async getMovies(): Promise<void> {
    const response = await this.movieService.getPopularMovies(this.page);
    this.movies = response.results;
  }
}
