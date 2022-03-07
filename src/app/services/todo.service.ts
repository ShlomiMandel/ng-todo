import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] =[
    { "id": 1, "title": "Black and white colobus", "description": "Colobus guerza", "isCompleted": false, "isArchived": true, "endDate": "11/3/2021", selected: true },
    { "id": 2, "title": "Kite, black", "description": "Milvus migrans", "isCompleted": true, "isArchived": true, "endDate": "6/16/2021", selected: false },
    { "id": 3, "title": "Cliffchat, mocking", "description": "Thamnolaea cinnmomeiventris", "isCompleted": true, "isArchived": false, "endDate": "4/25/2021", selected: false },
    { "id": 4, "title": "Red-breasted nuthatch", "description": "Sitta canadensis", "isCompleted": true, "isArchived": false, "endDate": "7/16/2021", selected: false },
    { "id": 5, "title": "Galapagos mockingbird", "description": "Nesomimus trifasciatus", "isCompleted": true, "isArchived": false, "endDate": "2/18/2022", selected: false },
    { "id": 6, "title": "House crow", "description": "Corvus brachyrhynchos", "isCompleted": true, "isArchived": true, "endDate": "9/24/2021", selected: false },
    { "id": 7, "title": "Langur, gray", "description": "Semnopithecus entellus", "isCompleted": false, "isArchived": false, "endDate": "3/8/2021", selected: false },
    { "id": 8, "title": "Black-cheeked waxbill", "description": "Estrilda erythronotos", "isCompleted": true, "isArchived": false, "endDate": "12/31/2021", selected: false },
    ]

  // ITodo האזנה לשינויים במערך
  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock)
  // ITodo פונקציה המחזירה מערך של אובייקט 
  public getTodos(): Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }

  // ITodo האזנה לשינויים באובייקט אחד מתוך המערך
  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0])

  constructor() { }

  // פונקציה המחזירה משימה *אחת* שנבחרה מתוך הרשימה
  public getSelectedTodo(): Observable<ITodo>{
    return this._singleTodoSubject.asObservable()
  }

  // ITodo הפוקציה שמקבלת משימה אחת שנבחרה ומחזירה אותה -> לפי אובייקט
  public setSelectedTodo(todo: ITodo){
    this._singleTodoSubject.next(todo)
  }

  
}
