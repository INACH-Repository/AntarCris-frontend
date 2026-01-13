import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

import { environment } from '../../../../../../src/environments/environment';
import {
  APP_CONFIG,
  AppConfig,
} from '../../../../../config/app-config.interface';

@Component({
  selector: 'ds-year-production-summary',
  templateUrl: './year-production-summary.component.html',
  styleUrls: ['./year-production-summary.component.scss'],
  standalone: true,
})
export class YearProductionSummaryComponent implements OnInit {
  baseUrl = environment.rest.baseUrl;
  interval = 5;
  currentYear = new Date().getFullYear();
  startYear = this.currentYear - this.interval + 1;

  data: any[] = [];

  total: number;
  average: number;
  best_year: number;
  best_count: number;

  constructor(
    @Inject(APP_CONFIG) protected appConfig: AppConfig,
    @Inject(PLATFORM_ID) protected platformId: Object,
    protected http: HttpClient,
    protected cdRef: ChangeDetectorRef,
  ) {}

  async ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    this.http.get<any[]>(`${this.baseUrl}/api/nodo/production-yield?startYear=${this.startYear}&endYear=${this.currentYear}`).subscribe(
      (response) => {
        this.data = Object.entries(response).map(([key, value]) => ({
          year: key.toString(),
          count: value,
        }));
        this.total = this.calculateTotal();
        this.average = this.calculateAverage();
        const bestYearData = this.getBestYear();
        this.best_year = bestYearData.year;
        this.best_count = bestYearData.count;
        this.cdRef.detectChanges();
      },
    );

  }

  calculateTotal(): number {
    return this.data.reduce((sum, item) => sum + item.count, 0);
  }

  calculateAverage(): number {
    return this.calculateTotal() / this.data.length;
  }

  getBestYear(): { year: number; count: number } {
    return this.data.reduce(
      (best, item) => (item.count > best.count ? item : best),
      { year: 0, count: 0 },
    );
  }

}
