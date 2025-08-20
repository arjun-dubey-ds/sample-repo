import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {
  private expandState = new BehaviorSubject<boolean>(false);
  expandState$ = this.expandState.asObservable();

  toggleExpand() {
    this.expandState.next(!this.expandState.value);
  }

  expandAll() {
    this.expandState.next(true);
  }

  collapseAll() {
    this.expandState.next(false);
  }
}