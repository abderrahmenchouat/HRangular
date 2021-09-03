import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  login(email: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
