import { Project } from './project.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

  constructor(private httpClient: HttpClient) {}

  projectsChanged = new Subject<Project[]>();

  private projects: Project[] = [
    new Project('abc', 'abc', 'abc'),
    new Project('abaa', 'abaa', 'abaa'),
  ];

  setProjects (projects: Project[]) {
    this.projects = projects;
    this.projectsChanged.next(this.projects.slice());
  }

  getProjects() {
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
        this.setProjects(projects);
      }
    );
    return this.projects.slice();
  }
}
