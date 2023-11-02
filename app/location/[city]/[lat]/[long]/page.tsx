import { getClient } from "@/apollo-client";
import { fetchWeatherQueries } from "@/graphql/queries/fetchWeatherQueries";



type Props = {
    params:{
    city: string;
    lat: string;
    long: string
}
}

async function WeatherPage({params : {city , lat , long}}:Props) {
  const client = getClient();

  const {data} = await client.query({
    query: fetchWeatherQueries,
    variables:{
      current_weather: "true",
      latitude : lat,
      longitude : long,
      timezone : "auto",
    }
  })

  const results : Root = data.myQuery;


console.log(results);


  return (
    <div>Welcome to WeatherPage: {city} {lat} {long}</div>
  )
}

export default WeatherPage