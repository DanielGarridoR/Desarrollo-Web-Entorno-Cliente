import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  series: any[] = [];

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(res => {
      this.series = res;
      console.log(res);
    });
  }
}
