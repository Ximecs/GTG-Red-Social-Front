import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePersonRoutingModule } from './profile-person-routing.module';
import { ProfilePersonComponent } from './profile-person.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ProfilePersonComponent
  ],
  imports: [
    CommonModule,
    ProfilePersonRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule
  ]
})
export class ProfilePersonModule { }
