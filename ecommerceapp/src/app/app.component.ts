import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NgModule, Compiler } from '@angular/core';
import {RouterModule, Router, RouterState, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const HTTP_URL = 'http://localhost:7070/';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})


export class AppComponent implements OnInit {
  title = 'ecommerceapp';

  constructor(private compiler: Compiler,
              private router: Router, private httpClient: HttpClient) {
    // tslint:disable-next-line:only-arrow-functions

  }
  ngOnInit(): void {
    // this.httpClient.get(HTTP_URL).subscribe((data) => {
     // console.log(data);

   // });
  }
  /*
  createDynamic() {
    const template = '<span>Dynamic Products</span>';
    const tmpCmp = Component({template})(class {});

    const routes = [{path: '', component: tmpCmp}];
    const tmpModule = NgModule({
      imports: [RouterModule.forChild(routes)],
      declarations: [tmpCmp]})(class {});

    this.compiler.compileModuleAsync(tmpModule).then((module) => {

      const appRoutes = [...this.router.config];

      const route = {
        path: 'dynamic',
        loadChildren() { return module; }
      };

      appRoutes.push(route);

      this.router.resetConfig(appRoutes);
      this.router.navigateByUrl('/dynamic');
    });
  }

   */
}
