import { Movie } from "../../interfaces/movie";
import SaveMovieAction from "./save-movie-action";

export default class AlertHandler implements SaveMovieAction {
    constructor() { }

    public execute(movie: Movie): void {
        alert('Filme favoritado com sucesso');
    };
}