import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  create() {
    alert('conta criada com sucesso');
    setTimeout(() => this.home(), 3000);
  }
  home() {
    this.router.navigate(['/home']);
  }
}
