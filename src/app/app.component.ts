import { AfterContentInit, AfterViewInit, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, AfterViewInit{
  exampleapp = false
  applist = false
  ngAfterViewInit(): void {
    // console.log("After view init called")
  }
  viewChild(){
    this.exampleapp = true
  }
  ViewChildren(){
    this.applist = true
  }
  ngDoCheck(): void {
    // console.log("docheck called")
 
  }
  viewcontent=false
  viewContaint(){
    this.viewcontent=true
  }
  title = 'angular-lifecycle-hooks';
  
  inputText: string ="";
  destroy:boolean=true;

  OnSubmit(inputEL:HTMLInputElement){
   this.inputText=inputEL.value;
  }
  DestroyComponent(){
    this.destroy=false;
  }
}
