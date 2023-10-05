import { Component, OnInit } from '@angular/core';
import { FeedDataService } from '../../../services/feed-data.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html'
})
export class FeedsComponent implements OnInit {

  data: any;

  constructor(private dataService: FeedDataService) {}

  ngOnInit(): void {
    this.dataService.getComponentData('feeds').subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
