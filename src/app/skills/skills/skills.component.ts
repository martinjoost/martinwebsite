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

  othersLibs:any = [
    {
      name:'Angular',
      href:'https://angular.io/guide/universal',
      url:'https://miro.medium.com/max/520/1*ytpzQXUtyJx2xD2j1iRIZA.png',
    },
    {
      name:'Angular pwa',
      href:'https://angular.io/guide/service-worker-getting-started',
      url:'data:image/png;base64,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',
    },
    {
      name:'Firebase',
      href:'https://firebase.google.com/',
      url:'https://img.icons8.com/color/480/firebase.png',
    },
    {
      name:'Nodejs',
      href:'https://nodejs.org/es/',
      url:'https://img.icons8.com/color/480/nodejs.png',
    },
    {
      name:'Highcharts.js',
      href:'https://www.highcharts.com',
      url:'https://www.w3big.com/highcharts/Vx4_Psj1.png',
    },
    {
      name:'i18n Internazionalization',
      href:'https://angular.io/guide/i18n',
      url:'https://pbs.twimg.com/media/CTjmt3UXIAQxorO.png',
    },
    {
      name:'Vb.net',
      href:'https://es.wikipedia.org/wiki/Visual_Basic_.NET',
      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/245px-VB.NET_Logo.svg.png',
    },
  ]
  frameworks:any = [
    {
      name:'Reactjs',
      href:'https://angular.io/guide/universal',
      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
    },
    {
      name:'Dart',
      href:'https://dart.dev/',
      url:'https://cdn.worldvectorlogo.com/logos/flutter-logo.svg',
    }
  ]

  constructor(private titleService: Title,
      private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.titleService.setTitle('Habilidades');
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }
}
