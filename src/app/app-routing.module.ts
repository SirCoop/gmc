import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelComponent } from './components/travel/travel.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ReadingListComponent } from './components/reading-list/reading-list.component';
import { AppsComponent } from './components/apps/apps.component';
import { WritingsComponent } from './components/writings/writings.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'writings',
    component: WritingsComponent
  },
  {
    path: 'travel-gallery',
    component: TravelComponent
  },
  {
    path: 'apps',
    component: AppsComponent
  },
  {
    path: 'reading-list',
    component: ReadingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
