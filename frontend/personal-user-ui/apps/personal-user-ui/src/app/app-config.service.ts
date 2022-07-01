import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/personal-user-ui/src/environments/environment';

import { throwError, catchError } from 'rxjs';

export interface AppConfig {
  readonly production: boolean;
  // API
  readonly personalUserApi: string;
}

@Injectable()
export class AppConfigService {
  public appConfig?: AppConfig;

  constructor(private http: HttpClient) {}

  public loadConfiguration(): Promise<void> {
    if (!environment.production) {
      this.appConfig = Object.assign({} as AppConfig, environment);
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      this.http
        .get('/front-end-config')
        .pipe(
          catchError((error) => {
            reject(error);
            return throwError(() => error);
          })
        )
        .subscribe((envResponse) => {
          const config = {} as AppConfig;
          this.appConfig = Object.assign(config, envResponse);
          resolve();
        });
    });
  }
}
