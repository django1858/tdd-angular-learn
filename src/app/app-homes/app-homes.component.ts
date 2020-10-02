import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DataService } from '../services/data.service';
import {DialogService} from '../services/dialog.service';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-homes',
  templateUrl: './app-homes.component.html',
  styleUrls: ['./app-homes.component.less']
})
export class AppHomesComponent implements OnInit {

  homes: any;

  constructor(public dataService: DataService, private dialogService: DialogService) {

    this.dataService.getHomesObs().subscribe(homes => {
      this.homes = homes;
    });

  }

  ngOnInit(): void { }

  openDialog(){
    this.dialogService.open(BookingComponent);
  }

}

export class MockDataService{

  constructor() { }

  getHomesObs(){
    return of(
      [
        {
          "title": "Home 1",
          "image": "assets/listing.jpg",
          "location": "new york",
          "price": "125"
        },
        {
          "title": "Home 2",
          "image": "assets/listing.jpg",
          "location": "boston",
          "price": "225"
        },
        {
          "title": "Home 3",
          "image": "assets/listing.jpg",
          "location": "chicago",
          "price": "325"
        }
      ]
    );
  }

}
