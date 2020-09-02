import React from 'react';

import { Colors } from '@locker/ui';

import { LockerButton } from './locker-button';
import * as S from './my-lockers.styles';

export const MyLockers = () => (
  <S.Container>
    <S.Title>My Lockers</S.Title>

    <LockerButton name="Front" lastUpdate="2h" color={'#68b723'} />
    <LockerButton
      name="Lockerj Nameg"
      lastUpdate="2h"
      active
      color={Colors.theme}
    />
    <LockerButton name="Back" lastUpdate="2h" color="#7239b3" />
    <LockerButton name="Infra" lastUpdate="2h" color="#d48e15" />
  </S.Container>
);

export default MyLockers;
