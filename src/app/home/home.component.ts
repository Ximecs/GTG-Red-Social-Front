import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { QuestionBoxComponent } from './question-box/question-box.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/_services/profile.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { FormControl,FormGroup } from '@angular/forms';
import { PublicationsService } from 'src/app/_services/publications.service';
import { identity } from 'rxjs';



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
  defaaultPhotoProfile: string = "https://www.infobae.com/new-resizer/csdGxJidj9jpiH5TtbRtgViqcjM=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/EJ4Y4ODTOFDOVJXKP4RLBRBUUI.jpg"

  constructor(public dialog: MatDialog,
    private tokenService: TokenStorageService,
    private router: Router,
    private profileService: ProfileService,
    private publicationService: PublicationsService,
    private activateRoute:ActivatedRoute

  ) { }
  
  homePost: any;
  numberPost:number=0;

  showText() { //leer más y leer menos texto experiencia
    this.isReadMore = !this.isReadMore
  }
  isReadMore = true
  ngOnInit(): void {
    this.user = this.tokenService.getUser();

    this.getPost()

    
    this.getProfileByUser({id:this.user.id});
    this.getPostByUser({id:this.user.id})

  
  };

  openDialog() {
    this.dialog.open(DialogBoxComponent, {
      width: '100%',
      height: 'auto',
      data: "right click"
    })
  }
  openDialogQuestion() {
    this.dialog.open(QuestionBoxComponent, {
      width: '80%',
      height: 'auto',
      data: "right click"
    })
  }
  viewProfile() {
    this.router.navigate(['/profile'])
  }

  getProfileByUser(profileUser:any) {
    // console.log(profileUser)
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
        // console.log(data);
        // this.ngOnInit();
        window.location.reload();

      },
      error: (error) => {
        console.log(error);
      },
    });
  }


  getPost() {
    this.publicationService.getPost().subscribe({
      next: (response:any) =>{
        this.homePost = response.data
        // this.numberPost=response.data.length;
        // console.log(this.numberPost)
      }
      })
    }
    getPostByUser(postBy:any){
      console.log(postBy)
      this.publicationService.getPostByUser(postBy).subscribe({
        next:(response:any)=>{
          // console.log(response)
          this.numberPost=response.data.length;
          
          // console.log(this.numberPost) 
        }
      })
    }
  }