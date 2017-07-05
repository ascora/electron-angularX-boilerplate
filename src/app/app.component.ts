import { Component, OnInit } from '@angular/core';
import { TranslateService } from "ng2-translate";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public hello = "Hello world";
  constructor() {
  }
 
  ngOnInit(): void {
    console.log("Hello from app.component");
  }
}
