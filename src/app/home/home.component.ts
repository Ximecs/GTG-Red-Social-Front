import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { QuestionBoxComponent } from './question-box/question-box.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private router: Router) {}
  openDialog(){
    this.dialog.open(DialogBoxComponent,{
      width:'100%',
      height:'auto',
      data: "right click"
    })
  }
  openDialogQuestion(){
    this.dialog.open(QuestionBoxComponent,{
      width:'80%',
      height:'auto',
      data: "right click"
    })
  }
  viewProfile(){
    this.router.navigate(['/profile'])
  }
  

  ngOnInit(): void {
  }
  showText() { //leer más y leer menos texto experiencia
    this.isReadMore = !this.isReadMore
 }
isReadMore = true


}
