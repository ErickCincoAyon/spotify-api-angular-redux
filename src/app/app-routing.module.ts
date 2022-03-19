import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './shared/guards/no-auth.guard';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    canActivate: [ NoAuthGuard ]
  },
  { 
    path: '',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule ),
    canActivate: [ AuthGuard ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
