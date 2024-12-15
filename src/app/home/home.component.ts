import { Component, ElementRef, ViewChild } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('splide') splideElement!: ElementRef;
  
  ngAfterViewInit() {
    new Splide(this.splideElement.nativeElement, { type: 'loop' }).mount();
  }


}
