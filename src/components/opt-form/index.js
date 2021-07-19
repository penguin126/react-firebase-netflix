import React, { useState } from 'react';
import {
  Container,
  Input,
  Break,
  Button,
  Text,
  InputLabel,
  WrapDescription,
} from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.WrapDescription = function OptFormWrapDescription({ ...restProps }) {
  const [activeState, setActiveState] = useState(false);
  return (
    <WrapDescription {...restProps}>
      <Input onClick={() => setActiveState(true)} />
      <InputLabel active={activeState}>Địa chỉ email</InputLabel>
    </WrapDescription>
  );
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
