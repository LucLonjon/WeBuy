// src/app/components/header.component.ts
import {  OnInit } from '@angular/core';
import { Input, Component, Output, EventEmitter, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from './user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './user';
import { Observable } from 'rxjs';


export interface DialogData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit() {
  }

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
    private userService: UserService,
    private snackBar: MatSnackBar,
    public loginDialog: MatDialog
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
      this.userService.save(this.form.value).subscribe(data => {
        console.log(data);
        if (data = "Registration successful") {
          this.openSnackBar("You've succefully registered", "Log In");
          this.closeDialog();
          this.onSnackBarAction();
        }
      });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{
      duration: 2000,
    });
  }

  onSnackBarAction(){
    this.snackBar._openedSnackBarRef?.onAction().subscribe(() => {
      const dialogLogin = this.loginDialog.open(LoginDialog);
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
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public registerDialog: MatDialog
  ) {}

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.userService.logOn(this.form.controls['username'].value,this.form.controls['password'].value).subscribe(data => {
        console.log(data);
      });
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
