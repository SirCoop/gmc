import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgDraggableWidgetModule } from 'ngx-draggable-widget';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { TravelComponent } from './components/travel/travel.component';
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
import { ReaderComponent } from './components/reader/reader.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ToggleSidebarDirective } from './directives/toggle-sidebar.directive';
import { LayoutModule } from '@angular/cdk/layout';
import { BulletChartMobileComponent } from './components/bullet-chart-mobile/bullet-chart-mobile.component';
import { InlineReaderComponent } from './components/inline-reader/inline-reader.component';
import { FaceAnimationComponent } from './components/face-animation/face-animation.component';
import { ContactComponent } from './components/contact/contact.component';
import { DraggableDesktopComponent } from './components/draggable-desktop/draggable-desktop.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { DnaComponent } from './components/dna/dna.component';
import { DarkSecretComponent } from './components/dark-secret/dark-secret.component';
import { AmbitionComponent } from './components/ambition/ambition.component';
import { LeadershipComponent } from './components/leadership/leadership.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TravelComponent,
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
    BulletChartComponent,
    ReaderComponent,
    LandingPageComponent,
    ToggleSidebarDirective,
    BulletChartMobileComponent,
    InlineReaderComponent,
    FaceAnimationComponent,
    ContactComponent,
    DraggableDesktopComponent,
    AnimationsComponent,
    DnaComponent,
    DarkSecretComponent,
    AmbitionComponent,
    LeadershipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    LayoutModule,
    Ng4LoadingSpinnerModule.forRoot(),
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FormsModule,
    ReactiveFormsModule,
    NgDraggableWidgetModule
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent],
  entryComponents: [ImageDialogComponent]
})
export class AppModule { }
