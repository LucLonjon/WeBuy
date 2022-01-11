import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent, LoginDialog, RegisterDialog } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnnoncesComponent, MakeAnOfferDialog } from './components/annonces/annonces.component';
import { VendreComponent } from './components/vendre/vendre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AnnoncesService } from './components/annonces/annonces.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const mat = [
  MatButtonModule,
  MatIconModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatRadioModule,
  MatGridListModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AnnoncesComponent,
    VendreComponent,
    LoginDialog,
    RegisterDialog,
    MakeAnOfferDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ...mat
  ],
  exports: [
  ],
  providers: [AnnoncesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
