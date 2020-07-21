import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  IconContainer,
  LockerSearchInputContainer,
} from './locker-search-input.styles';

export const LockerSearchInput = () => (
  <LockerSearchInputContainer>
    <IconContainer>
      <FontAwesomeIcon icon="search" />
    </IconContainer>
    <input placeholder="Search" />
  </LockerSearchInputContainer>
);

export default LockerSearchInput;
