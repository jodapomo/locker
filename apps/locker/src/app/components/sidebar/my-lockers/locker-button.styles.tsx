import styled, { css } from 'styled-components';

type ContainerProps = {
  color: string;
  active: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 50px;
  background: #ffff;
  border-radius: 10px 50px 50px 10px !important;
  box-shadow: -1px 1px 2px 0px rgba(0, 0, 0, 0.3);
  border: 4px solid ${({ color }) => color};
  border-left: 8px solid ${({ color }) => color};
  cursor: ${({ active }) => (!active ? 'pointer' : 'default')};
  transition: all 0.2s ease-in-out;
  display: flex;
  padding-left: 5px;
  align-items: center;
  margin-bottom: 10px;

  ${({ active }) =>
    !active &&
    css<{ color: string }>`
      border: none;
      border-left: 8px solid ${({ color }) => color};

      &:hover {
        box-shadow: -1px 1px 4px 0px rgba(0, 0, 0, 0.5);
      }
    `}

  h5 {
    width: 80%;
    margin: 0;
    font-size: 18px;
    line-height: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  span {
    width: 20%;
    text-align: center;
    font-size: 12px;
  }
`;
