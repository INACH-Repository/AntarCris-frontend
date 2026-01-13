import {
  AsyncPipe,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
} from '@angular/common';
import { Component } from '@angular/core';

import { HomeCoarComponent } from '../../../../app/home-page/home-coar/home-coar.component';
import { ThemedHomeNewsComponent } from '../../../../app/home-page/home-news/themed-home-news.component';
import { HomePageComponent as BaseComponent } from '../../../../app/home-page/home-page.component';
import { SuggestionsPopupComponent } from '../../../../app/notifications/suggestions-popup/suggestions-popup.component';
import { ThemedBrowseSectionComponent } from '../../../../app/shared/explore/section-component/browse-section/themed-browse-section.component';
import { ThemedCountersSectionComponent } from '../../../../app/shared/explore/section-component/counters-section/themed-counters-section.component';
import { ThemedFacetSectionComponent } from '../../../../app/shared/explore/section-component/facet-section/themed-facet-section.component';
import { ThemedSearchSectionComponent } from '../../../../app/shared/explore/section-component/search-section/themed-search-section.component';
import { ThemedTextSectionComponent } from '../../../../app/shared/explore/section-component/text-section/themed-text-section.component';
import { ThemedTopSectionComponent } from '../../../../app/shared/explore/section-component/top-section/themed-top-section.component';
import { ViewTrackerComponent } from '../../../../app/statistics/angulartics/dspace/view-tracker.component';
import { HeroComponent } from './hero/hero.component';
import { ResearchLinesComponent } from './research-lines/research-lines.component';
import { SustainableGoalsComponent } from './sustainable-goals/sustainable-goals.component';
import { YearProductionSummaryComponent } from './year-production-summary/year-production-summary.component';

@Component({
  selector: 'ds-themed-home-page',
  // styleUrls: ['./home-page.component.scss'],
  styleUrls: ['../../../../app/home-page/home-page.component.scss', './home-page.component.scss'],
  templateUrl: './home-page.component.html',
  //templateUrl: '../../../../app/home-page/home-page.component.html',
  standalone: true,
  imports: [
    ThemedTextSectionComponent,
    HomeCoarComponent,
    ThemedHomeNewsComponent,
    NgSwitch,
    NgForOf,
    NgIf,
    ThemedTopSectionComponent,
    NgSwitchCase,
    ThemedBrowseSectionComponent,
    ThemedSearchSectionComponent,
    ThemedFacetSectionComponent,
    ThemedCountersSectionComponent,
    ViewTrackerComponent,
    SuggestionsPopupComponent,
    AsyncPipe,
    HeroComponent,
    ResearchLinesComponent,
    SustainableGoalsComponent,
    YearProductionSummaryComponent,
  ],
})
export class HomePageComponent extends BaseComponent {

}
