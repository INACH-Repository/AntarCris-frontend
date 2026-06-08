import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import {
  catchError,
  filter,
  map,
  shareReplay,
} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { AuthService } from '../../../../../core/auth/auth.service';
import { EPerson } from '../../../../../core/eperson/models/eperson.model';
import {
  CrisLayoutBox,
  RelationBoxConfiguration,
} from '../../../../../core/layout/models/box.model';
import { Item } from '../../../../../core/shared/item.model';
import { isNotEmpty } from '../../../../../shared/empty.util';
import { CrisLayoutBoxModelComponent } from '../../../../models/cris-layout-box-component.model';

import { CollaborationsComponent } from 'src/themes/custom/app/shared/collaborations/collaborations.component';

/**
 * This component renders the metadata boxes of items
 */
@Component({
  selector: 'ds-cris-layout-collaboration-box',
  templateUrl: './cris-layout-collaboration-box.component.html',
  styleUrls: ['./cris-layout-collaboration-box.component.scss'],
  standalone: true,
  imports: [
    CollaborationsComponent,
  ],
})
export class CrisLayoutCollaborationBoxComponent extends CrisLayoutBoxModelComponent implements OnInit {

  baseUrl = environment.rest.baseUrl;

  /**
   * Filter used for set scope in discovery invocation
   */
  searchFilter: string;
  /**
   * Name of configuration for this box
   */
  configuration: string;

  collaborations: any[] = [];

  regionPublications = [];
  infoBoxPosition = { x: 0, y: 0 };
  sidebarVisible = false;
  currentCountry = '';
  currentCountryPublications = 0;
  loadingCollaborations = true;

  constructor(
    protected authService: AuthService,
    protected translateService: TranslateService,
    protected http: HttpClient,
    protected cdr: ChangeDetectorRef,
    @Inject('boxProvider') public boxProvider: CrisLayoutBox,
    @Inject('itemProvider') public itemProvider: Item,
  ) {
    super(translateService, boxProvider, itemProvider);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.searchFilter = `scope=${this.item.id}`;
    const entityType = this.item.entityType;
    const configuration = entityType === "OrgUnit" ? "RELATION.OrgUnit.rppublications" : "RELATION.Person.researchoutputs";
    this.http.get<any[]>(`${this.baseUrl}/api/nodo/collaborations?sort=dc.date.issued,DESC&page=0&scope=${this.item.id}&entitytype=${entityType}&configuration=${configuration}`)
    .pipe(
      catchError((error) => {
        console.error('Error fetching collaborations');
        this.loadingCollaborations = false;
        this.cdr.detectChanges();
        return [];
      })
    )
    .subscribe(
      (response) => {
        this.collaborations = response;
        this.loadingCollaborations = false;
        this.cdr.detectChanges();
      },
    );
  }

    /*ngOnInit(): void {
    console.log('COLLAB MAP BEFORE');
    super.ngOnInit();
    console.log('COLLAB MAP AFTER');

    this.searchFilter = `scope=${this.item.id}`;
    this.http.get<any[]>(`${this.baseUrl}/api/nodo/collaborations?sort=dc.date.issued,DESC&page=0&scope=${this.item.id}`)
    .pipe(
      catchError((error) => {
        console.error('Error fetching collaborations');
        this.loadingCollaborations = false;
        this.cdr.detectChanges();
        return [];
      })
    )
    .subscribe(
      (response) => {
        this.collaborations = response;
        this.loadingCollaborations = false;
        this.cdr.detectChanges();
      },
    );
  }*/

  protected getOwner(user: EPerson) {
    return this.item.firstMetadataValue('dspace.object.owner', { authority: user.id });
  }

  protected isProfileOwner(): Observable<boolean> {
    return this.authService.getAuthenticatedUserFromStore().pipe(
      filter(isNotEmpty),
      map((user) => isNotEmpty(this.getOwner(user))),
      shareReplay(1),
    );
  }

  protected isPersonEntity(): boolean {
    return isNotEmpty(this.item.firstMetadataValue('dspace.entity.type', { value: 'Person' }));
  }
}
