import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
// import {DatePickerModule, DateModel, DatePickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-register',	
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: String;
  password: String;
  // dateofbirth: DateModel;
  // options: DatePickerOptions;

  constructor(private validateService: ValidateService,
  	private authService:AuthService,
    private router: Router) { 
      // this.options = new DatePickerOptions();
    }

  ngOnInit() {
  }

   onRegisterSubmit(){
   	console.log("on resgter submit");
      const user = {
        email: this.email,
        password: this.password,
        // dateofbirth: this.dateofbirth
      }
    

    // Required Fields
    if(!this.validateService.validateRegister(user)){
    	alert("Please fill in all fields");
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
    	alert("Please use a valid email");
      return false;
    }

     // Register user
    this.authService.registerUser(user).subscribe(data => {
      // if(data.success){
      //  console.log("You are now registered and can log in");
      //  console.log(data);
      //   this.router.navigate(['/login']);
      // } else {
      //  console.log("Something went wrong");
      //   this.router.navigate(['/register']);
      // }
    });
  }

   onCancel() {
    this.router.navigate(['/']);
   }

}
