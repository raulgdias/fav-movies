import { Movie } from "../../interfaces/movie";
import SaveMovieAction from "./save-movie-action";

export default class SaveMovieOnStorageHandler implements SaveMovieAction {
  private movieStorageKey: string = 'favoriteMovies';
  
  constructor() { }

    public execute(movie: Movie): void {
        let favoriteMovies: Movie[] = JSON.parse(localStorage.getItem(this.movieStorageKey) as string);

        if (favoriteMovies) {
            if (!favoriteMovies.some(m => m.id === movie.id)) {
                favoriteMovies.push(movie);
            }
        } else {
            favoriteMovies = [movie];
        }

        localStorage.setItem(this.movieStorageKey, JSON.stringify(favoriteMovies));
    };
}