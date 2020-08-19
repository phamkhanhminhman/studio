import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isSwitchDark = false;
  public notHome;

  constructor(
    private _userService: UserService,
  ) { }

  ngOnInit(): void {
    this.notHome = this._userService.setCover.subscribe((data) => {
      this.notHome = data;
    })
  }

  switcherDarkTheme() {
    this.isSwitchDark = !this.isSwitchDark;
    this._userService.applyTheme(this.isSwitchDark.toString())
  }

  setCover() {
    this._userService.applyCover(1);
    localStorage.setItem('cover', '1');
  }
  setNoCover() {
    this._userService.applyCover(0);
    localStorage.setItem('cover', '0');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.notHome = 0;
  }
}
