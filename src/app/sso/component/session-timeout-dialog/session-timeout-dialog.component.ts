import { Component, EventEmitter, Output } from '@angular/core';
import { Idle } from '@ng-idle/core';
import { TIMEOUT_CONFIG } from '../../../shared/app.constants';

@Component({
  selector: 'app-session-timeout-dialog',
  templateUrl: './session-timeout-dialog.component.html',
  styleUrl: './session-timeout-dialog.component.scss'
})
export class SessionTimeoutDialogComponent {
  public display: boolean = false;
  public countdownTimer: number = TIMEOUT_CONFIG.TIMEOUT_COUNTDOWN; 
  public timerInterval: any;

  @Output() stayLoggedInEvent = new EventEmitter<boolean>();

  constructor(private idle: Idle) { 
    // idle.onTimeoutWarning.subscribe((countdown) => {
    //   console.log("timeout warning countdown.");
    // });
  }

  show() {
    this.display = true;
    this.startCountdown();
  }

  hide() {
    this.display = false;
  }

  continueSession(): void {
    this.clearTimer();
    this.hide();
    this.stayLoggedInEvent.emit(true);
  }

  private startCountdown() {
    this.timerInterval = setInterval(() => {
      console.log(this.countdownTimer);
      if (this.countdownTimer > 0) {
        this.countdownTimer--;
      } else {
        this.idle.timeout();
       this.clearTimer();
      }
    }, 1000);
  }

  clearTimer() {
    this.countdownTimer = TIMEOUT_CONFIG.TIMEOUT_COUNTDOWN;
    clearInterval(this.timerInterval);
  }
}
