import { Component, OnInit,ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { LoadScriptsService } from '../_services/load-scripts.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  
  constructor(private _loadScripts:LoadScriptsService) {
    _loadScripts.load(["show/showPassword"]);
    console.log("funciona loadScrpts")
   }

  ngOnInit(): void {
  }

}

