import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

  pdfTitle: string;
  pdfSrc = '';
  zoom = 1.05;
  originalSize = false;
  showAll = true;
  renderText = false;
  fitToPage = true;
  autoresize = true;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.fetchPdf();
  }

  fetchPdf() {
    const { type, fileName } = this.route.snapshot.params;
    this.pdfTitle = fileName.split('_')[1].split('.')[0];
    this.pdfSrc = `/api/writings/${type}/${fileName}.pdf`;
  }

}
