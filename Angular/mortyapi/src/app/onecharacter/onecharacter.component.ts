import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-onecharacter',
  templateUrl: './onecharacter.component.html',
  styleUrls: ['./onecharacter.component.css']
})
export class OnecharacterComponent {

  @Input()
  result:any={};
}
