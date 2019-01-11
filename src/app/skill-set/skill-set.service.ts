import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { SkillSet } from './skill-set.model';

@Injectable()
export class SkillSetService {

  constructor(private httpClient: HttpClient) {}

  skillSetChanged = new Subject<SkillSet[]>();

  private skillSets: SkillSet[] = [];

  setSkillSets (skillSets: SkillSet[]) {
    this.skillSets = skillSets;
    this.skillSetChanged.next(this.skillSets.slice());
  }

  getSkillSets() {
    this.httpClient.get<SkillSet[]>('https://portfolio-72321.firebaseio.com/skills.json')
    .map(
      (skillSets) => {
        // tslint:disable-next-line:prefer-const
        for (let skillSet of skillSets) {
          if (!skillSet['value']) {
            skillSet['value'] = '';
          }
        }
        return skillSets;
      }
    ).subscribe(
      (skillSets: SkillSet[]) => {
        this.setSkillSets(skillSets);
      }
    );
    return this.skillSets.slice();
  }


}
