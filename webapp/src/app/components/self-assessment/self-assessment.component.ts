import { Component, OnInit } from '@angular/core';
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

  pdfSrc = '../../../assets/predictive_index.pdf';
  zoom = 1.45;
  originalSize = true;
  showAll = true;
  renderText = false;

  // iframeLoaded() {
  //   const iFrameID = document.getElementById('mb') as HTMLIFrameElement;
  //     if (iFrameID) {
  //           iFrameID.height = '';
  //           iFrameID.width = '';
  //           // iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + 'px';
  //           // iFrameID.width = iFrameID.contentWindow.document.body.scrollWidth + 'px';
  //     }   
    
  // }

  constructor() { }

  ngOnInit() {
    // this.iframeLoaded();
  }

}
