import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showText() { //leer más y leer menos texto experiencia
    this.isReadMore = !this.isReadMore}
    isReadMore = true
}
