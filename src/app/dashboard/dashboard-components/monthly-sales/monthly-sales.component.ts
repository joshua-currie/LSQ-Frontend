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

    public barChartLabels: string[] = [];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartData: { data: number[], label: string }[] = [
        { data: [], label: 'Monthly Sales' }
    ];

    data: any;

    constructor(private dataService: MonthlysalesDataService) {}

    ngOnInit(): void {
      this.dataService.getComponentData('monthlysales').subscribe(
          (data: any) => {
              this.data = data;
              
              // Combine Labels and Data
              const combinedData = data.map((item: { invoice_month: any; invoice_year: any; amount: string; }) => {
                  return {
                      date: `${item.invoice_month}-${item.invoice_year}`,
                      sales: parseFloat(item.amount)
                  };
              });
  
              // Sort Combined Data
              combinedData.sort((a: { date: string; }, b: { date: string; }) => {
                  const dateA = new Date(a.date.split('-')[1] + '-' + a.date.split('-')[0] + '-01');
                  const dateB = new Date(b.date.split('-')[1] + '-' + b.date.split('-')[0] + '-01');
                  return dateA.getTime() - dateB.getTime();
              });
  
              // Split Combined Data Back
              this.barChartLabels = combinedData.map((item: { date: any; }) => item.date);
              this.barChartData[0].data = combinedData.map((item: { sales: any; }) => item.sales);
          },
          (error: any) => {
              console.error('Error fetching data:', error);
          }
      );
    }
}
