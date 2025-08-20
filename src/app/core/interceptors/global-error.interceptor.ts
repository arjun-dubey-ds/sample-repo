import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { ErrorHandlerService } from '../../shared/services/error-handler.service';
import { LoadingService } from '../../shared/services/loading.service';

@Injectable()
export class GlobalErrorInterceptor implements HttpInterceptor {
  constructor(
    private errorHandler: ErrorHandlerService,
    private loadingService: LoadingService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // Set loading state
    const loadingKey = `${req.method}-${req.url}`;
    this.loadingService.setLoading(loadingKey, true);

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.errorHandler.handleError(error);
      }),
      finalize(() => {
        this.loadingService.setLoading(loadingKey, false);
      })
    );
  }
}
