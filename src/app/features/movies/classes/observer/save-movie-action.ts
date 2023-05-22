import { Movie } from "../../interfaces/movie";

export default interface SaveMovieAction {
    execute: (movie: Movie) => void;
}