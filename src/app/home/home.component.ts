import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(){

  }
  taskArray:any[] = [];
  ngOnInit(): void {
    if(localStorage.getItem('tasks') != null){
      this.taskArray = JSON.parse(localStorage.getItem('tasks')||"[]");
      console.log("the task array is full!!");
    }
  }
  
  createTask(form:NgForm){
    this.taskArray.push({
      taskName:form.value.task,
      status:false
    });
    form.reset();
    localStorage.setItem('tasks',JSON.stringify(this.taskArray));
  }

  deleteTask(index:number){
    this.taskArray.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(this.taskArray));
  }

  toggleStatus(index:number){
    this.taskArray[index].status = !this.taskArray[index].status;
    localStorage.setItem('tasks',JSON.stringify(this.taskArray));
  }
}
