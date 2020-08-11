import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service'
import { UserService } from 'src/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    center: false,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }
  customOptions2: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    center: false,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    smartSpeed: 1000,
    responsive : {
			0 : {
				items: 3,
			},
			480 : {
				items: 4,
				
			},
			768 : {
				items: 5,
			},
			991 : {
				items: 6,
			},
			1200 : {
				items: 13,
			}
		}
  }

  public data = {
    code: null,
    access_token: null
  };
  public baseURL;
  public selectedIndex;

  constructor(
    private _httpService: HttpService,
    private _userService: UserService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      let codeResponseGoogle = params['code'];
      console.log(codeResponseGoogle); // Print the parameter to the console.   
      this.data.code = codeResponseGoogle;
      let url = 'http://localhost:8000/google' + '?code=' + codeResponseGoogle;
      console.log(url);
      if (codeResponseGoogle && !sessionStorage.getItem('setOAuth')) {
        sessionStorage.setItem('setOAuth', '1');
        this._httpService.getHttp(url, false).subscribe(
          res => {
            console.log(res);

          },
          error => {
            console.log(error);
          });
      }
      this._httpService.getHttp('http://localhost:8000/photo').subscribe(
        res => {
          console.log(res);
          this.baseURL = res.data;
          console.log('baseurl');
          console.log(this.baseURL);
        }
      )
    });
  }

  activateClass(index) {
    this.selectedIndex = index;
  }
}
