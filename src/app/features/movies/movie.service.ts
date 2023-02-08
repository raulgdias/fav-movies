import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { EnvironmentService } from 'src/app/core/services/environment.service';
import { HttpService } from 'src/app/core/services/http.service';

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

  public async getPopularMovies(page?: string): Promise<any> {
    const response = await this.httpService.get(this.baseUrl('movie/popular', page));
    return this.extractData(response);
  }
}
