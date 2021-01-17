import { Component, OnInit } from '@angular/core';
import {ApiCallService} from '../../services/api-call.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.scss']
})
export class FetchDataComponent implements OnInit {

  todos: any;
  singleTodo: any;
  displayTodos: boolean;
  
  constructor(private session:ApiCallService) {
    this.displayTodos = true;
   }

  ngOnInit(): void {
    this.session.getData().subscribe((item) => {
      this.todos = item;
    });
  }
  setdisplayTodos() {
    this.displayTodos = true;
    this.singleTodo = [];
  }
  getApiValue(id: string) {
    this.session.getDataByID(parseInt(id)).subscribe((item) => {
      this.singleTodo = [item];
      this.displayTodos = false;
    });
  }

}


