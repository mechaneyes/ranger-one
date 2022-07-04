import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import EarthView from '../EarthView/EarthView'
import ReactMapComponent from './ReactMapComponent'

const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

const ReactMaps = () => (
    <Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <ReactMapComponent />
    </Wrapper>
);

export default ReactMaps