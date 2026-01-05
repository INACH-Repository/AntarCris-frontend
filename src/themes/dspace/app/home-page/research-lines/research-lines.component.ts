import { Component } from '@angular/core';

import { researchLines } from './research-lines';

@Component({
  selector: 'ds-research-lines',
  templateUrl: './research-lines.component.html',
  styleUrls: ['./research-lines.component.scss'],
  standalone: true,
})
export class ResearchLinesComponent {
  researchLines = researchLines;
}
