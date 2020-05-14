import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Http, Headers,HttpModule, RequestOptions, Response } from '@angular/http';


import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import {AuthService} from '../../services/auth.service';
import {ValidateService} from '../../services/validate.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent],
      imports: [ FormsModule,RouterTestingModule, HttpModule],
      providers:[AuthService, ValidateService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
