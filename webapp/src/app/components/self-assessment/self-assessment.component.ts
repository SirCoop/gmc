import { Component, OnInit, HostListener } from '@angular/core';
import frontEndSkills from './front-end.skills';
import backEndSkills from './back-end.skills';
import machineLearningSkills from './machine-learning.skills';

@Component({
  selector: 'app-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrls: ['./self-assessment.component.scss']
})
export class SelfAssessmentComponent implements OnInit {

  dataSource = [frontEndSkills, backEndSkills, machineLearningSkills];

  pdfTitle: string;
  pdfSrc = '../../../assets/predictive_index.pdf';
  zoom = 1.05;
  originalSize = false;
  showAll = true;
  renderText = false;
  fitToPage = true;
  autoresize = true;

  isMobile = true;

  // iframeLoaded() {
  //   const iFrameID = document.getElementById('mb') as HTMLIFrameElement;
  //     if (iFrameID) {
  //           iFrameID.height = '';
  //           iFrameID.width = '';
  //           // iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + 'px';
  //           // iFrameID.width = iFrameID.contentWindow.document.body.scrollWidth + 'px';
  //     }   
    
  // }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = window.innerWidth <= 980;
  }

  constructor() { }

  ngOnInit() {
    // this.iframeLoaded();
    this.isMobile = window.innerWidth <= 980;
  }

}
