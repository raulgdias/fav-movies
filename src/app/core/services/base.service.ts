import { Injectable } from '@angular/core';

import { Header } from '../interfaces/http';
import { HttpHeaders } from '@angular/common/http';

import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  constructor(protected environmentService: EnvironmentService) { }

  protected baseImageServerUrl(imagePath: string): string {
    const route = this.environmentService.getImageServerUrl();
    return `${route}${imagePath}`;
  }

  protected baseUrl(route: string, page: string = '1'): string {
    const serverUrl: string = this.environmentService.getServerUrl();
    const serverApiKey = this.environmentService.getServerApiKey();

    return `${serverUrl}/${route}?api_key=${serverApiKey}&page=${page}`
  }

  protected getHeaderJson(extras?: Header[]): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();

    const commonHeaders: Header[] = [
      { key: 'Content-Type', value: 'application/json' },
      { key: 'Access-Control-Allow-Headers', value: 'X-Requested-With, Content-Type, Authorization, Origin, Accept' },
    ]

    commonHeaders.forEach(header => headers = headers.append(header.key, header.value));

    if (extras) {
      extras.forEach(extra => headers = headers.append(extra.key, extra.value));
    }

    return headers;
  }

  protected extractData = (response: any) => response || {};
}
