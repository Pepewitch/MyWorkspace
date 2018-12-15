import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { ShowcaseComponent } from '../views/showcase/showcase.component';
import { EmbeddedLabComponent } from '../views/embedded-lab/embedded-lab.component';

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
  {
    path: 'embedded',
    component: EmbeddedLabComponent,
  },
];
