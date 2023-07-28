import { Component, ViewChildren, QueryList, AfterViewInit, OnInit } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit, OnInit {

  @ViewChildren(HighlightDirective) highlightedItems!: QueryList<HighlightDirective>;

  constructor() { }
  ngOnInit(): void {
    // this.highlightedItems.forEach(item => {
    //   console.log(item); // You can access and work with each highlighted element here
    // });
  }
  

  ngAfterViewInit() {
    // Access the elements with the appHighlight directive
    this.highlightedItems.forEach(item => {
      console.log(item); // You can access and work with each highlighted element here
    });
  }
}