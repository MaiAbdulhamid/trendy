export interface QuantityInputProps {
  onChange: (value: number) => void;
  max?: number;
  min?: number;
  defaultValue?: number;
  style?: React.CSSProperties;
  setShowCart?: (show: boolean) => void; // Add this prop
}
