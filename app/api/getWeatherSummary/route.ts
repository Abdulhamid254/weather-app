import {NextResponse} from "next/server";
import openai from "@/openai";
import { ChatCompletion } from "openai/resources";


export async function POST(request: Request) {
    // weatherdata in the body of the post req
    const { weatherData } = await request.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
        temperature: 0.8,
         n: 1,
         stream: false,
        messages: [
            {"role": "system",
             "content": `Pretend you're a weather news presenter presenting LIVE on television.be energetic and full of charisma.Introduce yourself as Abdul and say you are LIVE from the GETARRAYS Headquarters.State the city you are providing a summary for.Then give a summary of todays weather only.Make it easy for the viewer to
                         understand and know what you do to prepare for those weather conditions such as wear SPF if the UV is high
                       etc.use the uv_index data provided to provide UV advice.Provide a joke
                        regardibg the weather.Assume the data came from your team at the news office and not the user`
            },{
                "role": "user",
                "content": `HI there, can i get a summary of todays weather, use the following information to get the weather data: ${JSON.stringify(
                                  weatherData
                      )}`,
            },
        
        ],
      });

      // console.log(response.choices[0].message);
      const data: ChatCompletion = response;

         console.log("DATA IS ", data);
      
      return NextResponse.json(data.choices[0].message)

    // const { data } = response;

    // console.log("DATA IS ", data);


    // return NextResponse.json(data.choices[0].message);

    //   console.log(response.choices[0].message);

    // const response = await openai.createChatCompletion({
    //     model: "gpt-4",
    //     temperature: 0.8,
    //     n: 1,
    //     stream: false,
    //     message: [
    //         {
    //             role: 'system',
    //             content: `Pretend you're a weather news presenter presenting LIVE on television.be energetic and full of charisma.Introduce yourself as Abdul and say you are LIVE from the GETARRAYS Headquarters.State the city you are providing a summary for.Then give a summary of todays weather only.Make it easy for the viewer to
    //             understand and know what you do to prepare for those weather conditions such as wear SPF if the UV is high
    //             etc.use the uv_index data provided to provide UV advice.Provide a joke
    //             regardibg the weather.Assume the data came from your team at the news office and not the user`
    //         },{
    //             role:'user',
    //             content:`HI there, can i get a summary of todays weather, use the following information to get the weather data: ${JSON.stringify(
    //                 weatherData
    //             )}`,
    //         },
    //     ],
    // });

    // const { data } = response;

    // console.log("DATA IS ", data);


    // return NextResponse.json(data.choices[0].message);
    
}