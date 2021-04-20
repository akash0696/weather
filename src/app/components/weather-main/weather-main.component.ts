import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherAPIService } from '../../services/weather-api.service';


@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss']
})
export class WeatherMainComponent implements OnInit {

  weatherData: any;
  weatherSearch: FormGroup;
  constructor(private fb: FormBuilder, private wAPi: WeatherAPIService) {
    this.weatherSearch = this.fb.group({
      location: ['']
    });
   }

  ngOnInit(): void {
  }


  sendToAPI(formValue: any): void {
    this.wAPi.getWeather(formValue.location)
    .subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
  });
  }
}
