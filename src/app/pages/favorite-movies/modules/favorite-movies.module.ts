import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FavoriteMoviesPage } from "../favorite-movies.page";
import { MoviesPageRoutingModule } from "./favorite-movies-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MoviesPageRoutingModule
    ],
    declarations: [
        FavoriteMoviesPage
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FavoriteMoviesPageModule { }