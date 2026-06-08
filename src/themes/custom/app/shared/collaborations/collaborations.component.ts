import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import {
  GoogleChartComponent,
  GoogleChartInterface,
  GoogleChartType,
  Ng2GoogleChartsModule,
} from 'ng2-google-charts';

import { CollaborationsTableComponent } from './collaborations-table/collaborations-table.component';
import { countryIsoToName } from './iso-country'

@Component({
  selector: 'ds-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.scss'],
  standalone: true,
  imports: [
    CollaborationsTableComponent,
    Ng2GoogleChartsModule,
    TranslateModule,
  ],
})
export class CollaborationsComponent implements OnChanges {

  // List of collaborations to be displayed. Can be either an array of objects
  // (each having countryCode/total/publications) or an object mapping country
  // codes to numeric totals.
  @Input() collaborations: any = [];

  // If true, the collaborations table will be shown
  @Input() showCollaborationsTable: boolean;

  // If true, the collaborations country flags will be shown
  @Input() showCollaborationsFlags = false;

  // If false, the sidebar will be shown when a region is clicked. If true, will redirect to search page
  @Input() searchOnClick = true;

  @Input() loading = false;

  chartLoaded = false;

  public geoChart: GoogleChartInterface;
  public publicationsByCountry: any[] = [];

  regionPublications = [];
  infoBoxPosition = { x: 0, y: 0 };
  sidebarVisible = false;
  currentCountry = '';
  currentCountryPublications = 0;

  @ViewChild('googleChartRef') googleChartRef: GoogleChartComponent;

  constructor(
    protected translateService: TranslateService,
    protected router: Router,
    protected cdr: ChangeDetectorRef,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.collaborations && changes.collaborations.currentValue) {
      const current = changes.collaborations.currentValue;
      const hasData = Array.isArray(current)
        ? current.length > 0
        : current && Object.keys(current).length > 0;
      if (hasData) {
        this.getDataTable();
      }
    }
  }

  getDataTable() {
    // support both array and object formats
    if (Array.isArray(this.collaborations)) {
      this.publicationsByCountry = this.collaborations.map((collaboration) => [
        collaboration.countryCode,
        collaboration.total,
      ]); //export const countryIsoToName = (isoCode: string): string => {
    } else if (this.collaborations && typeof this.collaborations === 'object') {
      this.publicationsByCountry = Object.entries(this.collaborations).map(
        ([countryCode, total]) => [countryIsoToName(countryCode), total],
      );
    } else {
      this.publicationsByCountry = [];
    }

    this.geoChart = {
      chartType: GoogleChartType.GeoChart,
      dataTable: [
        ['Country', 'Publications'], ...this.publicationsByCountry],
      options: {
        region: 'world',
        displayMode: 'regions',
        colorAxis: { colors: ['#c7c7d6', '#b3b3c6', '#9ea0b6', '#8b8da6', '#777a96', '#636887', '#505778', '#3d466a', '#29365b', '#14274d'] },
        legend: 'none',
      },
    };
    this.chartLoaded = true;
    this.cdr.detectChanges();
  }

}
