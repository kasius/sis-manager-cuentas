import { Route } from '@angular/router';
import { WorkerComponent } from './index';
import { WGeyserComponent } from '../wgeyser/index';


export const WorkerRoutes: Route[] = [
  {path: '', component: WorkerComponent},
  {path: 'workGeyser', component: WorkerComponent}, 
  {path: 'workRelay', component: WGeyserComponent},
  {path: 'workOhsas', component: WorkerComponent}
];

// workGeyser