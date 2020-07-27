import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './locker-search-input.styles';

export const LockerSearchInput = () => (
  <S.Container>
    <input placeholder="Search" />
    <S.IconContainer>
      <FontAwesomeIcon icon="search" />
    </S.IconContainer>
  </S.Container>
);

export default LockerSearchInput;
