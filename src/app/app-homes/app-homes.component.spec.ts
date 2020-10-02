import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AppHomesComponent, MockDataService } from './app-homes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from '../services/data.service';
import { DialogService } from '../services/dialog.service';
import { MatDialogModule } from '@angular/material/dialog';

describe('AppHomesComponent', () => {

  let component: AppHomesComponent;
  let fixture: ComponentFixture<AppHomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHomesComponent],
      imports: [HttpClientTestingModule, MatDialogModule],
      providers: [{provide: DataService, useClass: MockDataService}, {provide: DialogService, useClass: DialogService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show list of homes', () => {
    expect(fixture.nativeElement.querySelectorAll("[data-test = 'home']").length).toBe(3);
    fixture.detectChanges();
  });

  it("should show correct home info", () => {
    expect(fixture.nativeElement.querySelector("[data-test = 'title']").innerText).toBe("Home 1");
    expect(fixture.nativeElement.querySelector("[data-test = 'location']").innerText).toBe('new york');
    expect(fixture.nativeElement.querySelector("[data-test = 'image']")).toBeTruthy();
    expect(fixture.nativeElement.querySelector("[data-test = 'book-btn']")).toBeTruthy();
    fixture.detectChanges();
  });

  it("should open a dialog on book btn click", fakeAsync(() => {

    const dialogService = TestBed.inject(DialogService);
    const bookBtn = fixture.nativeElement.querySelector("[data-test = 'book-btn'] button");
    const spy = spyOn(dialogService,"open"); 
    bookBtn.click();
    expect(spy).toHaveBeenCalled();
 
  }))
});

