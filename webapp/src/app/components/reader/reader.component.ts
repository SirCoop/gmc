import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PdfViewerComponent } from '../../../../node_modules/ng2-pdf-viewer';

import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {
  @ViewChild(PdfViewerComponent) private pdfComponent: PdfViewerComponent;

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

  // TODO: get this to work
  onSearchChange(stringToSearch: string) {
    this.pdfComponent.pdfFindController.executeCommand('find', {
      caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: stringToSearch
    });
  }

}
