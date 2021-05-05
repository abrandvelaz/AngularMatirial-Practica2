
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './botones/botones.component';
import { DividerComponent } from './divider/divider.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  {
    path: 'botones',
    component: BotonesComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tabla',
    component: TablaComponent
  },
  {
    path: 'divider',
    component: DividerComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
