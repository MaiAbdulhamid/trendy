import { useForm } from "react-hook-form";
import theme from "../../../utils/theme";
import { Small } from "../../Typography";

export type Props = {
  error: any;
};

export default function InputError({ error }: Props) {
  const { colors } = theme;

  return (
    error && (
      <Small color={colors.error[200]} weight="bold">
        {error}
      </Small>
    )
  );
}
