import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() users=[{nome:'',citta:''}];
  @Output() user = new EventEmitter<number>();

  constructor() { }

  ngOnInit(){
  }

  remove(user: any){
    this.user.emit(user);
  }

}
