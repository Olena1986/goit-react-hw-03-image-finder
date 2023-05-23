import React from 'react';
import { ButtonStyle } from './Button.styled';

const Button = ({ onClick }) => {
  return <ButtonStyle.Loader onClick={onClick}>Load more</ButtonStyle.Loader>;
};

export default Button;
