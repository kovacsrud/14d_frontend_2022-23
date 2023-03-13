import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kibocsato',
  templateUrl: './kibocsato.component.html',
  styleUrls: ['./kibocsato.component.css']
})
export class KibocsatoComponent {

  @Output()
  outputText=new EventEmitter();

  startEmit(e:any){
    this.outputText.emit('Kibocsátás');
  }

}
