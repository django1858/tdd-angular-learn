import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing"
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

let httpSpy: {get: jasmine.Spy};

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    httpSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    service = new DataService(httpSpy as any);
  });

  it('should return list of homes by http call', () => {
    const homes = [
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

    httpSpy.get.and.returnValue(of(homes));

    service.getHomesObs().subscribe(
      myHomes => expect(myHomes).toEqual(homes)
    );


  });
});
