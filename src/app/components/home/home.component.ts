import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
