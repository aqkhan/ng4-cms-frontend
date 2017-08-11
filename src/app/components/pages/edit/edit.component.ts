import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../../services/pages.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  page: any;
  pageID: any;
  ckeditorContent: any;
  constructor(private pageService: PagesService, private ar: ActivatedRoute, private router: Router) {
    // this.ckeditorContent = '<p>My HTML</p>';
    this.ar.params.subscribe((params: Params) => {
      this.pageID = params['id'];
    });
    this.page = {
      title: '',
      content: ''
    };
  }

  ngOnInit() {
    this.pageService.getSinglePage(this.pageID).subscribe((page) => {
      this.page = page;
    });
  }

  updatePage() {
    this.pageService.updateSinglePage(this.pageID, JSON.stringify(this.page)).subscribe(
      res => this.router.navigate(['/pages/view'])
    );
  }

  deletePage() {
    this.pageService.deleteSinglePage(this.pageID).subscribe(
      res => this.router.navigate(['/pages/view'])
    );
  }

}
