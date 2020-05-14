import { Component, OnInit   } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

// import {DatePickerModule, DateModel, DatePickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	
	email: String;
  password: String;
	// dateofbirth : DateModel;
	// newdateofbirth : DateModel;
  // options: DatePickerOptions;

  constructor(private authService:AuthService,
  	private router:Router) { 
    //  this.options = new DatePickerOptions();
    }

  ngOnInit() {
    console.log("In oninit dashboar");
    let userData: any = JSON.parse(localStorage.getItem('userData'));
    if(userData){
      console.log(userData.user.email);
      this.email = userData.user.email;
      this.password = userData.user.password;
      // this.dateofbirth = userData.user.dateofbirth;
    }
    
  }

  onSubmit(){
  	const user = {
  	  email: this.email,
      password: this.password,
  	  // dateofbirth: this.newdateofbirth.momentObj,
      //newdateofbirth: this.newdateofbirth
    }
    this.authService.editDoB(user).subscribe(data => {
    	console.log("editDoB");
    	console.log(data);
      // if(data.success){
      // 	alert("Date of Birth is Updated");
      //   //location.reload();
      //   //this.reloadPage();
      // 	 this.router.navigate(['/dashboard']);
      // } else {
      //  alert("Something went wrong");
      // }
    });
  }

  onLogout() {
    this.router.navigate(['/']);
     localStorage.removeItem('userData');
  }
   



}
