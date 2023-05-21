import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { EnvironmentService } from 'src/app/core/services/environment.service';
import { HttpService } from 'src/app/core/services/http.service';
import { MovieResponse } from 'src/app/features/movies/interfaces/movie-response';
import { Movie } from './interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseService {
  private movieStorageKey: string = 'favoriteMovies';

  constructor(
    private httpService: HttpService,
    protected override environmentService: EnvironmentService
  ) { super(environmentService) }

  public async getSpecificMovie(movieId: string): Promise<any> {
    const response = await this.httpService.get(this.baseUrl(`movie/${movieId}`));
    return this.extractData(response);
  }

  public async getPopularMovies(pageNumber?: number): Promise<MovieResponse> {
    const response = await this.httpService.get(this.baseUrl('movie/popular', pageNumber?.toString()));
    return this.extractData(response) as MovieResponse;
  }

  public getMovieImageUrl = (imagePath: string): string =>
    this.baseImageServerUrl(imagePath);

  public getFavoriteMovies = (): Movie[] =>
    JSON.parse(localStorage.getItem(this.movieStorageKey) as string);

  public storeMovie(movie: Movie): void {
    let favoriteMovies: Movie[] = JSON.parse(localStorage.getItem(this.movieStorageKey) as string);

    if (favoriteMovies) {
      if (!favoriteMovies.some(m => m.id === movie.id)) {
        favoriteMovies.push(movie);
      }
    } else {
      favoriteMovies = [movie];
    }

    localStorage.setItem(this.movieStorageKey, JSON.stringify(favoriteMovies));
  }

  public removeMovieFromStorage(movie: Movie) {
    let favoriteMovies: Movie[] = JSON.parse(localStorage.getItem(this.movieStorageKey) as string);

    const movieIndex = favoriteMovies.findIndex(m => m.id === movie.id);
    favoriteMovies.splice(movieIndex, 1);

    localStorage.setItem(this.movieStorageKey, JSON.stringify(favoriteMovies));
  }
}
