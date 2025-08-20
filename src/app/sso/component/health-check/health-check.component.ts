import { Component } from '@angular/core';

@Component({
  selector: 'app-health-check',
  template: `<p>Application is running</p>`,
})
export class HealthCheckComponent {
  // This component is used to check if the application is running
  // It returns a simple message indicating that the application is running
}
