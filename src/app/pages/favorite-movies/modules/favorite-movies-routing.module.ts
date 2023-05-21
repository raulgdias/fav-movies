import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { favoriteMoviesPageRoutes as favoriteMoviesPageRoutes } from "./favorite-movies.routes";

const routes: Routes = favoriteMoviesPageRoutes;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MoviesPageRoutingModule { }