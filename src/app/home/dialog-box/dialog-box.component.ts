import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { ChooseFilComponent } from '../choose-fil/choose-fil.component';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
ngOnInit(): void {
  
}

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _bottomSheet: MatBottomSheet) {}

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data);
  }
  openBottomSheet(): void {
    this._bottomSheet.open(ChooseFilComponent);//open FILE
  }

  disableSelect = new FormControl(false);
}
