import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { moviesPageRoutes } from "./movies.routes";

const routes: Routes = moviesPageRoutes;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MoviesPageRoutingModule { }