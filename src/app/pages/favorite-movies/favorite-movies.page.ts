import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/features/movies/interfaces/movie';
import { MovieService } from 'src/app/features/movies/movie.service';

interface NewMovie {
  id: number,
  title: string;
  release_date: string;
  overview: string;
  poster_url: string;
}

@Component({
  selector: 'app-movies.page',
  templateUrl: './favorite-movies.page.html',
  styleUrls: ['./favorite-movies.page.scss']
})
export class FavoriteMoviesPage implements OnInit {

  public movies: Movie[] = [];

  public movieToSave: NewMovie = {
    id: 0,
    title: '',
    release_date: '',
    overview: '',
    poster_url: ''
  };

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
    this.movieToSave.id = Math.floor(Math.random() * 1000000);

    if (this.movieToSave.poster_url === '') {
      this.movieToSave.poster_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
    }

    this.movieService.storeMovie(this.movieToSave as Movie);

    this.movies = this.movieService.getFavoriteMovies();

    this.closeModal();
    
    this.movieToSave = {
      id: 0,
      title: '',
      release_date: '',
      overview: '',
      poster_url: ''
    };
  }
}
