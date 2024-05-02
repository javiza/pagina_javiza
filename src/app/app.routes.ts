import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'administracion',
    loadComponent: () => import('./adminitrador/administracion.page').then( m => m.AdministracionPage)
  },
  {
    path: 'usuario',
    loadComponent: () => import('./usuario/usuario.page').then( m => m.UsuarioPage)
  },
];
