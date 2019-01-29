import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { EmbeddedLabComponent } from '../views/embedded-lab/embedded-lab.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'embedded',
    component: EmbeddedLabComponent,
  },
];
