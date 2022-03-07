import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] =[
    { "title": "Black and white colobus", "description": "Colobus guerza", "isCompleted": false, "isArchived": true, "endDate": "11/3/2021" },
    { "title": "Kite, black", "description": "Milvus migrans", "isCompleted": true, "isArchived": true, "endDate": "6/16/2021" },
    { "title": "Cliffchat, mocking", "description": "Thamnolaea cinnmomeiventris", "isCompleted": true, "isArchived": false, "endDate": "4/25/2021" },
    { "title": "Red-breasted nuthatch", "description": "Sitta canadensis", "isCompleted": true, "isArchived": false, "endDate": "7/16/2021" },
    { "title": "Galapagos mockingbird", "description": "Nesomimus trifasciatus", "isCompleted": true, "isArchived": false, "endDate": "2/18/2022" },
    { "title": "House crow", "description": "Corvus brachyrhynchos", "isCompleted": true, "isArchived": true, "endDate": "9/24/2021" },
    { "title": "Langur, gray", "description": "Semnopithecus entellus", "isCompleted": false, "isArchived": false, "endDate": "3/8/2021" },
    { "title": "Black-cheeked waxbill", "description": "Estrilda erythronotos", "isCompleted": true, "isArchived": false, "endDate": "12/31/2021" },
    { "title": "Albatross, waved", "description": "Diomedea irrorata", "isCompleted": false, "isArchived": true, "endDate": "8/16/2021" },
    { "title": "Cobra (unidentified)", "description": "Naja sp.", "isCompleted": false, "isArchived": true, "endDate": "2/20/2022" },
    { "title": "Possum, ring-tailed", "description": "Pseudocheirus peregrinus", "isCompleted": true, "isArchived": false, "endDate": "10/14/2021" },
    { "title": "Boa, cook's tree", "description": "Corallus hortulanus cooki", "isCompleted": false, "isArchived": false, "endDate": "1/24/2022" },
    { "title": "Giraffe", "description": "Giraffe camelopardalis", "isCompleted": true, "isArchived": true, "endDate": "12/8/2021" },
    { "title": "Caracara (unidentified)", "description": "unavailable", "isCompleted": false, "isArchived": false, "endDate": "9/26/2021" },
    { "title": "Sheep, stone", "description": "Ovis dalli stonei", "isCompleted": false, "isArchived": false, "endDate": "6/15/2021" },
    { "title": "Rhesus monkey", "description": "Macaca mulatta", "isCompleted": false, "isArchived": false, "endDate": "4/30/2021" },
    ]

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock)

  constructor() { }

  public getTodos(): Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }
}
