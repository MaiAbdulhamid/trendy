import { useForm } from '@mongez/react-form';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';

type SubmitButtonProps = {
  children: React.ReactNode;
  [key: string]: any;
};

export default function SubmitButton({
  children,
  ...props
}: SubmitButtonProps) {

  return (
    <>
      <Button
        type="submit"
        loading={props.isSubmitting}
        disabled={props.isDisabled}
        variant='primary'
        {...props}
      >
        {children}
      </Button>
    </>
  );
}
