import { useForm } from "react-hook-form";
import theme from "../../../utils/theme";
import { Small } from "../../Typography";

export type Props = {
  name: string;
};

export default function InputError({ name }: Props) {
  const { colors } = theme;
  const {
    formState: { errors },
  } = useForm();

  return (
    errors[name]?.message && (
      <Small color={colors.error[200]} weight="bold">
        errors[name]?.message
      </Small>
    )
  );
}
