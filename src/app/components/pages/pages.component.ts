import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  pages: any;
  query = '';
  constructor(private pagesService: PagesService) {
  }

  ngOnInit() {
    this.pagesService.getAllPages().subscribe((pages) => {
      this.pages = pages;
    });
  }

}
