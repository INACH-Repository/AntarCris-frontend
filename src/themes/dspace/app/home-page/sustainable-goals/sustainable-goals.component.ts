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
  selector: 'ds-sustainable-goals',
  styleUrls: ['./sustainable-goals.component.scss'],
  templateUrl: './sustainable-goals.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    TranslateModule,
    NgForOf,
  ],
})
export class SustainableGoalsComponent implements OnInit {
  private translate = inject(TranslateService);
  sustainableGoals: any[] = [];

  ngOnInit(): void {
    const currentLanguage = this.translate.currentLang;
    this.sustainableGoals = [
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%201:%20Fin%20de%20la%20pobreza,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-1.webp`,
        'name': 'Fin de la pobreza',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%202:%20Hambre%20cero,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-2.webp`,
        'name': 'Hambre cero',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%203:%20Salud%20y%20bienestar,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-3.webp`,
        'name': 'Salud y bienestar',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%204:%20Educaci%C3%B3n%20de%20calidad,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-4.webp`,
        'name': 'Educación de calidad',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%205:%20Igualdad%20de%20g%C3%A9nero,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-5.webp`,
        'name': 'Igualdad de género',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%206:%20Agua%20limpia%20y%20saneamiento,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-6.webp`,
        'name': 'Agua limpia y saneamiento',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%207:%20Energ%C3%ADa%20asequible%20y%20no%20contaminante,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-7.webp`,
        'name': 'Energía asequible y no contaminante',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%208:%20Trabajo%20decente%20y%20crecimiento%20econ%C3%B3mico,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-8.webp`,
        'name': 'Trabajo decente y crecimiento económico',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%209:%20Industria,%20innovaci%C3%B3n%20e%20infraestructura,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-9.webp`,
        'name': 'Industria, innovación e infraestructura',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%2010:%20Reducci%C3%B3n%20de%20las%20desigualdades,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-10.webp`,
        'name': 'Reducción de las desigualdades',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%2011:%20Ciudades%20y%20comunidades%20sostenibles,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-11.webp`,
        'name': 'Ciudades y comunidades sostenibles',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%2012:%20Producci%C3%B3n%20y%20consumo%20responsables,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-12.webp`,
        'name': 'Producción y consumo responsables',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%2013:%20Acci%C3%B3n%20por%20el%20clima,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-13.webp`,
        'name': 'Acción por el clima',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%2014:%20Vida%20submarina,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-14.webp`,
        'name': 'Vida submarina',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%2015:%20Vida%20de%20ecosistemas%20terrestres,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-15.webp`,
        'name': 'Vida de ecosistemas terrestres',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%2016:%20Paz,%20justicia%20e%20instituciones%20s%C3%B3lidas,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-16.webp`,
        'name': 'Paz, justicia e instituciones sólidas',
      },
      {
        'url': 'search?page=1&configuration=researchoutputs&query=&f.ods=ODS%2017:%20Alianzas%20para%20lograr%20los%20objetivos,equals',
        'img': `assets/dspace/images/sdg/${currentLanguage}/ods-17.webp`,
        'name': 'Alianzas para lograr los objetivos',
      },
    ];
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
