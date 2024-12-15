import { Component } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showBars: boolean = true;
  // toggle() {
  //   this.showBars = !this.showBars;
  // }

  toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar").toggleClass("active");
    $(".sidebar-item").toggleClass("active");
  }
}
