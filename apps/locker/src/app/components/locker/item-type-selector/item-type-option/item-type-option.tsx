import React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './item-type-option.styles';

type Props = {
  name: string;
  icon: IconProp;
  active: boolean;
};

export const ItemTypeOption = ({ name, icon, active }: Props) => (
  <S.Container active={active}>
    <FontAwesomeIcon icon={icon} />
    <span>{name}</span>
  </S.Container>
);

export default ItemTypeOption;
