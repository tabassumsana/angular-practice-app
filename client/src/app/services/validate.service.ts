import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user: any){
    console.log(user);
    if(user.email == undefined || user.password == undefined || user.dateofbirth == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email: any){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateLogin(user: any){
    console.log(user);
    if(user.email == undefined || user.password == undefined ){
      return false;
    } else {
      return true;
    }
  }
}
