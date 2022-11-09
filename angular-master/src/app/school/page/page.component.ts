import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SubSink } from 'subsink';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  public sub = new SubSink();
  dataColum = ['name', 'email', 'gender'];
  dataSource = new MatTableDataSource([]);
  // pageData: Observable<any[]> = new Observable();
  pageData: any;

  constructor(public schoolService: SchoolService) {}

  ngOnInit(): void {
    // this.sub.sink = this.promoService
    //   .getPromo()
    //   .pipe((value) => (this.pageData = value))
    //   .subscribe();
    // console.log('check page data', this.pageData);

    // console.log('check value from sub sink', this.sub);

    this.sub.sink = this.schoolService.getSchool().subscribe((value) => {
      // const dataValue = value;
      // console.log('logging value', dataValue);

      this.pageData = value.data.GetAllSchools;
      this.dataSource = this.pageData;
      console.log('logging page data', this.pageData);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
