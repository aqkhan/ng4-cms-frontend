import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageFilters'
})
export class PageFiltersPipe implements PipeTransform {

  transform(pages: any, query: any): any {
    if (query === '') {
      return pages;
    }
    return pages.filter(function (page) {
      return page.title.toLowerCase().indexOf(query.toLowerCase()) >= 0;
    });
  }

}
