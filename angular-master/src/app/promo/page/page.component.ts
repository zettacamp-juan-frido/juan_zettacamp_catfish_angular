import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { PromoService } from '../promo.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  public sub = new SubSink();
  // pageData: Observable<any[]> = new Observable();
  pageData: any;

  constructor(public promoService: PromoService) {}

  ngOnInit(): void {
    // this.sub.sink = this.promoService
    //   .getPromo()
    //   .pipe((value) => (this.pageData = value))
    //   .subscribe();
    // console.log('check page data', this.pageData);

    // console.log('check value from sub sink', this.sub);

    this.sub.sink = this.promoService.getPromo().subscribe((value) => {
      // const dataValue = value;
      // console.log('logging value', dataValue);

      this.pageData = value.data.GetAllPromos;
      console.log('logging page data', this.pageData);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
