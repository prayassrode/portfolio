import { WorkExpService } from './work-exp/work-exp.service';
import { SkillSetService } from './skill-set/skill-set.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule, MatIconModule, MatNavList, MatListModule, MatCardModule, MatGridListModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './education/education.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectService } from './projects/project.service';
import { DataService } from './shared/data.service';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    HomeComponent,
    EducationComponent,
    WorkExpComponent,
    SkillSetComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatIconModule,
    MatListModule
  ],
  providers: [ProjectService, SkillSetService, WorkExpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
