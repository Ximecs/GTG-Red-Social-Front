import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { CloseViewComponent } from '../close-view/close-view.component';


@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.scss']
})
export class QuestionBoxComponent implements OnInit {

   ngOnInit(): void {
  }
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<QuestionBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _bottomSheet: MatBottomSheet) {}
   
    openCancellLog(){
      this.dialog.open(CloseViewComponent,{
        width:'250px',
        height:'auto',
        data: "right click"
      })
    }

}
