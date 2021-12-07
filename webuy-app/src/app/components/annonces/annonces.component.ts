import {Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Annonce } from './annonce';
import { AnnoncesService } from './annonces.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {


  annonces: Annonce[];

  constructor(public dialog: MatDialog, private annoncesService: AnnoncesService) {}

  openDialog() {
    const dialogRef = this.dialog.open(MakeAnOfferDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }


  ngOnInit(): void {
    this.annoncesService.findAll().subscribe(data => {
      this.annonces = data;
    })
  }
}

@Component({
  selector: 'offer-dialog',
  templateUrl: 'offer-dialog.html',
}) export class MakeAnOfferDialog {}
