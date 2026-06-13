import {
  AsyncPipe,
  NgForOf,
} from '@angular/common';
import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'ds-help-text',
  styleUrls: ['./help-text.component.scss'],
  templateUrl: './help-text.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    TranslateModule,
    NgForOf,
  ],
})
export class HelpTextComponent implements OnInit {
  helpText: any[] = [];

  ngOnInit(): void {
    this.helpText = [];
  };

}
