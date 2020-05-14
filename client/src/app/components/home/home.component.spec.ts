import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {Router} from "@angular/router";
import {Location} from "@angular/common";


import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
/*
  it('ROUTLINK CLICK', async(() => {
    fixture.detectChanges();
    let links = fixture.nativeElement.querySelectorAll('#login');
    links.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/login');
    });
  }));
   it('ROUTLINK CLICK', async(() => {
    fixture.detectChanges();
    let links = fixture.nativeElement.querySelectorAll('#register');
    links.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/register');
    });
  }));
  */
});
