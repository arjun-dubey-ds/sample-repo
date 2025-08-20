import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { NgIdleModule } from '@ng-idle/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthService } from './sso/auth.service';
import { HttpService } from './portfolio-mgmt/service/http.service';
import { SessionTimeoutDialogComponent } from './sso/component/session-timeout-dialog/session-timeout-dialog.component';
import { HeaderComponent } from './shared/components/header/header.component';

// Core modules for PrimeNG
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';

export function initializeApp(authService: AuthService): () => Promise<void> {
  return () => Promise.resolve(authService.initSSO());
}

@NgModule({
  declarations: [
    AppComponent,
    SessionTimeoutDialogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    // PrimeNG Core modules
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    ToastModule,
    // Third-party modules
    NgIdleKeepaliveModule.forRoot(),
    NgIdleModule.forRoot(),
    OAuthModule.forRoot()
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    HttpService,
    DatePipe,
    DialogService,
    MessageService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AuthService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
