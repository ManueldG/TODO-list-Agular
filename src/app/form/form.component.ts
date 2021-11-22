import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() user = new EventEmitter<{nome:string,citta:string}>() ;

  constructor() { }

  ngOnInit(){
  }

  addUser(nome:string,citta:string){
     this.user.emit({nome:nome,citta:citta})
    }



}
