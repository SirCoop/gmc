import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './components/about/about.component';
import { TravelComponent } from './components/travel/travel.component';
import { HomeComponent } from './components/home/home.component';
import { AppsComponent } from './components/apps/apps.component';
import { ReadingListComponent } from './components/reading-list/reading-list.component';
import { WritingsComponent } from './components/writings/writings.component';
import { SuccessesComponent } from './components/successes/successes.component';
import { FailuresComponent } from './components/failures/failures.component';
import { WorldmapComponent } from './components/worldmap/worldmap.component';
import { TravelImagesComponent } from './components/travel-images/travel-images.component';
import { URLSanitizerPipe } from './pipes/urlsanitizer.pipe';
import { ImageDialogComponent } from './components/image-dialog/image-dialog.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SelfAssessmentComponent } from './components/self-assessment/self-assessment.component';
import { BulletChartComponent } from './components/bullet-chart/bullet-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutComponent,
    TravelComponent,
    HomeComponent,
    AppsComponent,
    ReadingListComponent,
    WritingsComponent,
    SuccessesComponent,
    FailuresComponent,
    WorldmapComponent,
    TravelImagesComponent,
    URLSanitizerPipe,
    ImageDialogComponent,
    ResumeComponent,
    SelfAssessmentComponent,
    BulletChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatDialogModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ImageDialogComponent]
})
export class AppModule { }
