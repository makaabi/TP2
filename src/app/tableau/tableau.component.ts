import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {


  title:string ="Opération sur un tableau";
  tabNb=[41,18,23,58];



  moyenne()
  {
   let s=0 ;
    for(let i=0;i<this.tabNb.length;i++)
    s+=this.tabNb[i];

    return s/(this.tabNb.length);


  }
  max()
  { 
    let max =this.tabNb[0];
    for(let i=1;i<this.tabNb.length;i++)
    if(this.tabNb[i]>max) max=this.tabNb[i];
    return " maximum:" +max;
  }

  min()
  {
    let min=this.tabNb[0];
    for(let i=1;i<this.tabNb.length;i++)
    if(this.tabNb[i]<min) min=this.tabNb[i];

    return " minimum: " +min;
  }

  constructor() { }

  ngOnInit() {
  }

}
