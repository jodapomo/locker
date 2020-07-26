import React from 'react';

import { Resizable } from '@locker/ui';

import * as S from './locker-input.styles';

export const LockerInput = () => (
  <Resizable minSize="100px" maxSize="100% - 200px" direction="top">
    <S.Container>
      <h1>Input</h1>
    </S.Container>
  </Resizable>
);

export default LockerInput;
