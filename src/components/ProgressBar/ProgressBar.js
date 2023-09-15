/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: '8px',
    borderRadius: '4px',
  },
  medium: {
    height: '12px',
    borderRadius: '4px',
  },
  large: {
    height: '24px',
    borderRadius: '8px',
  },
};

const ProgressBar = ({ value, size }) => {
  const barStyles = SIZES[size];

  return (
    <StyledBar
      styles={barStyles}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-labelledby="loadinglabel"
    >
      <SVG
        color={COLORS.transparentGray35}
        aria-hidden="true"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          width={value + '%'}
          height="100%"
          fill={COLORS.primary}
        ></rect>
      </SVG>
    </StyledBar>
  );
};

const StyledBar = styled.div`
  padding: 2px;
  width: 370px;
  height: ${(props) => props.styles.height};
  border-radius: ${(props) => props.styles.borderRadius}; ;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  padding: 4px;
`;

export default ProgressBar;
