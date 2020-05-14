import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {DatePickerModule} from 'ng2-datepicker';
import { Http, Headers,HttpModule, RequestOptions, Response } from '@angular/http';


import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent],
       imports: [ RouterTestingModule,ReactiveFormsModule,FormsModule,DatePickerModule,HttpModule  ],
       providers:[AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  
});
