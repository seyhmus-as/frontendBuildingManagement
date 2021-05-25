import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser: string;
  currentClaim: string;
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    var token = localStorage.getItem('token');
    let tokenInfo = this.getDecodedAccessToken(token);
    this.currentUser = tokenInfo == null ? null : tokenInfo['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
    this.currentClaim = tokenInfo == null ? null : tokenInfo['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
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