import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { BottomSheetOverviewExampleSheetComponent } from '../bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private titleService: Title,
      private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.titleService.setTitle('Habilidades');
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }
}
