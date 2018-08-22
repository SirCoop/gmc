import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import renderFacialAnimation from './facial-animation';

@Component({
  selector: 'app-face-animation',
  templateUrl: './face-animation.component.html',
  styleUrls: ['./face-animation.component.scss']
})
export class FaceAnimationComponent implements OnInit {

  constructor(private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    renderFacialAnimation()
      .then(() => this.spinnerService.hide());
  }
}
