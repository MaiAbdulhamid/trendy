import { useFormControl, HiddenInput } from "@mongez/react-form";
// import { useOuterClick } from "@mongez/react-hooks";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import {
  getAddressByLatLng,
  getAddressByPlaceId,
} from "./google-map-service";
import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import usePlacesAutocomplete from "use-places-autocomplete";
import { GoogleMapInputProps, LocationType } from "./GoogleMapInput.types";
import Loader from "../../Loader";
import { Col } from "../../Grids";
import TextInput from "../TextInput";
import { Grid } from "@mantine/core";

const defaultStyles = {
  container: {
    height: "500px",
    width: "100%",
  },
};

export default function GoogleMapInput({
  defaultValue,
  zoom = 10,
  libraries = ["places"],
  defaultCenter =  {
    lat: 25.3548,
    lng: 51.1839,
  },
  styles: incomingStyles = {},
  searchScope = ["address"],
  ...props
}: GoogleMapInputProps) {
  const { name } = useFormControl(props);

  // initializing google map
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC4_48pZ2hPXN4yQixSU1iIy2YE9r-_dnc',
    libraries,
  });

  const [location, setLocation] = useState<LocationType>(
    defaultValue || defaultCenter,
  );

  const styles = { ...defaultStyles, ...incomingStyles };

  const onMapClick = (e : any) => {
    getAddressByLatLng(e.latLng.lat(), e.latLng.lng()).then((response: any) => {
      const newLocation: LocationType = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        address: response.results[0].formatted_address,
      };
      setLocation(newLocation);
      setValue(newLocation.address as any, false);
    });
  };

  const {
    ready,
    value,
    init,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    // requestOptions: config.get("vendors.google.maps.requestOptions", {
    //   location: { lat: () => 24, lng: () => 46 } as google.maps.LatLng,
    //   radius: 20000000,
    //   types: ["address"],
    // }),
    requestOptions: {
      types: searchScope,
    },
    defaultValue: defaultValue?.address,
  });

  const mapRef = React.useRef(null);
  const onMapLoad = (map: any) => {
    mapRef.current = map;
    init();
  };

  // const searchRef = useOuterClick(() => {
  //   clearSuggestions();
  // });

  const handleInput = (e : any) => {
    console.log(e)
    setValue(e);
  };

  const handleSelect =
    ({ description, ...other } : any) =>
    () => {
      getAddressByPlaceId(other.place_id).then((response: any) => {
        const newLocation: LocationType = {
          lat: response.results[0].geometry.location.lat,
          lng: response.results[0].geometry.location.lng,
          address: response.results[0].formatted_address,
        };

        setLocation(newLocation);
        setValue(newLocation.address as any, false);
      });

      setValue(description, false);
      clearSuggestions();
    };

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <ListGroupItem
          action
          tag="button"
          key={place_id}
          onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </ListGroupItem>
      );
    });

  if (loadError || !isLoaded) {
    return <Loader />;
  }

  return (
    <>
      <HiddenInput name={`lat`} value={location.lat} />
      <HiddenInput name={`lng`} value={location.lng} />
      <HiddenInput name={`address_1`} value={location.address} />
      <Grid>
        <Col xs={12}>
          <TextInput
            placeholder={props.placeholder}
            label={props.label}
            required={props.required}
            name={`address`}
            value={value}
            onChange={handleInput}
            disabled={!ready}
          />
        </Col>

        {status === "OK" && (
          <Col xs={12} className="mt-0">
            <ListGroup>{renderSuggestions()}</ListGroup>
          </Col>
        )}
      </Grid>
      <GoogleMap
        id="map"
        mapContainerStyle={styles.container}
        zoom={zoom}
        center={location}
        // options={config.get("vendors.google.maps.options")}
        onClick={onMapClick}
        onLoad={onMapLoad}>
        <Marker
          position={{ lat: location.lat, lng: location.lng }}
          // icon={{
          //   url: null,
          //   origin: null,
          //   anchor: null,
          //   scaledSize: null,
          // }}
        />
      </GoogleMap>
    </>
  );
}
