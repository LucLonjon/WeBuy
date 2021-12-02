import {Component, OnInit } from '@angular/core';
import { Double } from 'bson';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  annonces = [
    {
      produit: "Iphone SE",
      prix: "3,95", 
      currency: "€",
      description: "Description Iphone",
      
    },{
    
    produit: "Iphone SE",
    prix: "3,95", 
    currency: "€",
    description: "Description Iphone",
    },
    {
      produit: "Iphone SE",
      prix: "3,95", 
      currency: "€",
      description: "Description Iphone",
      },
    
  ]

  map = new Map<String, String>();
  title = new String();


  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(MakeAnOfferDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }


  ngOnInit(): void {

    
 
  }
}

@Component({
  selector: 'offer-dialog',
  templateUrl: 'offer-dialog.html',
}) export class MakeAnOfferDialog {}
