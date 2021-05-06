import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const defaultProps = {
    center: {
      lat: 42.981700,
      lng: -81.251400
    },
    zoom: 12
};

const AnyReactComponent = () => <div><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#D7402A"/></div>;

const Map = () => {
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '150px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCfHFKmGZP2loNbLIA-pZuvtwduzIw8vz4' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                options={{fullscreenControl: false}}

            >
            <AnyReactComponent
                lat={42.981700}
                lng={-81.251400}
            />
            </GoogleMapReact>
        </div>
    );
}
 
export default Map;