import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logForm: FormGroup;
  registerForm: FormGroup;

  constructor( private build: FormBuilder) { 

    this.logForm = this.build.group({

      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]

    })

    this.registerForm = this.build.group({

      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]

    })

  }

  ngOnInit(): void {
  }

}
