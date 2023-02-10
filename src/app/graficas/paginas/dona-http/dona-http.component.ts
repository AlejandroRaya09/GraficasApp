import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [  ];
  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data:[],
      backgroundColor:['#6405F0','#0724E3', '#05A0F0'] }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';
  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
   /* this.graficasService.getUsuariosRedes().subscribe(data=>{
      const labels = Object.keys(data);

      this.doughnutChartData={
        labels:labels,
        datasets:[{data:Object.values(data)}]
      }
    })*/

    this.graficasService.getUsuariosRedesSocialesData().subscribe( ({labels, datasets}) => {
      this.doughnutChartData={labels,datasets}
    })
  }


 
}
