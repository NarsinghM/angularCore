import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  apiValues: string[] = [];
  name: string = "Test core";
  constructor(private _service: Http) { }

  ngOnInit() {
    this._service.get("/api/values").subscribe(result => {
      this.apiValues = result.json() as string[];
    });
  }
}
