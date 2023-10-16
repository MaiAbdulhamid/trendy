import { P4 } from "../../Typography";
import { Label } from "./styles";
import theme from "../../../utils/theme";

export default function InputLabel({ children, required, ...props }: any) {
  if (!children) return null;

  return (
    <Label {...props}>
      {typeof children === "string" ? (
        <P4 weight="400" color={theme.colors.black[300]} text={children} />
      ) : (
        children
      )}
      {required && <sup className="super">*</sup>}
    </Label>
  );
}
