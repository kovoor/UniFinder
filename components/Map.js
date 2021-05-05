import { Component } from "react";
import ReactMapGL from "react-map-gl";
import styles from "../styles/Map.module.css"

class Map extends Component {
  state = {
    viewport: {
      width: "40.2vw",
      // width: "41vw",
      height: "49vw",
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 13,
    },
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1Ijoia292b29yIiwiYSI6ImNrNTZxanZtNDA1dWkzbG1yNHhwdjA0YmEifQ.heQa2zSX5EQSG7PlhEKa7g"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
        className={styles.map}
      />
    );
  }
}

export default Map;
