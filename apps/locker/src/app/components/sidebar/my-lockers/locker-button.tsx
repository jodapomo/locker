import React, { FunctionComponent } from 'react';

import * as S from './locker-button.styles';

type LockerButtonProps = {
  name: string;
  color: string;
  lastUpdate: string;
  active?: boolean;
};

export const LockerButton: FunctionComponent<LockerButtonProps> = ({
  name,
  lastUpdate,
  color,
  active = false,
}) => (
  <S.Container active={active} color={color}>
    <h5>{name}</h5>
    <span>{lastUpdate}</span>
  </S.Container>
);
