import {
  AsyncPipe,
  NgClass,
  NgFor,
  NgIf,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MetadataLinkViewComponent } from 'src/app/shared/metadata-link-view/metadata-link-view.component';
import { InWorkflowStatisticsComponent } from 'src/app/shared/object-collection/shared/in-workflow-statistics/in-workflow-statistics.component';
import { TruncatablePartComponent } from 'src/app/shared/truncatable/truncatable-part/truncatable-part.component';
import { VarDirective } from 'src/app/shared/utils/var.directive';

import { ViewMode } from '../../../../../core/shared/view-mode.model';
import { ThemedBadgesComponent } from '../../../../../shared/object-collection/shared/badges/themed-badges.component';
import { listableObjectComponent } from '../../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import { MetricBadgesComponent } from '../../../../../shared/object-list/metric-badges/metric-badges.component';
import { MetricDonutsComponent } from '../../../../../shared/object-list/metric-donuts/metric-donuts.component';
import { AdditionalMetadataComponent } from '../../../../../shared/object-list/search-result-list-element/additional-metadata/additional-metadata.component';
import { ItemSearchResultListElementComponent } from '../../../../../shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component';
import { TruncatableComponent } from '../../../../../shared/truncatable/truncatable.component';
import { ThemedThumbnailComponent } from '../../../../../thumbnail/themed-thumbnail.component';

@listableObjectComponent('ThesisSearchResult', ViewMode.ListElement)
@Component({
  selector: 'ds-thesis-search-result-list-element',
  styleUrls: ['./thesis-search-result-list-element.component.scss'],
  templateUrl: './thesis-search-result-list-element.component.html',
  standalone: true,
  imports: [NgIf, RouterLink, ThemedThumbnailComponent, NgClass, ThemedBadgesComponent, TruncatableComponent, TruncatablePartComponent, NgFor, AsyncPipe, TranslateModule, AdditionalMetadataComponent, MetadataLinkViewComponent, MetricBadgesComponent, MetricDonutsComponent, VarDirective, InWorkflowStatisticsComponent],
})
/**
 * The component for displaying a list element for an item search result of the type Thesis
 */
export class ThesisSearchResultListElementComponent extends ItemSearchResultListElementComponent {

  // The metadata to display as author in the search result list element
  authorMetadata = ['dc.contributor.author'];

}
