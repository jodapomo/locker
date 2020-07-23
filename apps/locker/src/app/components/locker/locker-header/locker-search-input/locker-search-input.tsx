import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './locker-search-input.styles';

export const LockerSearchInput = () => (
  <S.Container>
    <S.IconContainer>
      <FontAwesomeIcon icon="search" />
    </S.IconContainer>
    <input placeholder="Search" />
  </S.Container>
);

export default LockerSearchInput;
