import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service'
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
import { SERVICE_CONFIG } from 'src/configs'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _userService: UserService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('setOAuth')) {
      this._httpService.getHttp(SERVICE_CONFIG.AUTH_GOOGLE, false)
        .subscribe(
          res => {
            console.log("https://" + res.data.host);
            location.href = "https://" + res.data.host;
          },
          error => {
            console.log(error);
          });
    } else {
      console.log('album');
    }
  }
}
