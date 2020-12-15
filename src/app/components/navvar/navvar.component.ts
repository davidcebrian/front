import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'navvar',
  templateUrl: './navvar.component.html',
  styleUrls: ['./navvar.component.css']
})
export class NavvarComponent implements OnInit {

  searchForm: FormGroup;
  constructor( private build: FormBuilder ) { 

    this.searchForm = this.build.group({
      input: ['']
    })

  }

  ngOnInit(): void {
  }

}
