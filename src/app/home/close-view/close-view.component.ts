import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { QuestionBoxComponent } from '../question-box/question-box.component';


@Component({
  selector: 'app-close-view',
  templateUrl: './close-view.component.html',
  styleUrls: ['./close-view.component.scss']
})
export class CloseViewComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(public dialog: MatDialogRef<QuestionBoxComponent>,
    public dialogRef: MatDialogRef<CloseViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _bottomSheet: MatBottomSheet) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.dialog.close(true);
    console.log(this.data);
  }
  continueEditing():void{
    this.dialogRef.close();
  }
  disableSelect = new FormControl(false);
}
