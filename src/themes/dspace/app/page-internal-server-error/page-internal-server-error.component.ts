import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ServerResponseService } from '../../../../app/core/services/server-response.service';
import { RouterLink } from '@angular/router';
import { PageInternalServerErrorComponent as BaseComponent } from '../../../../app/page-internal-server-error/page-internal-server-error.component';

/**
 * This component representing the `PageInternalServer` DSpace page.
 */
@Component({
  selector: 'ds-base-page-internal-server-error',
  styleUrls: ['./page-internal-server-error.component.scss'],
  //styleUrls: ['../../../../app/page-internal-server-error/page-internal-server-error.component.scss'],
  //templateUrl: '../../../../app/page-internal-server-error/page-internal-server-error.component.html',
  templateUrl: './page-internal-server-error.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [TranslateModule, RouterLink],
})
export class PageInternalServerErrorComponent extends BaseComponent {}
