import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  login: boolean
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    if (localStorage.getItem('token') != null) {
      console.log();
    }
    this.login = false;//acoun name yazılacak
  }
  signout() {
    this.authService.signOut();
  }
}
