import { Component, Input } from '@angular/core';
import { ActionSettings } from '../../models/action.interface';

@Component({
  selector: 'lex-portfolio-editor-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {
  @Input() title!: string;
  @Input() icon!: string;
}
