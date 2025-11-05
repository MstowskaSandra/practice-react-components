import React from "react";
import { createRoot } from "react-dom/client";
import API_KEY from '../config';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    state = {
        data: null,
    }

    componentDidMount() {
        const { lat, lon } = this.props;

        fetch(`https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lang=pl&lat=${lat}&lon=${lon}`)
            .then(response => response.json())
            .then(data => this.setState({ data: data.data }))
            .catch(err => console.error(err));
    }

    render() {
        const { data } = this.state;
        console.log(data);

        if(data) {
            return (
                <div>
                    <h1>Pogoda dla: {data[0].city_name} dnia {data[0].ob_time}</h1>
                    <p>{data[0].weather.description} ({data[0].clouds}%) tem: {data[0].temp}C </p>
                    <p>Wschód słońca o godzinie: {data[0].sunrise}</p>
                    <p>Zachód słońca o godzinie: {data[0].sunset}</p>
                </div>
            );
        }
        return null;
    }
}

root.render(<App lat={50.06143} lon={19.93658} />);