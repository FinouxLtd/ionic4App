import { Component, OnInit , ViewChild} from '@angular/core';
import { HttpServiceService } from '../../../providers/http-service/http-service.service';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Nav } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { HttpClient } from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LinkedIn , LinkedInLoginScopes} from '@ionic-native/linkedin/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public products: any = [];
  public user: any = {};
  public userData: any= [];
  public isUserData: Boolean = false;
  public selfData = { id:"", firstName:"", lastName:"" };
  public scopes: LinkedInLoginScopes[] = ['r_basicprofile', 'r_emailaddress'];
  public isLoggedIn: Boolean = false;
  options: InAppBrowserOptions = {
    hidden : 'no',
    toolbarcolor : '#2499ff'
   };
   @ViewChild("Nav") nav: Nav;

  constructor(public httpServiceService: HttpServiceService,
              public flashlight: Flashlight,
              public iab: InAppBrowser,
              private fb: Facebook,
              private http: HttpClient,
              private googlePlus: GooglePlus,
              private linkedin: LinkedIn,
              private router: Router) {
               }

  ngOnInit() {
   this.products =  [
      {
        "isbn": "9781593275846",
        "title": "Eloquent JavaScript, Second Edition",
        "subtitle": "A Modern Introduction to Programming",
        "author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "publisher": "No Starch Press",
        "pages": 472,
        "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        "website": "http://eloquentjavascript.net/"
      },
      {
        "isbn": "9781449331818",
        "title": "Learning JavaScript Design Patterns",
        "subtitle": "A JavaScript and jQuery Developer's Guide",
        "author": "Addy Osmani",
        "published": "2012-07-01T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 254,
        "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
        "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
      },
      {
        "isbn": "9781449365035",
        "title": "Speaking JavaScript",
        "subtitle": "An In-Depth Guide for Programmers",
        "author": "Axel Rauschmayer",
        "published": "2014-02-01T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 460,
        "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
        "website": "http://speakingjs.com/"
      },
      {
        "isbn": "9781491950296",
        "title": "Programming JavaScript Applications",
        "subtitle": "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
        "author": "Eric Elliott",
        "published": "2014-07-01T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 254,
        "description": "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
        "website": "http://chimera.labs.oreilly.com/books/1234000000262/index.html"
      },
      {
        "isbn": "9781593277574",
        "title": "Understanding ECMAScript 6",
        "subtitle": "The Definitive Guide for JavaScript Developers",
        "author": "Nicholas C. Zakas",
        "published": "2016-09-03T00:00:00.000Z",
        "publisher": "No Starch Press",
        "pages": 352,
        "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
        "website": "https://leanpub.com/understandinges6/read"
      },
      {
        "isbn": "9781491904244",
        "title": "You Don't Know JS",
        "subtitle": "ES6 & Beyond",
        "author": "Kyle Simpson",
        "published": "2015-12-27T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 278,
        "description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the You Dont Know JS series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
        "website": "https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond"
      },
      {
        "isbn": "9781449325862",
        "title": "Git Pocket Guide",
        "subtitle": "A Working Introduction",
        "author": "Richard E. Silverman",
        "published": "2013-08-02T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 234,
        "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
        "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
      },
      {
        "isbn": "9781449337711",
        "title": "Designing Evolvable Web APIs with ASP.NET",
        "subtitle": "Harnessing the Power of the Web",
        "author": "Glenn Block, et al.",
        "published": "2014-04-07T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 538,
        "description": "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
        "website": "http://chimera.labs.oreilly.com/books/1234000001708/index.html"
      }
    ];
    this.load();
  }

go() {
  this.router.navigateByUrl('/map');
 // this.nav.push('MapPage');
}

  load() {
   this.httpServiceService.getRequest('https://randomuser.me/api/?results=2').subscribe(data => {
       console.log(data);
  },
  (error) => {
  });
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

// login
// const scopes = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
// this.linkedin.login(['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'], true)
//   .then(() => console.log('Logged in!'))
//   .catch(e => console.log('Error logging in', e));
this.linkedin.getRequest('people/~')
  .then(res => console.log(res))
  .catch(e => console.log(e));


          // this.linkedin.hasActiveSession().then((active) => {
          //   this.isLoggedIn = active;
          //   alert(JSON.stringify(active));
          //   if(!this.isLoggedIn) {
          //       this.getSelfData();
          //   } else {
          //     this.SelfData();
          //   }
          // });
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
