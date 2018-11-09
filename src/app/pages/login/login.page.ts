import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { HttpClient } from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LinkedIn , LinkedInLoginScopes} from '@ionic-native/linkedin/ngx';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { config } from '../../../shared/config';
import {HttpServiceService} from '../../../providers/http-service/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public scopes: LinkedInLoginScopes[] = ['r_basicprofile', 'r_emailaddress'];
  public user: any = {};
  public options: InAppBrowserOptions = {
    hidden : 'no',
    toolbarcolor : '#2499ff'
   };
  public userData: any= [];
  public isUserData: Boolean = false;
  public selfData = { id:"", firstName:"", lastName:"" };
  public invalidPassShow: Boolean = false;
  public loginForm = {};
  constructor(public iab: InAppBrowser,
              private fb: Facebook,
              private http: HttpClient,
              private googlePlus: GooglePlus,
              private linkedin: LinkedIn,
              private router: Router,
              public httpService: HttpServiceService) { }

  ngOnInit() {
  }
  forgotPassword() {
    this.router.navigateByUrl('/forgotPassword');
  }

  register() {
    this.router.navigateByUrl('/register');
  }

  aboutUs() {
    this.router.navigateByUrl('/aboutUs');
  }

  login() {
 console.log(this.loginForm);
  if(this.loginForm['username'] != undefined && this.loginForm['username'] != "" &&
      this.loginForm['password'] != undefined && this.loginForm['password'] != "") {
    this.loginForm['version'] ='1.0.0';
    console.log(this.loginForm);
    console.log(JSON.stringify(this.loginForm));

    this.httpService.sendRequest(config['doLogin'], this.loginForm).subscribe(data => {
      alert("Success");
    },
    (error) => {
      alert(JSON.stringify(error));
     console.log(error);
   });
    // this.invalidPassShow = false;
  } else {
      this.invalidPassShow = true;
      setTimeout(() => {
        this.invalidPassShow = false;
      }, 10000);
  }
  }
  inAppBrowserOpen() {
    const browser = this.iab.create('https://ionicframework.com/', '_self', this.options);
    browser.on('loadstop').subscribe(event => {
       browser.insertCSS({ code: "body{color: red;" });
    });
  }


  // Login With FaceBook
  loginwithFacebook() {
      this.fb.login(['email']).then((res: FacebookLoginResponse) => {
      if(res.status=== 'connected') {
      this.user.img ='http://graph.facebook.com/'+res.authResponse.userID+'/picture?type=square';
      this.getData(res.authResponse.accessToken);
      } else {
        alert('Login failed');
      }
    })
    .catch(e => console.log('Error logging into Facebook', e));
    }
    getData(access_token:string) {
      const url = 'https://graph.facebook.com/me?fields=id,name,first_name,last_name,email&access_token=' + access_token;
      this.http.get(url).subscribe(data => {
        this.isUserData = true;
         this.userData = JSON.stringify(data);
         alert(JSON.stringify(data));
        // this.userData= data;
        console.log(data);
      });
    }

    //  Gmail Login
    loginWithGmail() {
      this.googlePlus.login({})
        .then(res => {
          alert(JSON.stringify(res));
         })
        .catch(err =>  alert(JSON.stringify(err)));
    }

        //  LinkDin Login

        loginWithLinkedIn() {
          // check if there is an active session
this.linkedin.hasActiveSession().then((active) => console.log('has active session?', active));
this.linkedin.getRequest('people/~')
  .then(res => console.log(res))
  .catch(e => console.log(e));

        }
        getSelfData() {
          this.linkedin.login(this.scopes, true).then(() => {
             this.SelfData();
         }).catch(e => console.log('Error logging in', e));
 }
        SelfData() {
          this.linkedin.getRequest('people/~').then(res => {
                  this.selfData = res;
                  alert(JSON.stringify(this.selfData));
              }).catch(e => console.log(e));
      }

}
