import React from 'react';

import LockerContent from './locker-content/locker-content';
import LockerHeader from './locker-header/locker-header';
import LockerInput from './locker-input/locker-input';
import * as S from './locker.styles';

export const Locker = () => (
  <S.Container>
    <LockerHeader />
    <LockerContent />
    <LockerInput />
  </S.Container>
);

export default Locker;
