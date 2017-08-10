import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { apiURL } from '../globals';

@Injectable()
export class PagesService {
  pages: any;
  constructor(public http: Http) {
    console.log('Pages data service connected!');
  }
  getAllPages() {
    this.pages = this.http.get(apiURL + '/pages').map(res => res.json());
    return this.pages;
  }
  createNewPage(formData) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: myHeaders });
    return this.http.post(apiURL + '/pages', formData, options);
  }
  getSinglePage(pageID) {
    let page: any;
    page = this.http.get(apiURL + '/pages/' + pageID).map(res => res.json());
    return page;
  }
  updateSinglePage(pageID, pageData) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: myHeaders });
    return this.http.put(apiURL + '/pages/edit/' + pageID, pageData, options);
  }
  deleteSinglePage(pageID) {
    return this.http.delete(apiURL + '/pages/edit/' + pageID);
  }
}
