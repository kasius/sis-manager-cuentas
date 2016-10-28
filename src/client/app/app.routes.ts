import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { PlantRoutes } from './plant/index';
import { WorkerRoutes } from './worker/index';
import { WGeyserRoutes } from './wgeyser/index';
import { CompanyRoutes } from './company/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...PlantRoutes,
  ...WorkerRoutes,
  ...WGeyserRoutes,
  ...CompanyRoutes
];
