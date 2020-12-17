import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ataque } from 'src/app/interfaces/Ataque';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  registerForm: FormGroup;

  constructor( private build: FormBuilder, private userService: UserServiceService) { 
    this.registerForm = this.build.group({
      id:[''],
      nombre: ['', Validators.required],
      daño: ['', [Validators.required]],
      elemento: ['', Validators.required],
      tipo: ['', Validators.required], 
      cooldown: ['', Validators.required],
      rango: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  createAtaque(): void{
    let attackCreated: Ataque;
    attackCreated= this.registerForm.value;
    this.userService.createAtaque(this.registerForm.value).subscribe(response => {
      console.log(response);
    })
  }

  modificarAtaque(): void{
    let attackCreated: Ataque;
    attackCreated= this.registerForm.value;
    this.userService.modificarAtaque(this.registerForm.value).subscribe(response => {
      console.log(response);
    })
  }

  borrarAtaque(): void{
    let attackCreated: Ataque;
    attackCreated= this.registerForm.value;
    this.userService.borrarAtaque(this.registerForm.value).subscribe(response => {
      console.log(response);
    })
  }

}
