import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { TextField } from '@mui/material';

interface InputProps {
  control: Control;
  name: string;
  errors: any;
  label: string;
  subtitle?: string;
  mask?: string;
  textArea?: boolean;
  pinInput?: boolean;
  validatePassword?: boolean;
  rightIcon?: React.ReactElement | null;
  leftIcon?: React.ReactElement | null;
  disabled?: boolean;
}

function Input(
  { control, name, errors, label, textArea, pinInput, mask, ...rest }: InputProps,
  ref: any,
) {
  const inputElementRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus();
    },
  }));

  const getInputType = (
    onChange: any,
    onBlur: any,
    value: any,
    inputElementRef: any,
    label: string,
    errors: FieldError | undefined,
  ) => {
    if (mask) {
      return (
        <InputMask
          mask={mask}
          onBlur={onBlur}
          onChange={onChange}
          value={value || ''}
          ref={inputElementRef}
          {...rest}
        >
          <TextField label={label} />
        </InputMask>
      );
    } else if (textArea) {
      return (
        // @ts-ignore
        <Textarea
          focusBorderColor={errors ? 'negative.pure' : 'primary.dark'}
          onBlur={onBlur}
          onChange={onChange}
          value={value || ''}
          ref={inputElementRef}
          {...rest}
        />
      );
    } else if (pinInput) {
      return (
        <></>
        // <HStack>
        //   <PinInput
        //     onChange={onChange}
        //     value={value || ''}
        //     focusBorderColor={errors ? 'negative.pure' : 'primary.dark'}
        //   >
        //     <PinInputField />
        //     <PinInputField />
        //     <PinInputField />
        //     <PinInputField />
        //     <PinInputField />
        //     <PinInputField />
        //   </PinInput>
        // </HStack>
      );
    } else {
      return (
        <TextField
          error={errors}
          label={label}
          type='text'
          onBlur={onBlur}
          onChange={onChange}
          value={value || ''}
          ref={inputElementRef}
          {...rest}
        />
      );
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <>{getInputType(onChange, onBlur, value, ref, label, errors)}</>
      )}
    />
  );
}

export default forwardRef(Input);
