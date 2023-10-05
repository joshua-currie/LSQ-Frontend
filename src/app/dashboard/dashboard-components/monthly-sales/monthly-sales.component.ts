import { Component, OnInit } from '@angular/core';
import { MonthlysalesDataService } from '../../../services/monthlysales-data.service';

@Component({
  selector: 'app-monthly-sales',
  templateUrl: './monthly-sales.component.html'
})
export class MonthlySalesComponent implements OnInit {

  

  data: any;

  constructor(private dataService: MonthlysalesDataService) {}

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
