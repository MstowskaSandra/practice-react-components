import React from "react";
import { createRoot } from "react-dom/client";
import { fetchData } from "./components/fetchData";

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    state = {
        data: null,
    }

    componentDidMount() {
        const { lat, lon } = this.props;

        fetchData(lat, lon)
            .then(data => this.setState({ data }))
            .catch(err => console.error(err));
    }

    render() {
        const { data } = this.state;
        console.log(data);

        if(data) {
            const { city_name, ob_time, weather, clouds, temp, sunrise, sunset} = data[0];
            return (
                <div>
                    <h1>Pogoda dla: {city_name} dnia {ob_time}</h1>
                    <p>{weather.description} ({clouds}%) tem: {temp}C </p>
                    <p>Wschód słońca o godzinie: {sunrise}</p>
                    <p>Zachód słońca o godzinie: {sunset}</p>
                </div>
            );
        }
        return null;
    }
}

root.render(<App lat={50.06143} lon={19.93658} />);