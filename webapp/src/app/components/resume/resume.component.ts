import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  pdfSrc = '../../../assets/gmc_resume.pdf';
  zoom = 1.45;
  originalSize = true;
  showAll = true;
  renderText = false;

  constructor() { }

  ngOnInit() {
  }

}
