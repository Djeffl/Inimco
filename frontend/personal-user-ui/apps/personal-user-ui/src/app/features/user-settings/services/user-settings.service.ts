import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'apps/personal-user-ui/src/app/features/user-settings/types/user';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class UserSettingsService {
  constructor(private http: HttpClient) {}

  // todo: refactor this
  public createUserSettings(user: User): Observable<User> {
    return this.http.post<User>('https://localhost:7249/api/users', user);
  }
}
