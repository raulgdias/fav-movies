import { Injectable } from '@angular/core';
import { EnvironmentSettings } from '../settings/environment-settings';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }

  public getServerUrl = (): string => EnvironmentSettings.serverUrl;
  public getServerApiKey = (): string => EnvironmentSettings.apiKey;
  public getImageServerUrl = (): string => EnvironmentSettings.imageServerUrl;
}
