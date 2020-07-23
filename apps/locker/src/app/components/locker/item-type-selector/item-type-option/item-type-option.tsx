import React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './item-type-option.styles';

type Props = {
  name: string;
  icon: IconProp;
};

export const ItemTypeOption = ({ name, icon }: Props) => (
  <S.Container>
    <FontAwesomeIcon icon={icon} />
    <span>{name}</span>
  </S.Container>
);

export default ItemTypeOption;
