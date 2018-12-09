import { Routes } from '@angular/router';
import { HomeComponent } from '../view/home/home.component';
import { ShowcaseComponent } from '../view/showcase/showcase.component';

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
