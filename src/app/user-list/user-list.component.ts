import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[] = [];
  userData: any;
  // private usersSubscription: Subscription;
  totalUsers: number = 0;
  usersPerPage: number = 5;
  currentPage: number = 1;
  usersSizeOptions = [1, 5, 10, 25, 50, 100];


  constructor(private http: HttpClient, private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.usersPerPage = pageData.pageSize;
  }

  onDelete(user_id: number){
    console.log("attempt to delete user_id: " + user_id.toString());
    this.http.delete("http://localhost:3000/api/users?user_id=" + user_id.toString()).subscribe(response => console.log(response));
  }

  getUsers(){
    console.log("here");
    console.log(this.userService.getUsers());



    this.http.get("http://localhost:3000/api/users/").subscribe(userData => {
      this.userData = userData;
      this.users = this.userData;
      this.totalUsers = this.users.length;
      console.log(this.users);
      console.log(this.totalUsers);
  });
  }

  ngOnDestroy() {
    // this.usersSubscription.unsubscribe();

  }

}
