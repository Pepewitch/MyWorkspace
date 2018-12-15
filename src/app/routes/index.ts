import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { ShowcaseComponent } from '../views/showcase/showcase.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'showcase',
    component: ShowcaseComponent,
  },
];
