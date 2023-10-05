import { Component, OnInit } from '@angular/core';
import { TopcardsDataService } from '../../../services/topcards-data.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {

  data: any;

  constructor(private dataService: TopcardsDataService) {}

  ngOnInit(): void {
    this.dataService.getComponentData('topcards').subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
