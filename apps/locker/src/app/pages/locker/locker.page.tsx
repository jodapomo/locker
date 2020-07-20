import React from 'react';

import Locker from '../../components/locker/locker';
import Sidebar from '../../components/sidebar/sidebar';

import { LockerPageContainer } from './locker-page.styles';

export const LockerPage = () => (
  <LockerPageContainer>
    <Sidebar />
    <Locker />
  </LockerPageContainer>
);

export default LockerPage;
