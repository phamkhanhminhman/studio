import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/services/http.service'
import { UserService } from 'src/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

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
  public isSwitcher = false;

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
      this.currentHeight = 620;
    } 
    this.currentWH = '=w' + this.currentWidth + '-h' + this.currentHeight + '-c'
    console.log(this.currentWH);
    
    
    this._httpService.getHttp('http://localhost:8000/photo').subscribe(
        res => {
          console.log(res);
          this.baseURL = res.data;
          console.log('baseurl');
          console.log(this.baseURL);
        }
      )
  }

  activateClass(index) {
    this.selectedIndex = index;
  }

  switcher(){
    
    this.isSwitcher = !this.isSwitcher;
    console.log("function called " + this.isSwitcher);
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
