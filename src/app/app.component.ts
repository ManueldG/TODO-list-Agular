import { Component,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  utenti=[{nome:"concerto",citta:"Roma"},
          {nome:"teatro",citta:"Torino"},
          {nome:"Calcio",citta:"Milano"}];

  title = 'TODO list';
  val = 0;


  getUser(event: {nome: string, citta: string}){

    this.utenti.push({nome:event.nome,citta:event.citta});

  }

  getRemove(event: number): void{
    this.utenti.splice(event,1);
  }
}




