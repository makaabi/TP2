import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  val1;
  val2;
  prod;
  setprod()
  {
    this.prod=this.val1*this.val2;
  }

  constructor() { }

  ngOnInit() {
  }

}
