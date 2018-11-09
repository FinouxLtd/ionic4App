import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { config } from '../../../shared/config';
import {HttpServiceService} from '../../../providers/http-service/http-service.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
 public resetForm = {};
  constructor(private router: Router,
    public httpService: HttpServiceService) { }

  ngOnInit() {
  }

  submit() {
    this.router.navigateByUrl('/profileDashboard');
  }
}
