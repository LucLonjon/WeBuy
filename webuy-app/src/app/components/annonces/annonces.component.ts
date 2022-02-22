import {Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../header/header.component';
import { Annonce } from './annonce';
import { AnnoncesService } from './annonces.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {


  annonces!: Annonce[];

  offre!: string;

  constructor(public dialog: MatDialog, private annoncesService: AnnoncesService) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(MakeAnOfferDialog ,{
      width: '450px',
      data: {name: this.offre}
      ,});


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Offre faite: ${result}`);
        this.offre = result;
      }
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
  templateUrl: './offer-dialog.html',
  styleUrls: ['./offerdialog.scss']
}) export class MakeAnOfferDialog {

  constructor(
    public dialogRef: MatDialogRef<MakeAnOfferDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  offre:string;

  onNoClick(): void {
    this.dialogRef.close();
  }

}
