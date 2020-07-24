import React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';

import ItemTypeOption from './item-type-option/item-type-option';
import * as S from './item-type-selector.styles';

interface ItemType<IconType> {
  name: string;
  label: string;
  icon: IconType;
}

const itemsTypes: ItemType<IconProp>[] = [
  {
    name: 'text',
    label: 'Text',
    icon: 'font',
  },
  {
    name: 'bookmark',
    label: 'Bookmarks',
    icon: 'link',
  },
  {
    name: 'code',
    label: 'Code',
    icon: 'code',
  },
  {
    name: 'file',
    label: 'Files',
    icon: 'file-alt',
  },
];

export const ItemTypeSelector = () => (
  <S.Container>
    {itemsTypes.map(({ label, icon }, index) => (
      <ItemTypeOption active={index === 2} name={label} icon={icon} />
    ))}
  </S.Container>
);

export default ItemTypeSelector;
