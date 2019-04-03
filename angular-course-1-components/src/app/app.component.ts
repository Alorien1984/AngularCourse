import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;

  startDate = new Date();

  price = 9.99;
  
  courseSelected(course: Course) {
    console.log("App component - click event bundled...", course);
  }
}
