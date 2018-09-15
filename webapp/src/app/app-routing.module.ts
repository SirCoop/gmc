import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryImagesResolver } from './resolvers/country-images.resolver';
import { WritingsResolver } from './resolvers/writings.resolver';

// import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TravelComponent } from './components/travel/travel.component';
import { TravelImagesComponent } from './components/travel-images/travel-images.component';
import { AboutComponent } from './components/about/about.component';
import { ReadingListComponent } from './components/reading-list/reading-list.component';
import { AppsComponent } from './components/apps/apps.component';
import { WritingsComponent } from './components/writings/writings.component';
import { SuccessesComponent } from './components/successes/successes.component';
import { FailuresComponent } from './components/failures/failures.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SelfAssessmentComponent } from './components/self-assessment/self-assessment.component';
import { ReaderComponent } from './components/reader/reader.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { ContactComponent } from './components/contact/contact.component';
import { DraggableDesktopComponent } from './components/draggable-desktop/draggable-desktop.component';
import { DarkSecretComponent } from './components/dark-secret/dark-secret.component';

const routes: Routes = [
  {
    path: '',
    component: DraggableDesktopComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'animations',
    component: AnimationsComponent
  },
  {
    path: 'apps',
    component: AppsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'dark-secret',
    component: DarkSecretComponent
  },
  {
    path: 'failures',
    component: FailuresComponent
  },
  {
    path: 'know-thyself',
    component: SelfAssessmentComponent
  },
  {
    path: 'reading-list',
    component: ReadingListComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'successes',
    component: SuccessesComponent
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
    path: 'writings',
    component: WritingsComponent,
    resolve: {
      writings: WritingsResolver
    }
  },
  {
    path: 'writings/:type/:fileName',
    component: ReaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
