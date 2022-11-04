import { Component, OnInit, Input } from '@angular/core';
import { Mentor } from 'src/app/container/model/mentor.model';

@Component({
  selector: 'app-mentor-form',
  templateUrl: './mentor-form.component.html',
  styleUrls: ['./mentor-form.component.css'],
})
export class MentorFormComponent implements OnInit {
  @Input() dataMentor: Mentor;
  constructor() {}

  ngOnInit(): void {}
}
