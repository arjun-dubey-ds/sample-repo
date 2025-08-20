import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface LoadingState {
  [key: string]: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingState = new BehaviorSubject<LoadingState>({});

  setLoading(key: string, loading: boolean): void {
    const currentState = this.loadingState.value;
    this.loadingState.next({
      ...currentState,
      [key]: loading
    });
  }

  getLoading(key: string): Observable<boolean> {
    return new Observable(observer => {
      this.loadingState.subscribe(state => {
        observer.next(state[key] || false);
      });
    });
  }

  isAnyLoading(): Observable<boolean> {
    return new Observable(observer => {
      this.loadingState.subscribe(state => {
        observer.next(Object.values(state).some(loading => loading));
      });
    });
  }

  clearLoading(key: string): void {
    const currentState = this.loadingState.value;
    const newState = { ...currentState };
    delete newState[key];
    this.loadingState.next(newState);
  }
}
