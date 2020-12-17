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
  ataque: Ataque;

  constructor( private build: FormBuilder, private userService: UserServiceService) { 
    this.registerForm = this.build.group({
      idAtaque:[''],
      nombre: ['', Validators.required],
      danio: ['', [Validators.required]],
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
    this.userService.createAtaque(attackCreated).subscribe(response => {
      console.log(response);
    })
  }

  modificarAtaque(): void{
    let attackCreated: Ataque;
    attackCreated= this.registerForm.value;
    this.userService.modificarAtaque(attackCreated).subscribe(response => {
      console.log(response);
    })
  }

  borrarAtaque(): void{
    let attackCreated: Ataque;
    attackCreated= this.registerForm.value;
    this.userService.borrarAtaque(attackCreated).subscribe(response => {
      console.log(response);
    })
  }

  getAtaque():void{
    let attackCreated: Ataque;
    attackCreated= this.registerForm.value;
    this.userService.getAtaque(attackCreated).subscribe(res =>{
      this.ataque = res;
    })
  }

}
