import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Resizable } from '@locker/ui';

import * as S from './locker-input.styles';

export const LockerInput = () => (
  <Resizable>
    <S.Container>{/* <h1>Input</h1> */}</S.Container>
  </Resizable>
);

export default LockerInput;
