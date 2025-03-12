import axios from "axios";
import { CountryType, useWorld } from "../Zustand/World";
export async function FetchData(city: string) {
  try {
    const params = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=f7ee212280d64023a95161927251103&q=${city}`
    );
    const formattedData: CountryType[] = [
      {
        location: {
          name: params.data.location.name,
          country: params.data.location.country,
        },
        current: {
          temp_c: params.data.current.temp_c,
          condition: {
            text: params.data.current.condition.text,
            icon: params.data.current.condition.icon,
          },
        },
        wind_kph: params.data.current.wind_kph,
        humidity: params.data.current.humidity,
        feelslike_c: params.data.current.feelslike_c,
        vis_km: params.data.current.vis_km,
      },
    ];

    useWorld.getState().setWorld(formattedData);
  } catch (error) {
    alert(
      "Unfortunately,we don't have access of the weather in that city.Try another one for example:Batumi(The Best City In The Galaxy)"
    );
  }
}
