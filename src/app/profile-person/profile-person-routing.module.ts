import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePersonComponent } from './profile-person.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePersonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePersonRoutingModule { }
