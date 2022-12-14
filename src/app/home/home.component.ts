import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { QuestionBoxComponent } from './question-box/question-box.component';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/_services/profile.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { FormControl } from '@angular/forms';
import { PublicationsService } from 'src/app/_services/publications.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  control = new FormControl();
  user: any;
  profile: any;
  defaultAvatar: string = '/assets/img/default-avatar.png';

  constructor(public dialog: MatDialog,
    private tokenService: TokenStorageService,
    private router: Router,
    private profileService: ProfileService,
    private publicationService:PublicationsService
    ) {}
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
  
  

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
    this.getProfile();
    this.getPost
  }
  changePhoto(e: any) {
    console.log('change photo called');
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    console.log(file);
    const formData = new FormData();
    formData.append('photo', file);
    this.profileService.uploadPhotoProfile(formData).subscribe({
      next: (data) => {
        console.log(data);
        // this.ngOnInit();
        window.location.reload();

      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getProfile() {
    this.profileService.getProfile().subscribe({
      next: (response: any) => {
        this.profile = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getPost(){
    this.publicationService.getPost().subscribe({
      next: (response) =>{
      console.log(response)
      window.location.reload();

    },
    error: (error) => {
      console.log(error);
    },
  });
}
  

  showText() { //leer más y leer menos texto experiencia
    this.isReadMore = !this.isReadMore
 }
isReadMore = true


}
