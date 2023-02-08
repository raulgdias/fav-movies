import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HomePage } from "../home.page";
import { HomePageRoutingModule } from "./home-routing.module";

@NgModule({
    imports: [
        CommonModule,
        HomePageRoutingModule
    ],
    declarations: [
        HomePage
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomePageModule { }