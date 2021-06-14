import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course : Course
  @Input()
  cardIndex : number

  @Output()
  onSelctedCourse = new EventEmitter<Course>();


  constructor() { }

  ngOnInit(): void {
  }

  OnCourseViewed()
  {
    console.log('Button clicked in course component....');
    this.onSelctedCourse.emit(this.course);
  }

  cardClasses(){
    if(this.course.category=="BEGINNER")
    return 'beginner'
  }

}
