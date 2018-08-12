import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

  pdf$: any;
  pdfSrc = '../../../assets/gmc_resume.pdf';
  zoom = 1.45;
  originalSize = true;
  showAll = true;
  renderText = false;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.fetchPdf();
  }

  fetchPdf() {
    // get route params for type and id.
    // call getWriting(type, id) {
    // this.dataService.getWriting(type, id);
  }

}
