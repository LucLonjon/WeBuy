import { Component, OnInit } from '@angular/core';
import { User } from '../header/user';
import { UserService } from '../header/user.service';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styles: [`
    .hero {
      background-image: url('/assets/img/bg.jpeg') !important;
      background-size: cover;
      background-position: center center;
    }
  `]
})

export class HomeComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
   

  }

}
