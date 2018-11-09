import { Component, OnInit } from '@angular/core';
// import { AndroidPermissions } from '@ionic-native/android-permissions';
// import { SMS } from '@ionic-native/sms';
// declare var SMS:any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
public smsData;
  constructor() { }

  ngOnInit() {
// this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(
//   success => alert('Permission granted'),
// err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS)
// );
// this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
  }

  ReadListSMS() {
  // const filter = {
  //        box : 'inbox', // 'inbox' (default), 'sent', 'draft'
  //        indexFrom : 0, // start from index 0
  //        maxCount : 10, // count of SMS to return each time
  //             };
  //        if(SMS) {
  //         SMS.listSMS(filter, (ListSms)=> {
  //           console.log("Sms",ListSms);
  //           this.smsData = JSON.stringify(ListSms);
  //         },err => {
  //          console.log('error list sms: ' + err);
  //          });
  //        }
  }
}
