import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-tabla-ataques',
  templateUrl: './tabla-ataques.component.html',
  styleUrls: ['./tabla-ataques.component.css']
})
export class TablaAtaquesComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  datas:any;
  constructor( private userServiceService: UserServiceService) { }
  

  ngOnInit(): void {
this.dtOptions = {
  pagingType: 'full_numbers',
  pageLength: 5
};

this.userServiceService.getAllAttacks().subscribe(res =>{
  this.datas = res;
  this.dtTrigger.next();
})

  }

  ngOnDestroy(): void {
   this.dtTrigger.unsubscribe();
  }
}
