import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Gabriel Castro | Frontend Developer'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Projects & Timeline | Gabriel Castro'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
