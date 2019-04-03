import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    title: 'angular-course'
  };

  onLogoClicked() {
    alert('Hello World');
  };

  onKeyUp(newTemple: string) {
    this.data.title = newTemple  
  };
};
