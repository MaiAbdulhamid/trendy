import { useFormControl } from '@mongez/react-form';
import { StyledRangeSlider } from '../styles';
import { P4 } from '../../Typography';

const PriceRangeSlider = (props : any) => {
  const { value, changeValue, otherProps } =
  useFormControl(props);
  console.log(typeof Number(props.min))
  console.log(props.max)

  return (
    <div style={{width: "100%"}}>
      <StyledRangeSlider
        min={Number(props.min)}
        max={Number(props.max)}
        onChange={changeValue}
        value={value}
        {...otherProps}
        // marks={[
        //   { value: Number(props.min), label: <P4>{props.min}</P4> },
        //   { value: Number(props.max), label: <P4>{props.max} </P4>},
        // ]}
      />
    </div>
  );
};

export default PriceRangeSlider;
