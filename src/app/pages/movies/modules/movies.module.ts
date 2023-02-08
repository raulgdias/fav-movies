import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MoviesPage } from "../movies.page";
import { MoviesPageRoutingModule } from "./movies-routing.module";

@NgModule({
    imports: [
        CommonModule,
        MoviesPageRoutingModule
    ],
    declarations: [
        MoviesPage
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MoviesPageModule { }