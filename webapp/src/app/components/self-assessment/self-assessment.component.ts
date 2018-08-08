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

  constructor() { }

  ngOnInit() {
  }

}
