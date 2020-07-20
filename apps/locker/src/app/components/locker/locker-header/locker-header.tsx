import React from 'react';

import ItemTypeSelector from '../item-type-selector/item-type-selector';

import LockerSearchInput from './locker-search-input/locker-search-input';
import {
  LockerHeaderContainer,
  LockerNameContainer,
  UpperHeaderContainer,
} from './locker-header.styles';

export const LockerHeader = () => (
  <LockerHeaderContainer>
    <UpperHeaderContainer>
      <LockerNameContainer>
        <h1>Locker Name</h1>
      </LockerNameContainer>
      <LockerSearchInput />
    </UpperHeaderContainer>
    <ItemTypeSelector />
  </LockerHeaderContainer>
);

export default LockerHeader;
