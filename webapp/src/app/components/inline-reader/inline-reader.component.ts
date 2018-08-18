import { Component, OnInit, Input, OnChanges  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-inline-reader',
  templateUrl: './inline-reader.component.html',
  styleUrls: ['./inline-reader.component.scss']
})
export class InlineReaderComponent implements OnInit, OnChanges {
  @Input() writingType: string;
  @Input() fileName: string;

  pdfTitle: string;
  pdfSrc = '';
  zoom = 1.00;
  originalSize = false;
  showAll = true;
  renderText = false;
  fitToPage = true;
  autoresize = true;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.writingType && this.fileName) {
      this.fetchPdf();
    }
  }

  fetchPdf() {
    this.pdfTitle = this.fileName.split('_')[1].split('.')[0];
    this.pdfSrc = `/api/writings/${this.writingType}/${this.fileName}.pdf`;
  }

}

