import { SkillSetService } from './skill-set.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SkillSet } from './skill-set.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit, OnDestroy {

  skillSets: SkillSet[];
  subscription: Subscription;

  constructor(private skillSetService: SkillSetService ) { }


  ngOnInit() {
    this.subscription = this.skillSetService.skillSetChanged
    .subscribe(
      (skillSets: SkillSet[]) => {
        this.skillSets = skillSets;
      }
    );
    this.skillSets = this.skillSetService.getSkillSets();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
