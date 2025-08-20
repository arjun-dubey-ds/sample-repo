import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PortfolioEditorDashboardService {
  private _url = environment.apiUrl;

  constructor(private http: HttpService) {}

  testServiceConnection() {
    return this.http.post(
      `${this._url}test-connection`,
      {},
      { responseType: 'text' as 'text' },
    );
  }

  getUserPortfolios(userId: string) {
    return this.http.get(`${this._url}get-user-portfolios?createdBy=${userId}`, {responseType: 'json'});
  }

  getUserPortfolioMemberGroup(userId: string) {
    return this.http.get(`${this._url}get-user-portfolios-member-group?createdBy=${userId}`, {responseType: 'json'});
  }
}
