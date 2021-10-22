import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
//import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.UserName = this.user.UserName;
    //this.UserEmail = this.user.UserEmail;
    //this.Password = this.user.Password;
  }
 moveToSelectedTab(tabName: string) {
  for (let i = 0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
        if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) 
        {
        (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
        }
      }
  }
  onSubmit(data){
    //var redata:any = data.repassword;
    if (data.repassword === data.Password){
      this.http.post('http://127.0.0.1:8000/user/',data)
    .subscribe((result)=>{
      console.warn('result',result);
      console.warn(data);
      alert(result);
      if(result==="SignUp successfully!"){
      this.moveToSelectedTab("Sign In")
    }
    }); 
    }
    else{
      alert("Password and Confirm password should match !! Please Retry");
    }
  }
  onLogin(data){
    alert('INCORRECT PASSWORD! FOR REGISTERED EMAIL ID: '+data.email );
}


//@Input() user:any;
//UserName: string;
//UserEmail: string;
//Password: string;

//addUser(){
//  var val = {UserName:this.user.UserName,
//  UserEmail:this.user.UserEmail,
 // Password:this.user.Password};
 // this.service.addUser(val).subscribe(res=>{
 //   alert(res.toString());
 // })

//}
}
