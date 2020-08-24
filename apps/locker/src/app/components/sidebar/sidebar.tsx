import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './sidebar.styles';

export const Sidebar = () => (
  <S.Container>
    <S.Title>
      <FontAwesomeIcon icon="box-open" />
      <h2>Locker</h2>
    </S.Title>

    <S.UserInfoContainer>
      <S.Username>
        <FontAwesomeIcon icon="user-tie" />
        <span title="Username">Username</span>
      </S.Username>
      <div className="separator"></div>
      <S.SignOutButton>
        <FontAwesomeIcon icon="sign-out-alt" />
        <span>Sign out</span>
      </S.SignOutButton>
    </S.UserInfoContainer>

    <S.GlobalSearchInputContainer>
      <input type="text" placeholder="Global Search" />
      <FontAwesomeIcon icon="globe-americas" />
    </S.GlobalSearchInputContainer>
  </S.Container>
);

export default Sidebar;
