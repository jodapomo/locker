import { darken } from 'polished';
import styled from 'styled-components';

import { Colors } from '@locker/ui';

export const Container = styled.div`
  background: ${Colors.sidebarBg};
  width: 300px;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 1;
  padding-right: 30px;
  color: ${Colors.sidebarFg};
`;

export const Title = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 35px;
    margin-left: 5px;
    font-family: 'Orbitron', cursive;
  }

  svg {
    font-size: 35px;
  }
`;

export const UserInfoContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  .separator {
    background: ${Colors.primary};
    border-radius: 100%;
    width: 4px;
    height: 4px;
    margin: 0 10px;
  }
`;

export const Username = styled.div`
  max-width: 50%;
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    font-size: 18px;
    margin-left: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  svg {
    font-size: 18px;
    display: inline-block;
    margin-bottom: 6px;
  }
`;

export const SignOutButton = styled.button`
  background: ${darken(0.08, Colors.sidebarBg)};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${Colors.secondary};
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);

  span {
    font-size: 11px;
    margin-left: 5px;
    font-weight: bold;
    margin-bottom: -1px;
  }

  &:hover {
    background: ${darken(0.15, Colors.sidebarBg)};
  }

  &:active,
  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
    background: ${darken(0.2, Colors.sidebarBg)};
  }
`;

export const GlobalSearchInputContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;

  input {
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
    border: none;
    border-radius: 5px;
    padding: 5px;
    padding-left: 30px;
    width: 100%;
    color: ${Colors.sidebarFg};

    &::placeholder {
      color: ${darken(0.2, Colors.sidebarBg)};
    }
  }

  svg {
    position: absolute;
    margin-left: 5px;
    font-size: 20px;
    color: ${darken(0.2, Colors.sidebarBg)};
  }
`;
