import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ValidateService} from '../../services/validate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	email: String;
	password: String;

  constructor(
    private validateService: ValidateService,
  	private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
  }

  onLoginSubmit(){
  	const user = {
      email: this.email,
      password: this.password
    }

     // Required Fields
    if(!this.validateService.validateLogin(user)){
      alert("Please fill in all fields");
      return false;
    
    }

    this.authService.authenticateUser(user).subscribe(data => {
    	console.log("authenticateUser");
    	console.log(data['success']);
      if(data['success']){
        this.router.navigate(['/dashboard']);
        localStorage.setItem('userData', JSON.stringify(data));
      } else {
        this.router.navigate(['/']);
      }
    });
  }
  onCancel() {
    this.router.navigate(['/']);
    return true;
   }
}
