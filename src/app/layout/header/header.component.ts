import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isSwitchDark = false;

  constructor(
    private _userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  switcherDarkTheme() {
    this.isSwitchDark = !this.isSwitchDark;
    this._userService.applyTheme(this.isSwitchDark.toString())
  }
}
