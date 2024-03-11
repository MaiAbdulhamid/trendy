import { HiddenInput } from "@mongez/react-form";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { getAddressByLatLng, getAddressByPlaceId } from "./google-map-service";
import React, { useState } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import { GoogleMapInputProps, LocationType } from "./GoogleMapInput.types";
import Loader from "../../Loader";
import { Col, Flex } from "../../Grids";
import TextInput from "../TextInput";
import { Grid } from "@mantine/core";
import Button from "../../Button/Button";

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
  defaultCenter = {
    lat: 25.3548,
    lng: 51.1839,
  },
  styles: incomingStyles = {},
  searchScope = ["address"],
  ...props
}: GoogleMapInputProps) {
  // initializing google map
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC4_48pZ2hPXN4yQixSU1iIy2YE9r-_dnc",
    libraries,
  });

  const [location, setLocation] = useState<LocationType>(
    defaultValue || defaultCenter
  );

  const styles = { ...defaultStyles, ...incomingStyles };
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
    defaultValue: props?.address,
  });

  const onMapClick = (e: any) => {
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

  const mapRef = React.useRef(null);
  const onMapLoad = (map: any) => {
    mapRef.current = map;
    init();
  };

  // const searchRef = useOuterClick(() => {
  //   clearSuggestions();
  // });

  const handleInput = (e: any) => {
    setValue(e);
    console.log(value);
  };

  const handleSelect =
    ({ description, ...other }: any) =>
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
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <Button noStyle key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </Button>
      );
    });

  if (loadError || !isLoaded) {
    return <Loader />;
  }
  console.log(props.address);
  return (
    <>
      <HiddenInput name={`lat`} value={location.lat} defaultValue={props.lat} />
      <HiddenInput name={`lng`} value={location.lng} defaultValue={props.lng} />
      <HiddenInput name={`address`} value={value} />
      <Grid>
        <Col xs={12}>
          <TextInput
            placeholder={props.placeholder}
            label={props.label}
            required={props.required}
            name={`address_1`}
            // value={value}
            onChange={handleInput}
            disabled={!ready}
            defaultValue={props.address}
          />
        </Col>

        {status === "OK" && (
          <Col xs={12} className="mt-0">
            <Flex direction="column">{renderSuggestions()}</Flex>
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
        onLoad={onMapLoad}
      >
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
