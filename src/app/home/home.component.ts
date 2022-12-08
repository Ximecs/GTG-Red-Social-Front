import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  openDialog(){
    this.dialog.open(DialogBoxComponent,{
      width:'100%',
      height:'auto',
      data: "right click"
    })
  }

  ngOnInit(): void {
  }
  showText() { //leer más y leer menos texto experiencia
    this.isReadMore = !this.isReadMore
 }
isReadMore = true


}
