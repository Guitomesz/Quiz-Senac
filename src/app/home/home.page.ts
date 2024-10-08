import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/login']);
  }

  forgotPassword() {
    this.router.navigate(['/forgot']);
  }

  anonimous() {
    this.router.navigate(['/anonimous']);
  }
  create() {
    this.router.navigate(['/create']);
  }
}
