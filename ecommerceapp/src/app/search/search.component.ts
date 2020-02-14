import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get(location.href).subscribe(response =>{
      console.log(response);
    })
  }


}
