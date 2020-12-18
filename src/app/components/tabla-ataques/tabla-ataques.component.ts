import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-tabla-ataques',
  templateUrl: './tabla-ataques.component.html',
  styleUrls: ['./tabla-ataques.component.css']
})
export class TablaAtaquesComponent implements OnInit {
 
  datas:any[];

  constructor( private userServiceService: UserServiceService) { }
  

  ngOnInit(): void {


this.userServiceService.getAllAttacks().subscribe(res =>{
  this.datas = res;
})

  }

}
