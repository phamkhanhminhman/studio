import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

import { OwlOptions } from 'ngx-owl-carousel-o';

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  apiData: PhotosApi;
  limit: number = 10; // <==== Edit this number to limit API results
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    center: false,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    nav: true,
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
  
  constructor(
    private readonly http: HttpClient,
  ) {}

  ngOnInit() {
    this.fetch()
  }


  fetch() {
    const api = `http://localhost:8000/photo`;
    const http$ = this.http.get<PhotosApi>(api);

    http$.subscribe(
      res => this.apiData = res['data'],
      err => throwError(err)
    )
  }

}
