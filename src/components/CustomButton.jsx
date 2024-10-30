//import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #ff5733;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e04e2a;
  }
`;

const CustomButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default CustomButton;
