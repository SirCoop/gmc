import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryImagesResolver } from './resolvers/country-images.resolver';
import { WritingsResolver } from './resolvers/writings.resolver';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TravelComponent } from './components/travel/travel.component';
import { TravelImagesComponent } from './components/travel-images/travel-images.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ReadingListComponent } from './components/reading-list/reading-list.component';
import { AppsComponent } from './components/apps/apps.component';
import { WritingsComponent } from './components/writings/writings.component';
import { SuccessesComponent } from './components/successes/successes.component';
import { FailuresComponent } from './components/failures/failures.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SelfAssessmentComponent } from './components/self-assessment/self-assessment.component';
import { ReaderComponent } from './components/reader/reader.component';
import { FaceAnimationComponent } from './components/face-animation/face-animation.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'travel-gallery',
    component: TravelComponent
  },
  {
    path: 'travel-gallery/:country',
    component: TravelImagesComponent,
    resolve: {
      images: CountryImagesResolver
    }
  },
  {
    path: 'self-assessment',
    component: SelfAssessmentComponent
  },
  {
    path: 'apps',
    component: AppsComponent
  },
  {
    path: 'reading-list',
    component: ReadingListComponent
  },
  {
    path: 'writings',
    component: WritingsComponent,
    resolve: {
      writings: WritingsResolver
    }
  },
  {
    path: 'writings/:type/:fileName',
    component: ReaderComponent
  },
  {
    path: 'successes',
    component: SuccessesComponent
  },
  {
    path: 'failures',
    component: FailuresComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'animation',
    component: FaceAnimationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
