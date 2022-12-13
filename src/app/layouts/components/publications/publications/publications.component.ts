import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { PublicationsService } from 'src/app/_services/publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  post:any;  

  constructor(
    private authservice:AuthService,
    private router: Router,
    private publicationsServices:PublicationsService

  ) { }

  ngOnInit(): void {
     this.publicationsServices.getPost().subscribe({
      next:(response:any)=>{
        this.post=response.data
      },
      error:(error)=>{
        console.log(error)
      }
     })
  }

  newPost():void{
    this.publicationsServices.uploadPost(this.post).subscribe({
      next:(data)=>{
        console.log(data)
        this.post=data

      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
