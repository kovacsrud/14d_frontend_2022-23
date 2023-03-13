import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alapok';
  alcim:string="Ismerkedés az Angular-al";
  uzenet="";
  szam:number=334;
  lista=["egy","kettő","három","négy"];

  kibocsatoUzenet(e:any){
    this.uzenet=e;
  }

}
