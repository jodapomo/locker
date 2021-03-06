import styled from 'styled-components';

import { Colors } from '@locker/ui';

export const Container = styled.div`
  background: ${Colors.primary};
  box-shadow: -1px 1px 3px 0px rgba(0, 0, 0, 0.5);
  width: calc(100% - 270px);
  border-radius: 30px 0 0 30px;
  z-index: 2;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  color: ${Colors.lockerFg};
`;
