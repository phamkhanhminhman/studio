import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/services/http.service'
import { UserService } from 'src/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('tww' , { static: true }) typewriterElement;

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
  public selectedIndex;
  public currentWidth;
  public currentHeight;
  public currentWH;

  constructor(
    private _httpService: HttpService,
    private _userService: UserService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('current width');
    console.log(window.innerWidth );
    console.log('current height');
    console.log(window.innerHeight );

    this.currentWidth =  window.innerWidth;
    this.currentHeight = window.innerHeight;
    if (this.currentWidth > 1000) {
      this.currentHeight = 600;
    } 
    this.currentWH = '=w' + this.currentWidth + '-h' + this.currentHeight + '-c'
    console.log(this.currentWH);
    
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

  myFunc(){
    console.log("function called");
    // const target = this.typewriterElement.nativeElement

    // const writer = new Typewriter(target, {
    //   loop: true,
    //   typeColor: 'Black'
    // })

    // writer
    //   .type('Believe you can fly')
    //   .rest(500)
    //   .start()
  }
  
}
