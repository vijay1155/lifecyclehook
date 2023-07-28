import { Component, OnInit } from '@angular/core';
import {  AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.css']
})
export class ExampleComponentComponent implements OnInit, AfterViewInit {
  data: string = 'Loading data...';

  @ViewChild('dataContainer', { static: true }) dataContainer!: ElementRef;
 
  constructor() { }

  ngOnInit() {
    // Simulate API call delay
   console.log("ngOnInitcall")
    setTimeout(() => {
     
      this.data = 'Data loaded from API!';
      this.dataContainer.nativeElement.style.backgroundColor = 'lightblue';
      console.log("ngOnInitcall")
    }, 4000);
  }

  ngAfterViewInit() {
    
    // Access and manipulate the DOM element here
    // This is called after the view has been fully initialized and rendered
    
    this.dataContainer.nativeElement.style.backgroundColor = 'pink';
    console.log("ngAfterViewInit call")
  }

}
