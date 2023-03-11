import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GamingComponent } from './components/gaming/gaming.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { BioComponent } from './components/bio/bio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamingComponent,
    ProjectsComponent,
    PortfolioComponent,
    ResumeComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
