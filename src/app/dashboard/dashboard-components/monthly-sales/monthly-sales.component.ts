import { Component, OnInit } from '@angular/core';
import { MonthlysalesDataService } from '../../../services/monthlysales-data.service';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-monthly-sales',
  templateUrl: './monthly-sales.component.html'
})
export class MonthlySalesComponent implements OnInit {

  // Properties for the chart
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[] = [];  // Explicitly define it as string array
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: { data: number[], label: string }[] = [ // Explicitly define data as number array
  { data: [], label: 'Monthly Sales' }
];
  
  data: any;

  constructor(private dataService: MonthlysalesDataService) {}

  ngOnInit(): void {
    this.dataService.getComponentData('blogs').subscribe(
      (data: any[]) => {
        this.data = data;
        this.barChartLabels = data.map(item => `${item.invoice_month}-${item.invoice_year}`);
        this.barChartData[0].data = data.map(item => parseFloat(item.amount));
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
