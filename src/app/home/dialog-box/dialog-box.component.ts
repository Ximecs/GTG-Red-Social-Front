import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl,FormGroup} from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { ChooseFilComponent } from '../choose-fil/choose-fil.component';
import { CloseViewComponent } from '../close-view/close-view.component';
import { PublicationsService } from 'src/app/_services/publications.service';
import { subscribeOn } from 'rxjs';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
ngOnInit(): void {
  
}  


  post = new FormGroup({
    publicationTitle : new FormControl,
    transport: new FormControl,
    ciudad : new FormControl,
    presupuesto : new FormControl,
    publiText : new FormControl,
    publiPicture : new FormControl,
  })

onSubmit(){
  console.log(this.post.value)
}
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _bottomSheet: MatBottomSheet,
    private publicationService: PublicationsService,
    ) {}

 

    // uploadPost(post:any){
    //   this.publicationService.uploadPost(post).subscribe({
        
    //   })
    // }

    
   
    openCancellLog(){
      this.dialog.open(CloseViewComponent,{
        width:'100%',
        height:'auto',
        data: "right click"
      })
    }

  
  openBottomSheet() {

    this.publicationService.uploadPost(this.post.value).subscribe({
      next:(response:any) =>{
        console.log(response)
      window.location.reload();
  }})
  
    this._bottomSheet.open(ChooseFilComponent);//open FILE
  }

}
