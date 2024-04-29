import { LoadScriptProps } from "@react-google-maps/api";

/**
 * Location type
 * Includes lat and lng properties
 */
export type LocationType = google.maps.LatLngLiteral & {
  address?: string;
};

export type GoogleMapInputProps = any & {
  /**
   * Default center location
   */
  defaultCenter?: LocationType;
  /**
   * Default zoom value
   */
  zoom?: number;
  /**
   * Libraries that will be loaded
   *
   * @default ["places"]
   */
  libraries?: LoadScriptProps["libraries"];
  /**
   * Styles Options
   */
  styles?: {
    /**
     * Map Container Style
     */
    container?: React.CSSProperties;
  };
  /**
   * Input default Value
   */
  defaultValue?: LocationType;

  /**
   * Search scope
   *
   * @default ["address"]
   */
  searchScope?: string[];
};
