import { Loader } from '@mantine/core';
import theme from '../../utils/theme';

export default function Spinner() {
  return (
    <>
      <Loader color={theme.colors.primaryColor} />;
    </>
  );
}
