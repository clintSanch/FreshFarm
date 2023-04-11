import { Component } from '@angular/core';
import { Constants } from './Config/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = Constants.title_of_application;
}
