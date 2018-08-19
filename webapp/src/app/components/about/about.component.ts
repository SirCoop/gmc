import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-posts',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private data: DataService, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {

  }

}
