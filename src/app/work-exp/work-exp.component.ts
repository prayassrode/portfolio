import { WorkExpService } from './work-exp.service';
import { WorkExp } from './work-exp.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent implements OnInit, OnDestroy {

  workExps: WorkExp[];
  subscription: Subscription;

  constructor(private workExpService: WorkExpService) { }

  ngOnInit() {
    this.subscription = this.workExpService.workExpChanged
    .subscribe(
      (workExps: WorkExp[]) => {
        this.workExps = workExps;
      }
    );
    this.workExps = this.workExpService.getWorkExps();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
