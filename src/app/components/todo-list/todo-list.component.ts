import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,OnDestroy {

  public todos: Array<ITodo> = [];

  private subscription: Subscription = new Subscription()

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getTodos().subscribe(data =>{
        console.log(data)
        this.todos = data
      })
    )
  }

  ngOnDestroy() {
      this.subscription.unsubscribe()
  }

  public onTodoClick(todo: ITodo, index:number): void{
    this.todoService.setSelectedTodo(todo);

    // false-ל selected עובר על כל המערך ומשנה את ערך
    this.todos.forEach(todo => {
      if(todo.selected){
        todo.selected = false;
      }
    })

    //  true-של המשימה שנבחרה ל selected משנה את ערך 
    this.todos[index].selected = true;

  }
}

