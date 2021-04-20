import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  constructor( private http: HttpClient ) { }

  getWeather(location: string){
    return this.http.get(
        'https://api.weatherapi.com/v1/forecast.json?key=428de9b18c794c9fb2f102612211904&q=' + location + '&days=7&aqi=no&alerts=no'
    );
}
}
