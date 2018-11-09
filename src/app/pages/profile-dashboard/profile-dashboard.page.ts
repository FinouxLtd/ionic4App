import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.page.html',
  styleUrls: ['./profile-dashboard.page.scss'],
})
export class ProfileDashboardPage implements OnInit {
  public profileList: any = [];
  constructor() {

    this.profileList = [
      {
        'id' : '1',
        'iconStart' : 'person',
        'name' : 'Personal Information',
        'iconEnd' : 'ios-arrow-forward'
    },
    {
      'id' : '2',
      'iconStart' : 'school',
      'name' : 'Chef Qualification',
      'iconEnd' : 'ios-arrow-forward'
    },
    {
      'id' : '3',
      'iconStart' : 'wallet',
      'name' : 'Wallet',
      'iconEnd' : 'ios-arrow-forward'
    },
    {
      'id' : '4',
      'iconStart' : 'paper',
      'name' : 'Billing Details',
      'iconEnd' : 'ios-arrow-forward'
    },
    {
      'id' : '5',
      'iconStart' : 'call',
      'name' : 'Contact Us',
      'iconEnd' : 'ios-arrow-forward'
    },
    {
      'id' : '6',
      'iconStart' : 'people',
      'name' : 'Invite a Friends',
      'iconEnd' : 'ios-arrow-forward'
    },
    {
      'id' : '7',
      'iconStart' : 'share',
      'name' : 'Refer a chef',
      'iconEnd' : 'ios-arrow-forward'
    },
    {
      'id' : '8',
      'iconStart' : 'unlock',
      'name' : 'Reset Password',
      'iconEnd' : 'ios-arrow-forward'
    },
    {
      'id' : '9',
      'iconStart' : 'star-outline',
      'name' : 'App Rating',
      'iconEnd' : ''
    }
    ];
  }

  ngOnInit() {
  }
}
