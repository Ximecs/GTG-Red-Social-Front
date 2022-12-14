import { Component, OnInit } from '@angular/core';
import { PublicationsService } from 'src/app/_services/publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  constructor(
    private publicationService:PublicationsService
  ) { }

  ngOnInit(): void {

  }
 



}
