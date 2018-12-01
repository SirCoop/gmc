import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryImagesResolver } from './resolvers/country-images.resolver';
import { TestimoniesResolver } from './resolvers/testimonies.resolver';
import { WritingsResolver } from './resolvers/writings.resolver';

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
import { ContactComponent } from './components/contact/contact.component';
import { DraggableDesktopComponent } from './components/draggable-desktop/draggable-desktop.component';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { AmbitionComponent } from './components/ambition/ambition.component';

const routes: Routes = [
  {
    path: '',
    component: DraggableDesktopComponent
  },
  {
    path: 'ambition',
    component: AmbitionComponent
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
    path: 'credentials',
    component: AboutComponent
  },
  {
    path: 'leadership',
    component: LeadershipComponent,
    resolve: {
      testimonies: TestimoniesResolver
    }
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
