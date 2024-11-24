import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    setTimeout(() => {
      let outerContainer = document.querySelector('.outerContainer') as HTMLElement;
      if(outerContainer) {
        outerContainer.scrollIntoView({behavior: "smooth", block: "start" });
      }
    }, 1000);

  }
}
