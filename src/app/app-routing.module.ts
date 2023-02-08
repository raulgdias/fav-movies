import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/modules/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/modules/movies.module').then(m => m.MoviesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
