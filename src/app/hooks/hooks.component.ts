import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,DoCheck,Input,OnChanges,OnDestroy,OnInit, SimpleChanges} from '@angular/core';
import { TimerService } from '../time-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() value:string= "LifeCycleHooks";
  timer:any;
  private timerSubscription: Subscription | undefined;
  constructor(private timerService: TimerService){
    // console.log("Constructor called");
    // console.log(this.value);
  }
 
 ngOnChanges(change: SimpleChanges){
    console.log("ngOnChanges called");
    console.log(change);
    if(this.value=='100' && !this.timerSubscription)
    this.timerSubscription = this.timerService.getTimer().subscribe((timerValue) => {
      console.log('Timer value:', timerValue);
      this.timer=timerValue;
    });
 }

  ngOnInit(){
    console.log("ngOnit called");
    console.log(this.value);
  }

  ngDoCheck(){
    console.log("ngDoCheck called");
  }

// 1. It is alled after the Component's projected contect has been fully initialized.
// 2. Content refers to the external contect injected from the parent component 
// 3. via contect projection (for eg ng-content).
// 4. It gets called for only first change ChangeDetectionStrategy.

  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit() {
  //  console.log("ngAfterViewInit called");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(){
    // console.log('destroyed');
    if(this.timerSubscription && this.value=='10')
    {
      this.timerSubscription.unsubscribe();
    }
    // console.log('destroyed');
  }
} 

