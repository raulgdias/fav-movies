import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/features/movies/interfaces/movie';
import { MovieService } from 'src/app/features/movies/movie.service';

@Component({
  selector: 'app-movies.page',
  templateUrl: './favorite-movies.page.html',
  styleUrls: ['./favorite-movies.page.scss']
})
export class FavoriteMoviesPage implements OnInit {

  public movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.getFavoriteMovies();
  }

  public removeMovie(movie: Movie): void {
    this.movieService.removeMovieFromStorage(movie);
    this.movies = this.movieService.getFavoriteMovies();
  }
}
