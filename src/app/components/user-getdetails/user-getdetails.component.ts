import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/models/userDetail';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-getdetails',
  templateUrl: './user-getdetails.component.html',
  styleUrls: ['./user-getdetails.component.css']
})
export class UserGetdetailsComponent implements OnInit {
  userDetails: UserDetail[] = [];
  dataLoaded = false;
  filterText = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userService.getUserDetails().subscribe(response => {
      this.userDetails = response.data;
      this.dataLoaded = true;
    })
  }
}
