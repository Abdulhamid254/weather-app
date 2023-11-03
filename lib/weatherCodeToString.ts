const weatherCodeToString: {
    [key: number]: {
         icon: string;
         label: string;
    };
} = {
   0: {
        icon: "c01d",
        label: "Clear Sky",
    }, 
    1: {
        icon: "c02d",
        label: "Mainly Clear",
    },
    2: {
        icon: "c03d",
        label: "Partly Cloudy",
    },
    3: {
        icon: "c04d",
        label: "Overcast",
    },
    45: {
        icon: "c05d",
        label: "Clear Sky",
    },
    48: {
        icon: "c05d",
        label: "Deposit rime Fog",
    },
    51: {
        icon: "d0ld",
        label: "Drizzle",
    },
    53: {
        icon: "d0ld",
        label: "Drizzle",
    },
    55: {
        icon: "d0ld",
        label: "Drizzle",
    },
    56: {
        icon: "d0ld",
        label: "Freezing Drizzle",
    },
    57: {
        icon: "d0ld",
        label: "Freezing Drizzle",
    },
    61: {
        icon: "r0ld",
        label: "Rain",
    },
    63: {
        icon: "r0ld",
        label: "Rain",
    },
    65: {
        icon: "r0ld",
        label: "Rain",
    },
    66: {
        icon: "f0ld",
        label: "Freezing Rain",
    },
    67: {
        icon: "f0ld",
        label: "Freezing Rain",
    },
    71: {
        icon: "s02d",
        label: "Snow",
    },
    73: {
        icon: "s02d",
        label: "Snow",
    },
    75: {
        icon: "s02d",
        label: "Snow",
    },
    77: {
        icon: "s02d",
        label: "Snow Grains",
    },
    80: {
        icon: "r02d",
        label: "Rain Showers",
    },
    81: {
        icon: "r02d",
        label: "Rain Showers",
    },
    82: {
        icon: "r02d",
        label: "Rain Showers",
    },
    85: {
        icon: "r02d",
        label: "Rain Showers",
    },
    86: {
        icon: "r02d",
        label: "Rain Showers",
    },
    95: {
        icon: "t04d",
        label: "Thunderstorm",
    },
    96: {
        icon: "t04d",
        label: "Thunderstorm",
    },
    99: {
        icon: "t04d",
        label: "Thunderstorm",
    },
};

export default weatherCodeToString;