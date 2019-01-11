import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { WorkExp } from './work-exp.model';

@Injectable()
export class WorkExpService {

  constructor(private httpClient: HttpClient) {}
  workExpChanged = new Subject<WorkExp[]>();
  private workExps: WorkExp[] = [];

  setWorkExps (workExps: WorkExp[]) {
    this.workExps = workExps;
    this.workExpChanged.next(this.workExps.slice());
  }

  getWorkExps() {
    this.httpClient.get<WorkExp[]>('https://portfolio-72321.firebaseio.com/workexp.json')
    .map(
      (workExps) => {
        return workExps;
      }
    ).subscribe(
      (workExps: WorkExp[]) => {
        this.setWorkExps(workExps);
      }
    );
    return this.workExps.slice();
  }

}
