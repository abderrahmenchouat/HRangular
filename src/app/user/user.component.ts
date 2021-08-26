import { HttpClient } from "@angular/common/http";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { UserService } from "../services/user.service";
import { User } from '../models/user.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {

  }

  onSignup(registerForm: NgForm) {
    if (registerForm.invalid) {
      return;
    }
    console.log(this.userService.addUser(registerForm.value));
  }

  ngOnDestroy() {

  }
}
