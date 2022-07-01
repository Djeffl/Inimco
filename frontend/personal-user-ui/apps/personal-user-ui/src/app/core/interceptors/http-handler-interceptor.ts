import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHandlerInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(this.addHeaders(req));
  }

  private addHeaders(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const headers = new HttpHeaders().append(
      'Access-Control-Allow-Origin',
      'http://localhost:4200/'
    );
    return request.clone({ headers });
  }
}
