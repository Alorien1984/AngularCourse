import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  cardClasses(){
    return {
        'beginner': this.course.category === 'BEGINNER',
          };
  }
  cardStyles() {
    return {'text-decoration': 'underline'}
  }
  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("button clicked...");

    this.courseEmitter.emit(this.course);
  }

}
