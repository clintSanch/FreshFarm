import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule, ProfileRoutingModule
    ],
    exports: [
        ProfileComponent
    ]
})

export class ProfileModule {}