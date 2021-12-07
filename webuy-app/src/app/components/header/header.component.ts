// src/app/components/header.component.ts
import {  OnInit } from '@angular/core';
import { Input, Component, Output, EventEmitter, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user';


export interface DialogData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit() {}

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
}


  
}


@Component({
  selector: 'register',
  templateUrl :'./register.html',
  styleUrls:['register.scss']
}) export class RegisterDialog {
  

  constructor(
    public dialogRef: MatDialogRef<RegisterDialog>,
    private userService: UserService
  ) {}

  form: FormGroup = new FormGroup({
    prenom: new FormControl(''),
    nom: new FormControl(''),
    mail: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    adresse: new FormControl('')
  });

  onSubmit() {
      const userTest = this.form.value;
      console.log(userTest);
      this.userService.save(userTest).subscribe(data => {
        const res = data;
        console.log(data);
      });
      
  }

  @Output() submitEM = new EventEmitter();


}

@Component({
  selector: 'login',
  templateUrl :'./login.html',
  styleUrls:['login.scss']
}) export class LoginDialog {

  constructor(
    public dialogRef: MatDialogRef<LoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public registerDialog: MatDialog
  ) {}

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }


  onSignUp(): void {
    this.closeDialog();
    const dialogRegister = this.registerDialog.open(RegisterDialog);
    dialogRegister.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
