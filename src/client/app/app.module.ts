import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { PlantModule } from './plant/plant.module';
import { CompanyModule } from './company/company.module';
import { WorkerModule } from './worker/worker.module';
import { WGeyserModule } from './wgeyser/wgeyser.module';
import { SharedModule } from './shared/shared.module';
import { ApisModule } from './apis/apis.module';
import { AccountModule } from './account/account.module';
import { DetailWorkerModule } from './detail-worker/detail-worker.module';
import { DetailPlantModule } from './detail-plant/detail-plant.module';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), AboutModule, HomeModule, SharedModule.forRoot(), PlantModule, WorkerModule, WGeyserModule, CompanyModule, ApisModule, AccountModule, DetailWorkerModule, DetailPlantModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
