import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  ngOnInit(): void {
    this.getCharacters();
  }
  
  info:any={};
  results:any=[];
  page=1;
  isLoading:boolean=false;

  getCharacters(){
    this.isLoading=true;
    fetch(`https://rickandmortyapi.com/api/character?page=${this.page}`)
    .then(res=>res.json())
    .then(adat=>{this.info=adat.info;this.results=adat.results})
    .catch(err=>alert(err))
    .finally(()=>this.isLoading=false);
  }

  pageUp(){
    if(this.page<this.info.pages){
      this.page+=1;
      this.getCharacters();
    }
  }

  pageDown(){
    if(this.page>1){
      this.page-=1;
      this.getCharacters();
    }

  }

}
