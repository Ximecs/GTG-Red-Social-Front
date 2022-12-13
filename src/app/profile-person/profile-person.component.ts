import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-profile-person',
  templateUrl: './profile-person.component.html',
  styleUrls: ['./profile-person.component.scss']
})
export class ProfilePersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showText() { //leer más y leer menos texto experiencia
    this.isReadMore = !this.isReadMore
 }
isReadMore = true


}
