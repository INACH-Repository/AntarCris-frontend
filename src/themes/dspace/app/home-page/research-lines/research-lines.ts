export interface line {
  id: number;
  title: string;
  //description: string;
  imageUrl: string;
  link: string;
}

export const researchLines: line[] = [
  {
    id: 1,
    title: 'Línea I. Estado del ecosistema antártico',
    imageUrl: '/assets/dspace/images/research-lines/state-antarctic-ecosystem.jpg',
    link: 'search?page=1&configuration=researchoutputs&query=&f.procien_lines=Estado%20del%20ecosistema%20antártico,equals',
  },
  {
    id: 2,
    title: 'Línea II. Umbrales antárticos: Resiliencia y adaptación del ecosistema',
    imageUrl: '/assets/dspace/images/research-lines/antarctic-thresholds.jpg',
    link: 'search?page=1&configuration=researchoutputs&query=&f.procien_lines=Umbrales%20antárticos:%20Resiliencia%20y%20adaptación%20del%20ecosistema,equals',
  },
  {
    id: 3,
    title: 'Línea III. Cambio climático en la Antártica',
    imageUrl: '/assets/dspace/images/research-lines/climate-change.jpg',
    link: 'search?page=1&configuration=researchoutputs&query=&f.procien_lines=Cambio%20climatico%20en%20la%20Antártica,equals',
  },
  {
    id: 4,
    title: 'Línea IV. Astronomía y Ciencia de la Tierra',
    imageUrl: '/assets/dspace/images/research-lines/astronomy.jpg',
    link: 'search?page=1&configuration=researchoutputs&query=&f.procien_lines=Astronomía%20y%20Ciencia%20de%20la%20Tierra,equals',
  },
  {
    id: 5,
    title: 'Línea V. Biotecnología',
    imageUrl: '/assets/dspace/images/research-lines/biotechnology.jpg',
    link: 'search?page=1&configuration=researchoutputs&query=&f.procien_lines=Biotecnología,equals',
  },
  {
    id: 6,
    title: 'Línea VI. Huellas humanas en la Antártica',
    imageUrl: '/assets/dspace/images/research-lines/human-footprints.jpg',
    link: 'search?page=1&configuration=researchoutputs&query=&f.procien_lines=Huellas%20humanas%20en%20la%20Antártica,equals',
  },
  {
    id: 7,
    title: 'Línea VII. Ciencias Sociales y Humanidades',
    imageUrl: '/assets/dspace/images/research-lines/social-sciences.png',
    link: 'search?page=1&configuration=researchoutputs&query=&f.procien_lines=Ciencias%20Sociales%20y%20Humanidades,equals',
  },
];
