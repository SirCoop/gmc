import { Component, OnInit, HostListener, AfterContentChecked } from '@angular/core';
import { MatTabChangeEvent } from '../../../../node_modules/@angular/material';
import frontEndSkills from './front-end.skills';
import backEndSkills from './back-end.skills';
import machineLearningSkills from './machine-learning.skills';

@Component({
  selector: 'app-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrls: ['./self-assessment.component.scss']
})
export class SelfAssessmentComponent implements OnInit, AfterContentChecked {

  dataSource = [frontEndSkills, backEndSkills, machineLearningSkills];

  pdfTitle: string;
  pdfSrc1 = '../../../assets/predictive_index.pdf';
  pdfSrc2 = '../../../assets/mb_entp_description.pdf';
  zoom = 1.15;
  originalSize = false;
  showAll = true;
  renderText = false;
  fitToPage = true;
  autoresize = true;

  isMobile = true;

  tab: string;

  iframeLoaded() {
    const iFrameID = document.getElementById('mb') as HTMLIFrameElement;
    if (iFrameID) {
      const el = iFrameID.contentWindow.document.getElementsByTagName('body')[0].addEventListener('click', event => {
        event.preventDefault();
      });
    }

  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 980;
  }

  constructor() { }

  ngOnInit() {
    this.isMobile = window.innerWidth <= 980;
  }

  ngAfterContentChecked() {
    if (this.tab === 'Personality Assessment') {
      this.iframeLoaded();
    }
  }

  onTabClick(event: MatTabChangeEvent): void {    
    this.tab = event.tab.textLabel;    
  }
}
