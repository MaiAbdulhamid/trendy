import { Radio as BaseRadio, RadioGroupProps } from "@mantine/core";
import { RadioStyled } from "./style";
import { RadioProps } from "./type";

export default function ColorRadio(props: RadioProps) {
  return <RadioStyled {...props} />;
}

// export function RadioGroup(
//   props: RadioGroupProps & React.RefAttributes<HTMLDivElement>
// ) {
//   return <BaseRadio.Group {...props} />;
// }
