import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { NotFoundComponent } from "./not-found/not-found.component";


@NgModule({
    declarations: [
        FooterComponent,
        MenuComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule
    ],
    exports: [
        FooterComponent,
        MenuComponent,
        NotFoundComponent
    ]
})

export class NavigationModule {

}