import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('tw', { static: true }) typewriterElement;
  constructor() { }

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
  }

}
