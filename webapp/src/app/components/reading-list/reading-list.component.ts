import { Component, OnInit } from '@angular/core';
import readingList from './reading-list';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent implements OnInit {

  list$: any = readingList;

  constructor() { }

  ngOnInit() {
  }

}
