import { getCookie } from "cookies-next";

export function getAddressByLatLng(lat: number, lng: number) {
  return new Promise((resolve, reject) => {
    const params = {
      latlng: `${lat},${lng}`,
      language: getCookie("NEXT_LOCALE"),
      key: 'AIzaSyC4_48pZ2hPXN4yQixSU1iIy2YE9r-_dnc',
    };
    const url = `https://maps.googleapis.com/maps/api/geocode/json`;

    fetch(getUrl(url, params)).then(response => {
      response.json().then(resolve).catch(reject);
    });
  });
}

function getUrl(url: string, params: any) {
  return url + "?" + new URLSearchParams(params).toString();
}

export function getAddressByPlaceId(placeId: string) {
  return new Promise((resolve, reject) => {
    const params = {
      language: getCookie("NEXT_LOCALE"),
      key: "AIzaSyC4_48pZ2hPXN4yQixSU1iIy2YE9r-_dnc",
      place_id: placeId,
    };

    const url = `https://maps.googleapis.com/maps/api/geocode/json`;

    fetch(getUrl(url, params)).then(response => {
      response.json().then(resolve).catch(reject);
    });
  });
}
