import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  personajes: any[];

  constructor( private service: UserServiceService) { }

  ngOnInit(): void {
    this.service.getAllPersonajes().subscribe(res =>{
      this.personajes = res;
    })
  }

}
