import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../../../services/blog-data.service';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html'
})
export class BlogCardsComponent implements OnInit {

  data: any;

  constructor(private dataService: BlogDataService) {}

  ngOnInit(): void {
    this.dataService.getComponentData('blogs').subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
