import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  nom:string="amine";
  age:Number=14;
  verif:boolean=false;
  img1:String="assets/popey.jpg";
  
  check()
  { 
  if(this.age<18)  this.verif=true;
  
  }


  constructor() { }

  ngOnInit() {
  }

}
