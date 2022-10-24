import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-output-list',
  templateUrl: './output-list.component.html',
  styleUrls: ['./output-list.component.css'],
})
export class OutputListComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() UserData: { userName: string; statusName: string };
  @ViewChild('name') inputName: ElementRef;

  constructor() {
    console.log('menjalankan constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('menjalankan ngOnChanges');

    console.log(changes);
  }
  ngOnInit(): void {
    console.log('menjalankan ngOnInit');
    // console.log('text Content : ' + this.inputName.nativeElement.textContent);
  }
  ngDoCheck(): void {
    console.log('menjalankan ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('menjalankan ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('menjalankan ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('menjalankan ngAfterViewInit');
    // console.log('text Content : ' + this.inputName.nativeElement.value);
  }
  ngAfterViewChecked(): void {
    console.log('menjalankan ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('menjalankan ngOnDestroy');
  }
}
