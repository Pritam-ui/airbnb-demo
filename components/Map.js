import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from "geolib/es/getCenter";

function Map({searchResults}) {
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }));

    const center = getCenter(coordinates);

    const [viewport, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    });

    return <ReactMapGL 
        mapStyle="mapbox://styles/pritamk/ckuqmedy02g5l18lkxyth3bes"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewPort) => setViewPort(nextViewPort)}
    />;
}

export default Map
