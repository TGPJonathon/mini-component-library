import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <InvisibleSelect
        aria-controls="listbox1"
        aria-expanded="false"
        aria-haspopup="listbox"
        role="combobox"
        value={value}
        onChange={onChange}
      >
        {children}
      </InvisibleSelect>
      <StyledSelect
        tabIndex={0}
        color={COLORS.transparentGray15}
        textColor={COLORS.gray700}
      >
        {displayedValue} <Icon id="chevron-down" strokeWidth={2} />
      </StyledSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const InvisibleSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

const StyledSelect = styled.div`
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.color};
  border-radius: 8px;
  padding: 12px 16px;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;

  ${InvisibleSelect}:focus + & {
    border: solid 2px black;
  }

  ${InvisibleSelect}:hover + & {
    color: black;
  }
`;

export default Select;
