import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  public aboutList: any = [];

  constructor() {
    this.aboutList = [
      {
        'id': '1',
        'title': 'WHAT IS LOREL IPSUM',
        'subtitle': 'Keep close to Natures heartand break clear away, once in awhile,and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Natures heart and break clear away, once in awhile,and climb a mountain or spend a week in the woods. Wash your spirit clean.'
      },
      {
      'id' : '2',
      'title': 'WHAT IS LOREL IPSUM',
      'subtitle': 'Keep close to Natures heartand break clear away, once in awhile,and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Natures heart and break clear away, once in awhile,and climb a mountain or spend a week in the woods. Wash your spirit clean.'
    },
    {
    'id': '3',
    'title': 'WHAT IS LOREL IPSUM',
    'subtitle': 'Keep close to Natures heartand break clear away, once in awhile,and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Natures heart and break clear away, once in awhile,and climb a mountain or spend a week in the woods. Wash your spirit clean.'
    }
    ];
}
  ngOnInit() {
  }


}
