import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export interface AppError {
  message: string;
  code?: string | undefined;
  details?: any;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  constructor(private messageService: MessageService) {}

  handleError(error: HttpErrorResponse | Error | any): Observable<never> {
    const appError: AppError = {
      message: this.getErrorMessage(error),
      details: error,
      timestamp: new Date()
    };

    // Only add code if it exists
    const errorCode = this.getErrorCode(error);
    if (errorCode !== undefined) {
      appError.code = errorCode;
    }

    this.logError(appError);
    this.showErrorToUser(appError);

    return throwError(() => appError);
  }

  private getErrorMessage(error: any): string {
    if (error instanceof HttpErrorResponse) {
      if (error.error?.message) {
        return error.error.message;
      }
      switch (error.status) {
        case 401:
          return 'You are not authorized to perform this action.';
        case 403:
          return 'Access forbidden. Please check your permissions.';
        case 404:
          return 'The requested resource was not found.';
        case 500:
          return 'Internal server error. Please try again later.';
        default:
          return `An error occurred: ${error.statusText || 'Unknown error'}`;
      }
    }

    if (error instanceof Error) {
      return error.message;
    }

    return 'An unexpected error occurred.';
  }

  private getErrorCode(error: any): string | undefined {
    if (error instanceof HttpErrorResponse) {
      return error.status.toString();
    }
    return error?.code;
  }

  private logError(error: AppError): void {
    console.error('Application Error:', {
      message: error.message,
      code: error.code,
      timestamp: error.timestamp,
      details: error.details
    });
  }

  private showErrorToUser(error: AppError): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: error.message,
      life: 5000
    });
  }

  showSuccess(message: string, summary: string = 'Success'): void {
    this.messageService.add({
      severity: 'success',
      summary,
      detail: message,
      life: 3000
    });
  }

  showWarning(message: string, summary: string = 'Warning'): void {
    this.messageService.add({
      severity: 'warn',
      summary,
      detail: message,
      life: 4000
    });
  }

  showInfo(message: string, summary: string = 'Information'): void {
    this.messageService.add({
      severity: 'info',
      summary,
      detail: message,
      life: 3000
    });
  }
}
