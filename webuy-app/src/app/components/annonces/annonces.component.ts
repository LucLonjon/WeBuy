import { Component, OnInit } from '@angular/core';
import { Double } from 'bson';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  map = new Map<String, String>();
  title = new String();


constructor(){
  

    this.map.forEach((value: String, key: String) => {
        console.log(key, value);
    });
}


getKeys(map: any[]){
    return Array.from(map.keys());
}

  ngOnInit(): void {


    this.title = "test";
  }

}
