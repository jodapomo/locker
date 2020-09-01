import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './locker-search-input.styles';

export const LockerSearchInput = () => (
  <S.Container>
    <input type="text" placeholder='Search inside "Lockerj Nameg"' />
    <FontAwesomeIcon icon="search" />
  </S.Container>
);

export default LockerSearchInput;
