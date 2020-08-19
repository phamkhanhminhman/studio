import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service'
import { UserService } from 'src/services/user.service';
import { SERVICE_CONFIG, SERVER } from 'src/configs'


@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  public playlist;
  constructor(
    private _httpService: HttpService,
    private _userService: UserService,
  ) { }

  ngOnInit(): void {
    this._userService.applyCover(1);
    //CALL API LIST PLAYLIST YOUTUBE
    this._httpService.getHttp(SERVICE_CONFIG.PLAYLIST).subscribe(
      res => {
        this.playlist = res.data;
        this.playlist.forEach(element => {
          element.thumbnails = SERVER + element.thumbnails
        });
        console.log(this.playlist);

      }
    )
  }

}
