import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  carre:number;
  somme:number=0;
  test=true;


  onKeyUp(event:any)
{ 
this.carre = event.target.value*event.target.value; 
}


onClick(x,y)
{
  this.somme=Number(x)+Number(y); 
}


check(x,y)
{
  if (x.length>0 && y.length>0)
  this.test=false;
  else 
  this.test=true;

}

  constructor() { }

  ngOnInit() {
  }

}
