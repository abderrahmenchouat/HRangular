import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { HeaderComponent } from './panels/header/header.component';
import { UserListComponent } from './user-list/user-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularMaterialModule } from "./angular-material.module";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'usersregistration', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },

  //{path: '', redirectTo: '/users', pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    UserListComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule
    //AngularMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
