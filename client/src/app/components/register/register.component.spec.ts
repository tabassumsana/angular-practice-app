import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, Headers,HttpModule, RequestOptions, Response } from '@angular/http';
import {DatePickerModule} from 'ng2-datepicker';

import { RegisterComponent } from './register.component';
import {AuthService} from '../../services/auth.service';
import {ValidateService} from '../../services/validate.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ FormsModule,RouterTestingModule, HttpModule, DatePickerModule],
      providers:[AuthService, ValidateService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('on Register Submit should be defined', () => {
    expect(component.onRegisterSubmit()).toBeDefined();
  })
 

});
