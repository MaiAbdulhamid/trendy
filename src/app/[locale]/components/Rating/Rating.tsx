import { Rating as MantineRationg } from '@mantine/core';
import { useFormControl } from '@mongez/react-form';

function Rating(props: any) {
  const { value, changeValue, otherProps } = useFormControl(props);

  return <MantineRationg value={value} onChange={changeValue} {...otherProps}/>;
}

export default Rating;