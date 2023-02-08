import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { EnvironmentService } from 'src/app/core/services/environment.service';
import { HttpService } from 'src/app/core/services/http.service';
import { MovieResponse } from 'src/app/pages/movies/interfaces/movie-response';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseService {

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
}
