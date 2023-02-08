import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  HttpGetOptions,
  HttpPutOptions,
  HttpPostOptions,
  HttpDeleteOptions
} from '../interfaces/http';

type HttpOptions = HttpGetOptions | HttpPutOptions | HttpPostOptions | HttpDeleteOptions;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private methods = {
    get: 'GET',
    put: 'PUT',
    post: 'POST',
    delete: 'DELETE',
  }

  constructor(private http: HttpClient) { }

  public get = async (url: string, options?: HttpGetOptions): Promise<Object> =>
    this.request(this.methods.get, url, options as HttpGetOptions);

  public put = async (url: string, options?: HttpPutOptions): Promise<Object> =>
    this.request(this.methods.put, url, options as HttpPutOptions);

  public post = async (url: string, options?: HttpPostOptions): Promise<Object> =>
    this.request(this.methods.post, url, options as HttpPostOptions);

  public delete = async (url: string, options?: HttpDeleteOptions): Promise<Object> =>
    this.request(this.methods.delete, url, options as HttpDeleteOptions);

  private request(method: string, url: string, options: HttpOptions): Promise<any> {
    return this.http.request(method, url, options).toPromise();
  }
}
