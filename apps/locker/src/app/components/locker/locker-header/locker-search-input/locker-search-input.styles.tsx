import { transparentize } from 'polished';
import styled from 'styled-components';

import { Colors } from '@locker/ui';

export const Container = styled.div`
  width: 30%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: flex-end;

  input {
    font-size: 20px;
    width: 140px;
    background: transparent;
    border: none;
    border-bottom: 1px solid ${Colors.secondary};
    color: inherit;
    padding-left: 5px;
    padding-right: 40px;
    position: relative;
    transition: all 0.3s ease-in-out;

    &:active,
    &:focus {
      width: 100%;
      border-color: ${Colors.theme};

      &::placeholder {
        color: ${transparentize(0.5, Colors.lockerFg)};
      }
    }

    &::placeholder {
      color: ${Colors.secondary};
    }
  }
`;

export const IconContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: absolute;
  color: ${Colors.lockerFg};
  transition: all 0.2s ease-in-out;
  border: 2px solid ${Colors.primary};
  cursor: text;

  &:hover {
    border-color: ${Colors.theme};
  }
`;
