import { Loader } from '@mantine/core';
import theme from '../../utils/theme';
import { Flex } from '../Grids';

export default function Spinner() {
  return (
    <Flex fullWidth justify='center' align='center'>
      <Loader color={theme.colors.primaryColor} />
    </Flex>
  );
}
