import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile.component";

const childRoutes: Routes = [
    { path: 'profile', component: ProfileComponent}
];

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})

export class ProfileRoutingModule {}