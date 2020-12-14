import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from '../../interfaces/User';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logForm: FormGroup;
  registerForm: FormGroup;

  constructor( private build: FormBuilder, private userService: UserServiceService) { 

    this.logForm = this.build.group({

      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]

    })

    this.registerForm = this.build.group({

      name: ['', Validators.required],
      surname: ['', Validators.required],
      userName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]

    })

  }

  ngOnInit(): void {
  }

  crearUser(): void{
    let userCreated: User;
    userCreated = this.registerForm.value;
    this.userService.createUser(this.registerForm.value).subscribe(response => {
      console.log(response);
    })

  }

}
