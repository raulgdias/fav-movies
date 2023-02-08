import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { homePageRoutes } from "./home.routes";

const routes: Routes = homePageRoutes;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomePageRoutingModule { }