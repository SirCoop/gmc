import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-social-impact',
  templateUrl: './social-impact.component.html',
  styleUrls: ['./social-impact.component.scss']
})
export class SocialImpactComponent implements OnInit {
  @Input() fileName: string;

  pdfTitle: string;
  pdfSrc = '';
  zoom = 1.00;
  originalSize = false;
  showAll = true;
  renderText = false;
  fitToPage = true;
  autoresize = true;

  constructor(private route: ActivatedRoute, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.fileName) {
      console.log('reader: ', this.fileName);
      this.fetchPdf();
    }
  }

  fetchPdf() {
    this.spinnerService.show();
    this.pdfTitle = this.fileName.split('_')[1].split('.')[0];
    this.pdfSrc = `/api/leadership/testimonies/${this.fileName}`;
  }

  pageRendered(e: CustomEvent) {
    this.spinnerService.hide();
  }

  onError(e: any) {
    this.spinnerService.hide();
  }

}