import { SkillSetComponent } from './skill-set/skill-set.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'work-exp', component: WorkExpComponent },
  { path: 'skill-set', component: SkillSetComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
