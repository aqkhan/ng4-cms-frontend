import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from '../../../services/pages.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  page: any;
  constructor(private addPageService: PagesService, private router: Router) {
  }

  ngOnInit() {
    this.page = {
      title: '',
      content: ''
    };
  }

  addPage() {
    this.addPageService.createNewPage(JSON.stringify(this.page)).subscribe(
      res => this.router.navigate(['/pages/view'])
    );
  }

}
