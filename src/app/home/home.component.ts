import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/services/http.service'
import { UserService } from 'src/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SERVICE_CONFIG } from 'src/configs'
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('tww', { static: true }) typewriterElement;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoHeight: false,
    autoWidth: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1050: {
        items: 1,
      }
    }
  }
  customOptions2: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1000,
    margin: 10,
    autoHeight: false,
    autoWidth: false,
    smartSpeed: 100,
    responsive: {
      0: {
        items: 3,
      },
      480: {
        items: 4,

      },
      768: {
        items: 5,
      },
      991: {
        items: 6,
      },
      1200: {
        items: 10,
      }
    }
  }

  public data = {
    code: null,
    access_token: null
  };

  public baseURL;
  public currentWidth;
  public currentHeight;
  public paramBaseURL;
  public paramURL;
  public isDarkTheme;

  constructor(
    private _httpService: HttpService,
    private _userService: UserService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isDarkTheme = this._userService.setTheme.subscribe((data) => this.isDarkTheme = data);

    if (localStorage.getItem('theme')) {
      this.isDarkTheme = localStorage.getItem('theme')
    }
    
    this.currentWidth = window.innerWidth;
    this.currentHeight = window.innerHeight;
    if (this.currentWidth > 1000) {
      this.currentHeight = 620;
    }
    this.paramBaseURL = '=w' + this.currentWidth + '-h' + this.currentHeight + '-c';
    this.paramURL = '=w144-h96-c;'

    //CALL API LIST MEDIA ITEMS
    this._httpService.getHttp(SERVICE_CONFIG.MEDIA_ITEMS).subscribe(
      res => {
        console.log(res);
        this.baseURL = res.data;
      }
    )
  }
}
