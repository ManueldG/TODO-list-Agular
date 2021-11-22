import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  utenti=[{nome:"Manuel",citta:"Roma"},
          {nome:"Luca",citta:"Torino"},
          {nome:"Gigi",citta:"Milano"}];

  title = 'primo2';
  val = 0;

  getUser(event: number): void{
    this.utenti.splice(event,1)
  }
}


