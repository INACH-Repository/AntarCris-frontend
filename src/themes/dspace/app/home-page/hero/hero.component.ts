import {
  AsyncPipe,
  NgIf,
  NgOptimizedImage,
} from '@angular/common';
import { Component } from '@angular/core';

import { ThemedSearchSectionComponent } from '../../../../../app/shared/explore/section-component/search-section/themed-search-section.component';


@Component({
  selector: 'ds-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    ThemedSearchSectionComponent,
    NgOptimizedImage,
  ],
})
export class HeroComponent {

  sectionId = 'site';

  searchSection = {
    componentType: 'search',
    discoveryConfigurationName: 'site',
    displayTitle: false,
    initialStatements: 3,
    searchType: 'basic',
    style: '',
  };

}
