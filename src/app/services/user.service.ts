import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { User } from './models/user.model';
import { newUser } from '../models/newUser.model';
import { User } from '../models/user.model';


const BACKEND_URL = environment.apiUrl + "/users/";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  private usersUpdated = new Subject<{ users: User[]; userCount: number }>();
  userData: any;

  constructor(private http: HttpClient, private router: Router) {

  }




  getUsers(): User[] {
    this.http.get(BACKEND_URL).subscribe(userData => {
      this.userData = userData;
      this.users = this.userData;
      this.usersUpdated.next({
        users: [...this.users],
        userCount: this.users.length
      });
      console.log("here4")
      console.log(this.users);
    });
    return this.users;
  }


  addUser(user: User) {
    console.log(user);
    this.http
      .post<{ user: newUser }>(
        BACKEND_URL,
        user
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }


}
