import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

 // adding logout function
 logout() {
  this.authService.logout();
  this.router.navigate(["/"]);
}

}
