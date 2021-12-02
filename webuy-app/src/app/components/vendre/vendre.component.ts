import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-vendre',
  templateUrl: './vendre.component.html',
  styleUrls: ['./vendre.component.scss']
})
export class VendreComponent implements OnInit {

  angForm: FormGroup;
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit(): void {

    this.createForm();
  }


   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       address: ['', Validators.required ]
    });
  }

}
