import { Component, OnInit } from '@angular/core';
import { TopcustomersDataService } from '../../../services/topcustomers-data.service';

@Component({
  selector: 'app-top-customers',
  templateUrl: './top-customers.component.html'
})
export class TopCustomersComponent implements OnInit {

  data: any;

  constructor(private dataService: TopcustomersDataService) {}

  ngOnInit(): void {
    this.dataService.getComponentData('topcustomers').subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
