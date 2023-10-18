import { notifications } from "@mantine/notifications";
import theme from "../../utils/theme";
import classes from './Notifications.module.css';

interface NotificationProps {
  message: React.ReactNode;
  type?: "success" | "danger";
  title?: string;
  style?: object;
  withCloseButton?: boolean;
  autoClose?: number | boolean;
}

export const showNotification = ({
  type = "success",
  message,
  title,
  style,
  withCloseButton = false,
  autoClose,
}: NotificationProps) => {
  notifications.show({
    itemType: type,
    title,
    message,
    classNames: classes,
    withCloseButton,
    autoClose,
    style: style ?? {
      backgroundColor:
        type === "success"
          ? theme.colors.success[100]
          : theme.colors.error[300],
    },
  });
};
