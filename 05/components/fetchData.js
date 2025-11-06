import React from "react";
import API_KEY from "../../config";


export const fetchData = (lat, lon) => {
    return fetch(`https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lang=pl&lat=${lat}&lon=${lon}`)
            .then(response => response.json())
            .then(data => data.data)
            .catch(err => console.error(err));
};