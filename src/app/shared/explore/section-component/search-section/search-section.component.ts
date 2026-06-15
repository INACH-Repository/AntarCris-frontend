import {
  AsyncPipe,
  NgForOf,
  NgIf,
} from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SearchSection } from '../../../../core/layout/models/section.model';
import { getFirstSucceededRemoteDataPayload } from '../../../../core/shared/operators';
import { SearchService } from '../../../../core/shared/search/search.service';
import { SearchConfigurationService } from '../../../../core/shared/search/search-configuration.service';
import { SearchConfig } from '../../../search/search-filters/search-config.model';
import { ThemedSearchFormComponent } from '../../../search-form/themed-search-form.component';

/**
 * Component representing the Search component section.
 */
@Component({
  selector: 'ds-base-search-section',
  templateUrl: './search-section.component.html',
  standalone: true,
  imports: [
    ThemedSearchFormComponent,
    TranslateModule,
    NgIf,
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    AsyncPipe,
    NgbAccordionModule,
  ],
})
export class SearchSectionComponent implements OnInit {

  @Input()
    sectionId: string;

  @Input()
    searchSection: SearchSection;

  // The search form
  searchForm: FormGroup;

  filters: Observable<string[]>;

  discoveryTexts: string[];

  allFilter = 'all';

  operations = ['AND', 'OR', 'NOT'];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private searchService: SearchService,
              private searchConfigurationService: SearchConfigurationService,
  ) {

  }

  get queryArray(): FormArray {
    return this.searchForm.get('queryArray') as FormArray;
  }

  ngOnInit() {

    this.filters = this.searchConfigurationService.getSearchConfigurationFor(null, this.searchSection.discoveryConfigurationName).pipe(
      getFirstSucceededRemoteDataPayload(),
      map((searchFilterConfig: SearchConfig) => {
        return [this.allFilter].concat(searchFilterConfig.filters
          .filter((filterConfig) => !filterConfig.filter.startsWith('graph'))
          .map((filterConfig) => filterConfig.filter));
      }),
    );

    this.searchForm = this.formBuilder.group(({
      queryArray: this.formBuilder.array([]),
    }));

    const statements = this.searchSection.initialStatements ? this.searchSection.initialStatements : 3;
    for (let i = 0; i < statements; i++) {
      this.addQueryStatement();
    };
    console.log(this.searchSection.discoveryConfigurationName);
    if (this.searchSection.discoveryConfigurationName == "person") {
      this.discoveryTexts = [
        'Tópico de investigación: Palabras claves que representan el topico del investigador.',
        'Instituciones: Instituciones a las que ha estado afiliada el investigador.',
        ];
    } else if (this.searchSection.discoveryConfigurationName == "orgunits") {
      this.discoveryTexts = [
        'País de la institución: Pais en donde se encuentre la sede principal de la institución.',
        'Región de la institución: Región en donde se encuentra la sede principal de la institución.',
        ];
    } else if (this.searchSection.discoveryConfigurationName == "project_funding") {
      this.discoveryTexts = [
        'Investigador a cargo: Investigador que se adjudico el proyecto.',
        'Institución ejecutora: Institución a la que pertenece el investigador a cargo del proyecto.',
        'Fecha de inicio: Año en que se empezo a ejecutar el proyecto.',
        'Fecha de termino: Año en que se termina de ejecutar el proyecto.',
        'Institución financiadora: Institucioón que financia el proyecto.',
        'Lineas de investigación PROCIEN: Linea de investigación PROCIEN asociada al proyecto.',
        ];
    } else if (this.searchSection.discoveryConfigurationName == "researchoutputs") {
      this.discoveryTexts = [
        'Autor: Autor de la publicación.',
        'Institución: Institución del autor.',
        'Tópico de investigación: Palabras claves de la articulo.',
        'Fecha de publicación: Año en que se publico el articulo.',
        'Lineas de investigación PROCIEN: Linea de investigación del PROCIEN asociada al articulo.',
        'País: País del autor asociadado a la publicación.',
        'Cuartil: Cuartil de la revista en la que se publico el articulo.',
      ];
    } else if (this.searchSection.discoveryConfigurationName == "thesis") {
      this.discoveryTexts = [
        'Objetivos de Desarrollo Sostenible: Objetivo de Desarrollo Sostenible asociado a la tesis.',
        'Lineas de investigación PROCIEN: Linea de investigacion del PROCIEN asociada a la tesis.',
        'Institución: Institución en la que se desarrollo la tesis.',
      ];
    } else {
      this.discoveryTexts = [];
    };
  }

  /**
   * Navigate to the search page with the composed query.
   * @param data the query statements
   */
  onSubmit(data: { queryArray: QueryStatement[] }) {
    const query = this.composeQuery(data.queryArray);
    const configurationName = this.searchSection.discoveryConfigurationName;
    this.router.navigate([this.searchService.getSearchLink()], {
      queryParams: {
        page: 1,
        configuration: configurationName,
        query: query,
      },
    });
  }

  /**
   * Reset the form.
   */
  onReset() {
    this.queryArray.controls.splice(0, this.queryArray.controls.length);
    const statements = this.searchSection.initialStatements ? this.searchSection.initialStatements : 3;
    for (let i = 0; i < statements; i++) {
      this.addQueryStatement();
    }
  }

  /**
   * Initialize the form group.
   */
  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      filter: this.allFilter,
      query: '',
      operation: this.operations[0],
    });
  }

  addQueryStatement(): void {
    this.queryArray.push(this.createFormGroup());
  }

  /**
   * Compose the search query starting from the user input.
   *
   * @param statements the query statements entered by the user
   */
  composeQuery(statements: QueryStatement[]): string {
    let query = '';

    for (const statement of statements) {
      if (statement.query !== '') {
        const statementFilter = statement.filter !== this.allFilter ? statement.filter + ':' : '';
        query = query + ' ' + statementFilter + '(' + statement.query + ') ' + statement.operation;
      }
    }

    // Remove last operation
    const lastOperationIndex = query.lastIndexOf(' ');
    return query.substring(0, lastOperationIndex).trim();
  }
}

/**
 * Interface related to the form model.
 */
interface QueryStatement {
  filter: string;
  query: string;
  operation: string;
}
