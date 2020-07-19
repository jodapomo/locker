import React from 'react';

import Locker from '../components/locker/locker';
import SideBar from '../components/locker/sidebar';

import { LockerContainer } from '@locker/ui';

export const LockerPage = () => (
  <LockerContainer>
    <SideBar />
    <Locker />
  </LockerContainer>
);

export default LockerPage;
