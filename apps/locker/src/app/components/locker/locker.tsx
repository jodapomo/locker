import React from 'react';

import LockerContent from './locker-content/locker-content';
import LockerHeader from './locker-header/locker-header';
import LockerInput from './locker-input/locker-input';
import { LockerContainer } from './locker.styles';

export const Locker = () => (
  <LockerContainer>
    <LockerHeader />
    <LockerContent />
    <LockerInput />
  </LockerContainer>
);

export default Locker;
