import { transparentize } from 'polished';
import { darken } from 'polished';
import styled from 'styled-components';

import { Colors } from '@locker/ui';

export const Container = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  transition: all 0.2s ease-in-out;

  input {
    background: ${Colors.secondary};
    font-size: 18px;
    box-shadow: inset -1px 1px 2px 0px rgba(0, 0, 0, 0.7);
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    padding-right: 35px;
    width: 105px;
    color: inherit;
    transition: all 0.2s ease-in-out;

    &:active,
    &:focus {
      width: 100%;
      border-color: ${Colors.theme};

      &::placeholder {
        color: ${transparentize(0.3, Colors.lockerFg)};
      }

      & + svg {
        color: ${Colors.lockerFg};
      }
    }

    &::placeholder {
      transition: all 0.1s ease-in-out;
      color: ${transparentize(0.5, Colors.lockerFg)};
    }
  }

  svg {
    position: absolute;
    right: 0;
    margin-right: 8px;
    font-size: 20px;
    color: ${transparentize(0.3, Colors.lockerFg)};
    transition: all 0.1s ease-in-out;
  }
`;
