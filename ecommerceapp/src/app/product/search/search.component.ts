import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
const HTTP_URL = 'http://localhost:6060/Product/Search';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searchText = 'Z';
  countries: any;
  countryArr: any = [];
  countryCtrl: FormControl = new FormControl();
  filteredCountries: Observable<any>;

  constructor(private httpClient: HttpClient) { }


  ngOnInit() {
    this.httpClient.get(HTTP_URL).subscribe(response => {
     // console.log(response);
      this.countries = response;
      this.countries.forEach(x => {
        console.log(x);
        this.countryArr.push(x);
      });

      this.filteredCountries = this.countryCtrl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterCountries(value))
      );

    });

  }


  private _filterCountries(value: string): any {
    const filterValue = value.toLowerCase();

    return this.countryArr.filter(country => country.name.toLowerCase().indexOf(filterValue) === 0);
  }


  test() {
    console.log('called');
  }
}
