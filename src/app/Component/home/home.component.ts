import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// $(document).ready(function(){
//   var email;
//   $("#submit").click(function(){
//       email=$("#email").val();
//    $.post("http://54.251.138.1:9305/api/dapps/8d2ad02c847eb9aaab012bb27e8f681639e93291f837596f40458f2cecedb591/user/exist",
//    {email: email},
//    function(data)
//    {
//       if(data.isSuccess===true)
//       {
//           window.location.href="../Login/Login.html?"+"email="+email;
//       }
//       else
//       {
//           window.location.href="../Signup/Signup.html";
//       }
//   });
// });

//   $("#verify").click(function()
//   {
//       window.location.href='../Verify/verify.html?';
//   });
// });