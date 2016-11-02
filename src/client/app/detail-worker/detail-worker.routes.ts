import { Route } from '@angular/router';
import { DetailWorkerComponent } from './index';

export const DetailWorkerRoutes: Route[] = [
  {
    path: 'detail-worker/:id',
    component: DetailWorkerComponent
  }
];
