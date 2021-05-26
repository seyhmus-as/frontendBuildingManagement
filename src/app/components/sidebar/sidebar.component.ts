import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';
import * as decode from 'jwt-decode';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser: string;
  currentClaim: string;
  expTime: Date = new Date(0);
  nowTime: Date = new Date();
  remainTime:Date = new Date(1970, 0, 1);
  remainSec:number;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    var token = localStorage.getItem('token');
    let tokenInfo = this.getDecodedAccessToken(token);
    this.currentUser = tokenInfo == null ? null : tokenInfo['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
    this.currentClaim = tokenInfo == null ? null : tokenInfo['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']

/*
    this.expTime.setUTCSeconds(tokenInfo['exp']);
    console.log(this.expTime);
    console.log(this.nowTime);
    this.remainSec=this.expTime.getTime()-this.nowTime.getTime())/1000
    console.log((this.expTime.getTime()-this.nowTime.getTime())/1000+" sn")
    this.remainTime.setMilliseconds(this.expTime.getTime()-this.nowTime.getTime())
    console.log(this.remainTime);*/
    

  }

  signout() {
    this.authService.signOut();
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }
}