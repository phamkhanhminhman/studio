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
    
  }
}
