//import { CommonModule } from '@angular/common';
//import { Component } from '@angular/core';
//import { TranslateModule } from '@ngx-translate/core';

//import { ThemedLoadingComponent } from '../../../../../app/shared/loading/themed-loading.component';
//import { VarDirective } from '../../../../../app/shared/utils/var.directive';
//import { CrisStatisticsPageComponent } from '../../../../../app/statistics-page/cris-statistics-page/cris-statistics-page.component';
//import { SiteStatisticsPageComponent as BaseComponent } from '../../../../../app/statistics-page/site-statistics-page/site-statistics-page.component';
//import { StatisticsTableComponent } from '../../../../../app/statistics-page/statistics-table/statistics-table.component';

//@Component({
//  selector: 'ds-themed-site-statistics-page',
  // styleUrls: ['./site-statistics-page.component.scss'],
//  styleUrls: ['../../../../../app/statistics-page/site-statistics-page/site-statistics-page.component.scss'],
  // templateUrl: './site-statistics-page.component.html',
//  templateUrl: '../../../../../app/statistics-page/statistics-page/statistics-page.component.html',
//  standalone: true,
//  imports: [CommonModule, VarDirective, ThemedLoadingComponent, StatisticsTableComponent, TranslateModule, CrisStatisticsPageComponent],
//})

/**
 * Component representing the site-wide statistics page.
 */
//export class SiteStatisticsPageComponent extends BaseComponent {}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { SiteDataService } from '../../../../../app/core/data/site-data.service';
import { Site } from '../../../../../app/core/shared/site.model';
import { ThemedLoadingComponent } from '../../../../../app/shared/loading/themed-loading.component';
import { VarDirective } from '../../../../../app/shared/utils/var.directive';
import { CrisStatisticsPageComponent } from '../../../../../app/statistics-page/cris-statistics-page/cris-statistics-page.component';
import { StatisticsPageDirective } from '../../../../../app/statistics-page/statistics-page/statistics-page.directive';
import { StatisticsTableComponent } from '../../../../../app/statistics-page/statistics-table/statistics-table.component';

/**
 * Component representing the site-wide statistics page.
 */
@Component({
  selector: 'ds-base-site-statistics-page',
  templateUrl: './site-statistics-page.component.html',
  styleUrls: ['../../../../../app/statistics-page/site-statistics-page/site-statistics-page.component.scss'],
  standalone: true,
  imports: [CommonModule, VarDirective, ThemedLoadingComponent, StatisticsTableComponent, TranslateModule, CrisStatisticsPageComponent],
})
export class SiteStatisticsPageComponent extends StatisticsPageDirective<Site> {

  /**
   * The report types to show on this statistics page.
   */
  types: string[] = [
    'TotalVisits',
  ];

  constructor(protected siteService: SiteDataService) {
    super();
  }

  protected getScope$() {
    return this.siteService.find();
  }

}
