import { Component } from '@angular/core';
import { MovieBuilder } from 'src/app/features/movies/classes/builder/movie-builder';
import AlertHandler from 'src/app/features/movies/classes/observer/alert-handler';
import SaveMovieOnStorageHandler from 'src/app/features/movies/classes/observer/save-movie-on-storage-handler';
import { Movie } from 'src/app/features/movies/interfaces/movie';
import { MovieService } from 'src/app/features/movies/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  public selectedPage: number = 1;
  public movies: Movie[] = [];
  public pageRange = [1, 2, 3, 4, 5];

  private secondPageList: boolean = false;

  constructor(private movieService: MovieService) { }

  async ngOnInit() {
    await this.getMovies();
  }

  public async increaseAllPages(): Promise<void> {
    this.setPage(this.pageRange[this.pageRange.length - 1]);

    await this.getMovies();
  }

  public async increasePage(): Promise<void> {
    this.setPage(this.selectedPage + 1);

    await this.getMovies();
  }

  public async decreaseAllPages(): Promise<void> {
    this.setPage(this.pageRange[0]);

    await this.getMovies();
  }

  public async decreasePage(): Promise<void> {
    if (this.selectedPage === 1) { return; }
    this.setPage(this.selectedPage - 1);

    await this.getMovies();
  }

  public isSelectedPage = (number: number): boolean => this.selectedPage == number;

  public selectPage = async (page: number): Promise<void> => {
    this.setPage(page);
    await this.getMovies();
  };

  public saveMovie(movie: Movie): void {
    const movieBuilder: MovieBuilder = new MovieBuilder()
      .addActionAfterBuildAMovie(new SaveMovieOnStorageHandler())
      .addActionAfterBuildAMovie(new AlertHandler())

    movieBuilder.runActionsForNewMovie(movie);
  }

  private setPage(page: number) {
    this.selectedPage = page;

    this.firstPageHandler();
    this.lastPageHandler();
  }

  private async getMovies(): Promise<void> {
    const response = await this.movieService.getPopularMovies(this.selectedPage);
    this.movies = this.mapMoviesWithPosterUrl(response.results);
  }

  private firstPageHandler(): void {
    const { pageRange } = this;

    if (this.selectedPage === pageRange[0] && this.selectedPage != 1) {
      this.secondPageList = false;

      this.pageRange = [this.selectedPage];
      this.pageRange.unshift(this.selectedPage - 1);
      this.pageRange.unshift(this.selectedPage - 2);
      this.pageRange.push(this.selectedPage + 1);
      this.pageRange.push(this.selectedPage + 2);

    }
  }

  private lastPageHandler(): void {
    const { pageRange } = this;

    if (this.selectedPage === pageRange[pageRange.length - 1]) {
      if (this.secondPageList) {
        this.pageRange.shift();
        this.pageRange.shift();
      }

      this.pageRange = this.pageRange.map(page => page + 4);
      this.pageRange.unshift(this.pageRange[0] - 1);
      this.pageRange.unshift(this.pageRange[0] - 1);

      this.secondPageList = true;
    }
  }

  private mapMoviesWithPosterUrl = (movies: Movie[]) => {
    movies.forEach(movie => movie.poster_url = this.movieService.getMovieImageUrl(movie.poster_path ?? ''));
    return movies;
  }
}
