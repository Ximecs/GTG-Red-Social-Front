import { Component, OnInit } from '@angular/core';
import { DialogBoxComponent } from '../home/dialog-box/dialog-box.component';
import { Router,ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { QuestionBoxComponent } from '../home/question-box/question-box.component';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ProfileService } from 'src/app/_services/profile.service';
import { FormControl } from '@angular/forms';
import { PublicationsService } from 'src/app/_services/publications.service';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;
  profile: any;
  defaultAvatar: string = '/assets/img/default-avatar.png';
  defaaultPhotoProfile:string="https://www.infobae.com/new-resizer/csdGxJidj9jpiH5TtbRtgViqcjM=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/EJ4Y4ODTOFDOVJXKP4RLBRBUUI.jpg"


  control = new FormControl();


  constructor(public dialog: MatDialog,
    private tokenService: TokenStorageService,
    private router: Router,
    private profileService: ProfileService,
    private publicationService:PublicationsService,
    private activateRoute:ActivatedRoute
    ) {}
    
    profilePosts:any;
    numberPosts:Number=0;



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

    this.activateRoute.paramMap.subscribe(params =>{

    this.getPostByUser({id: params.get("id")});
    this.getProfileByUser({id: params.get("id")});
  })

   

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
        this.ngOnInit();

      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  

  
  // getProfile() {
  //   this.profileService.getProfile().subscribe({
  //     next: (response: any) => {
  //       this.profile = response.data;

  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }

  getProfileByUser(profileUser:any) {
    this.profileService.getProfileByUser(profileUser).subscribe({
      next: (response: any) => {
        this.profile = response.data[0];
        console.log(this.profile)

      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getPostByUser(user:any){
    this.publicationService.getPostByUser(user).subscribe({
      next: (response:any) =>{
      this.profilePosts = response.data
      this.numberPosts = response.data.length;
      console.log(this.profilePosts)

      // window.location.reload();

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
