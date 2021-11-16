import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: "./contact.component.html",
  styles: []
})
export class ContactComponent implements OnInit {
  @Input() name = " ";
  @Input() email= " ";
  @Input() message= " ";

  constructor() {

  }

  ngOnInit() {}

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
   processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 
  }

}
