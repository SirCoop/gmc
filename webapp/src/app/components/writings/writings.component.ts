import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-writings',
  templateUrl: './writings.component.html',
  styleUrls: ['./writings.component.scss']
})
export class WritingsComponent implements OnInit {
  writings$: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.writings$ = this.route.snapshot.data.writings.data;
  }

}
