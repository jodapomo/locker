import { darken, lighten } from 'polished';
import styled from 'styled-components';

const activeColor = '#7e8087';
const defaultColor = '#559cad';

type ContainerInputProps = {
  active: boolean;
};

type ContainerProps = ContainerInputProps & {
  backgroundColor: string;
};

export const Container = styled.div.attrs(
  ({ active }: ContainerInputProps): ContainerProps => ({
    backgroundColor: active ? activeColor : defaultColor,
    active,
  })
)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.backgroundColor};
  font-size: 20px;
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
  transition: all 0.2s ease-in-out;
  font-weight: ${({ active }) => (active ? 'bold' : 'initial')};

  &:hover {
    background: ${({ active, backgroundColor }) =>
      active ? activeColor : darken(0.06, backgroundColor)};
  }

  &:active {
    background: ${({ active, backgroundColor }) =>
      active ? activeColor : darken(0.03, backgroundColor)};
  }

  svg {
    margin-right: 5px;
  }
`;
