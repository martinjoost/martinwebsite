import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { BottomSheetOverviewExampleSheetComponent } from '../bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private titleService: Title,
      private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.titleService.setTitle('Sobre Mí');
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }
}
