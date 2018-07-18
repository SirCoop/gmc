import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Observable } from '../../../../node_modules/rxjs';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => {
      console.log('details route params: ', params);
      this.user$ = params.id ;
    });
   }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => {
        console.log('data: ', data);
        this.user$ = data;
      });
  }

}
