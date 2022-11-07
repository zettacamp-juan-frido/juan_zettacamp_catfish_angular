import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Mentor } from '../container/model/mentor.model';

@Injectable({
  providedIn: 'root',
})
export class MentorService {
  mentors: any;
  constructor(private http: HttpClient) {
    this.dummyMentor();
  }

  mentor = new BehaviorSubject<Mentor[]>([]);
  $mentor = this.mentor.asObservable();

  fetchJson() {
    return this.http.get<any>('../../assets/json/mentor.json');
  }

  dummyMentor() {
    this.fetchJson().subscribe((value) => {
      this.mentors = value.mentor;
      this.mentor.next(this.mentors);
      console.log('dummy actors', this.mentors);
    });
  }

  getMentor(
    _id: string,
    sortOrder = 'asc',
    pageNumber = 0,
    pageSize = 4
  ): Observable<Mentor[]> {
    return this.http
      .get('../../assets/json/mentor.json', {
        params: new HttpParams()
          .set('id', _id.toString())
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString()),
      })
      .pipe(map((res) => res['payload']));
  }
}
