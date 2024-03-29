import { Movie } from "../../interfaces/movie";
import SaveMovieAction from "../observer/save-movie-action";

export class MovieBuilder {
    private title!: string;
    private poster_url!: string;
    private overview!: string;
    private release_date!: string;

    private actionsAfterBuildAMovie: SaveMovieAction[] = [];

    private noImageDefaultImage: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';

    public constructor() { }

    //Build Pattern
    public build(): Movie {
        const movie: Movie = {
            id: Math.floor(Math.random() * 1000000),
            title: this.title,
            poster_url: this.poster_url,
            release_date: this.release_date,
            overview: this.overview,
        };

        this.runActionsForNewMovie(movie);

        return movie;
    }

    //Observer Pattern
    public addActionAfterBuildAMovie(action: SaveMovieAction): MovieBuilder {
        this.actionsAfterBuildAMovie.push(action);
        return this;
    }

    public runActionsForNewMovie(movie: Movie): void {
        this.actionsAfterBuildAMovie.forEach(action => {
            console.log(action);
            action.execute(movie);
        });
    }

    public setTitle(title: string): MovieBuilder {
        this.title = title;
        return this;
    }

    public setPoster(poster: string): MovieBuilder {
        if (poster?.length > 0) {
            this.poster_url = poster;
        } else {
            this.poster_url = this.noImageDefaultImage;
        }

        return this;
    }

    public setReleaseDate(releaseDate: string): MovieBuilder {
        this.release_date = releaseDate;
        return this;
    }

    public setOverview(overview: string): MovieBuilder {
        this.overview = overview;
        return this;
    }
}