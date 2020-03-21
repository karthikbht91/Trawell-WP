import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showHomeMenuItem: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu(menuName: string) {
    switch(menuName){
      case 'Home':{
        this.showHomeMenuItem = true;
        break;
      }
    }
  }

}
