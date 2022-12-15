import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsPageRoutingModule } from './settings-page-routing.module';
import { SettingsPageComponent } from './settings-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

//inicio Servicio
//import { LoadScriptsService } from '../_services/load-scripts.service';
//Fin servicio

@NgModule({
  declarations: [
    SettingsPageComponent
  ],
  imports: [
    CommonModule,
    SettingsPageRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],

})
export class SettingsPageModule { }
