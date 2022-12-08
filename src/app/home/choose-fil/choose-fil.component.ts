import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-choose-fil',
  templateUrl: './choose-fil.component.html',
  styleUrls: ['./choose-fil.component.scss']
})
export class ChooseFilComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<ChooseFilComponent>) { }

  ngOnInit(): void {
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
