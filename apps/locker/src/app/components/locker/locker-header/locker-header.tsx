import React from 'react';

import ItemTypeSelector from '../item-type-selector/item-type-selector';

import LockerSearchInput from './locker-search-input/locker-search-input';
import * as S from './locker-header.styles';

export const LockerHeader = () => (
  <S.Container>
    <S.UpperContainer>
      <S.NameContainer>
        <h1>Lockerj Nameg</h1>
      </S.NameContainer>
      <LockerSearchInput />
    </S.UpperContainer>
    <ItemTypeSelector />
  </S.Container>
);

export default LockerHeader;
