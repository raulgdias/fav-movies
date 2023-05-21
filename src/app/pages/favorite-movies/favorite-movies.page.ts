import { Component, OnInit } from '@angular/core';
import { MovieBuilder } from 'src/app/features/movies/classes/movie-builder';
import { Movie } from 'src/app/features/movies/interfaces/movie';
import { MovieService } from 'src/app/features/movies/movie.service';

@Component({
  selector: 'app-movies.page',
  templateUrl: './favorite-movies.page.html',
  styleUrls: ['./favorite-movies.page.scss']
})
export class FavoriteMoviesPage implements OnInit {

  public movies: Movie[] = [];

  public id!: number;
  public title!: string;
  public releaseDate!: string;
  public overview!: string;
  public posterUrl!: string;

  public movieName: string = '';
  public modalIsOpened = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.getFavoriteMovies();
  }

  public removeMovie(movie: Movie): void {
    this.movieService.removeMovieFromStorage(movie);
    this.movies = this.movieService.getFavoriteMovies();
  }

  public openModal(): void {
    this.modalIsOpened = true;
  }

  public closeModal(): void {
    this.modalIsOpened = false;
  }

  public saveMovie() {
    this.closeModal();

    //Utilizando o pattern de Builder
    const movie: Movie = new MovieBuilder()
      .setTitle(this.title)
      .setPoster(this.posterUrl)
      .setReleaseDate(this.releaseDate)
      .setOverview(this.overview)
      .build();

    this.movieService.storeMovie(movie);
    this.movies = this.movieService.getFavoriteMovies();
    this.resetVariables();
  }

  private resetVariables(): void {
    this.title = '';
    this.posterUrl = '';
    this.releaseDate = '';
    this.overview = '';
  }
}
