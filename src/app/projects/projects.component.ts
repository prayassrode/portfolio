import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from './project.model';
import { Subscription } from 'rxjs';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects: Project[];
  subscription: Subscription;

  constructor(private projectService: ProjectService ) { }


  ngOnInit() {
    this.subscription = this.projectService.projectsChanged
    .subscribe(
      (projects: Project[]) => {
        this.projects = projects;
      }
    );
    this.projects = this.projectService.getProjects();
    console.log(this.projects);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
