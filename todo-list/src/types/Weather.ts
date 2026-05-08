export interface WeatherItem {
  main: string;
  description: string;
  icon: string;
}

export interface WeatherResponse {
  weather: WeatherItem[];
  main: {
    temp: number;
  };
}

export interface Weather {
  main: string;
  description: string;
  icon: string;
  temp: string;
}
