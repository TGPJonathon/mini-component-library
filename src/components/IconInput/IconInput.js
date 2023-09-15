import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: '16px',
  large: '24px',
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const elementSize = SIZES[size];

  return (
    <Wrapper for="search">
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon size={elementSize} id={icon} />
      </IconWrapper>
      <TextInput
        type="text"
        id="search"
        name="search"
        placeholder={placeholder}
        width={width}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  width: max-content;
  display: flex;
  gap: 10px;
  border-bottom: 2px solid black;
  outline-offset: 2px;

  &:focus-within {
    outline: solid 2px black;
  }
`;

const IconWrapper = styled.div`
  ${Wrapper}:hover & > div > svg {
    stroke-width: 2px;
  }
`;

const TextInput = styled.input`
  width: ${(props) => props.width}px;
  border: none;
  outline: none;

  ${Wrapper}:hover & {
    font-weight: 700;
  }

  ${Wrapper}:hover &::placeholder {
    font-weight: normal;
  }
`;

export default IconInput;
