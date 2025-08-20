import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { authConfig } from './auth-config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService, private router: Router, private http: HttpClient) {}

  initSSO(): void {
    try {
      this.oauthService.configure(authConfig);

      this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
        if (this.oauthService.hasValidAccessToken()) {
          this.oauthService.events
          .subscribe((e) => {
            if (e.type === 'token_expires') {
              this.logout();
            }
          });
          if (!this.isAllowedRoute(this.router.url)) {
            const claims = this.oauthService.getIdentityClaims();
            if (claims != null || claims != undefined) {
              sessionStorage.setItem('username', claims['username']);
            }
            this.router.navigate(['/portfolio-management']);
          }
        } else if (!this.oauthService.hasValidAccessToken()) {
          if (!this.isAllowedRoute(this.router.url)) {
            this.login();
          }
        }
      });

    } catch (error) {
      console.error('Error initializing SSO', error);
    }
  }

  get isLoggedIn() {
    return this.oauthService.hasValidAccessToken();
  }

  get username() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['username'];
  }

  get displayName() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['displayName'];
  }

  get claims() {
    return this.oauthService.getIdentityClaims();
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.router.navigate(['/logout']);
    this.oauthService.logOut();
  }

  private isAllowedRoute(url: string): boolean {
    const allowedRoutes = ['/health']; // Define allowed routes
    return allowedRoutes.includes(url);
  }
}
