import { Component, OnInit } from '@angular/core';
import { tap, catchError, throwError } from 'rxjs';

import { Mentor } from 'src/app/container/model/mentor.model';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css'],
})
export class MentorListComponent implements OnInit {
  mentorsColum = ['No', 'Name', 'Email', 'Status'];
  mentors: Mentor;
  mentor: Mentor[] = [];
  constructor(private mentorService: MentorService) {}

  ngOnInit(): void {
    // this.mentorService.$mentor.subscribe((value) => {
    //   this.mentors = value;
    //   console.log('data mentor', this.mentors);
    // });
    this.loadMentorPge();
  }
  loadMentorPge() {
    this.mentorService
      .getMentor(this.mentors.id, 'asc', 0, 3)
      .pipe(
        tap((mentor) => (this.mentor = mentor)),
        catchError((err) => {
          console.log('error loading mentor', err);
          alert('error loading mentor');
          return throwError(err);
        })
      )
      .subscribe();
    console.log('loging in mentor list', this.mentorService);
  }
}
