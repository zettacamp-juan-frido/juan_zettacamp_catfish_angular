import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize, Observable } from 'rxjs';
import { SubSink } from 'subsink';
import Swal from 'sweetalert2';
import { PromoService } from '../promo.service';
import { CreatePromoComponent } from './create-promo/create-promo.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  public sub = new SubSink();
  // pageData: Observable<any[]> = new Observable();
  pageData: any;
  loading = false;

  constructor(public promoService: PromoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    // this.sub.sink = this.promoService
    //   .getPromo()
    //   .pipe((value) => (this.pageData = value))
    //   .subscribe();
    // console.log('check page data', this.pageData);

    // console.log('check value from sub sink', this.sub);
    this.loadingPage();
  }
  loadingPage() {
    this.loading = true;

    this.sub.sink = this.promoService
      .getPromo()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((value) => {
        // const dataValue = value;
        // console.log('logging value', dataValue);
        console.log('login di init subsink', this.sub.sink);

        this.pageData = value.data.GetAllPromos;
        console.log('logging page data', this.pageData);
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onDialog() {
    const open = this.dialog.open(CreatePromoComponent);
    open.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      } else {
        this.promoService.addPromo(result).subscribe();
        console.log(
          'logging sub promo service',
          this.promoService.addPromo(result)
        );
        Swal.fire({
          icon: 'success',
          title: 'Success to add data',
        });
      }
    });
  }
}
