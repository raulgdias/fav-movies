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
    path: 'favorite-movies',
    loadChildren: () => import('./pages/favorite-movies/modules/favorite-movies.module').then(m => m.FavoriteMoviesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
