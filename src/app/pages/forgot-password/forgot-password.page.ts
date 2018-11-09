import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  public loginForm = {};
  public showPopup: Boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  send() {
    if(this.loginForm['email'] == "admin@admin.com") {
      this.router.navigateByUrl('/resetPassword');
    } else {
      this.showPopup = true;
    }
  }
}
