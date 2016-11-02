import { Route } from '@angular/router';
import { DetailPlantComponent } from './index';

export const DetailPlantRoutes: Route[] = [
  {
    path: 'detail-plant/:id',
    component: DetailPlantComponent
  }
];
