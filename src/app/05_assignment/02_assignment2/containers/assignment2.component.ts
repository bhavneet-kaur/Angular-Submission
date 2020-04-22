import { Component, Input ,Output,EventEmitter} from '@angular/core';
import {Todo} from './models/todo.interface';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
  
})

export class Assignment2Component {
 @Input()
  data:Todo[]

  @Input()
  selectedRow:Todo;

  @Output()
  RowSelected = new EventEmitter<Todo>();
  onSelectRow(todo:Todo)
  {
    this.RowSelected.emit(todo);
  } 
}
