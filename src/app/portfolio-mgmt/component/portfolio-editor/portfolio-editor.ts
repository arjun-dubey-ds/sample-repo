import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-editor',
  templateUrl: './portfolio-editor.html',
  styleUrl: './portfolio-editor.css',
})
export class PortfolioEditor {

  access_token = sessionStorage.getItem('access_token');

}
