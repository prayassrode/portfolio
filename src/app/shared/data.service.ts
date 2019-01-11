import { ProjectService } from './../projects/project.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../projects/project.model';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor (private httpClient: HttpClient, private projectService: ProjectService ) {}

  getProjects() {
    console.log('in getProjects dataService');
    this.httpClient.get<Project[]>('https://portfolio-72321.firebaseio.com/projects.json')
      .map(
        (projects) => {
          // tslint:disable-next-line:prefer-const
          for (let project of projects) {
            if (!project['date']) {
              project['date'] = '';
            }
          }
          return projects;
        }
      ).subscribe(
        (projects: Project[]) => {
          this.projectService.setProjects(projects);
        }
      );
  }
}
