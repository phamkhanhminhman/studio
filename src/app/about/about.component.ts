import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/services/http.service'
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('tw', { static: true }) typewriterElement;

  public data = {
    code: null,
    access_token: null
  };

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _httpService: HttpService,
  ) { }

  ngOnInit(): void {
    const target = this.typewriterElement.nativeElement
    
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white',
    })

    const writer2 = new Typewriter(target, {
      loop: true,
      typeColor: 'white'
    })

    writer
      .strings(
        400,
        "Believe you can fly",
        "Photographer or",
        "Developer"
      )
      .start()
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
        
      });
  }

}
