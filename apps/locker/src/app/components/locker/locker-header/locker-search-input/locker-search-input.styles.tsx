import styled from 'styled-components';

export const LockerSearchInputContainer = styled.div`
  width: 30%;
  height: 100%;
  background: #383838;
  border: 2px solid;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  overflow: hidden;

  input {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: transparent;
    border: none;
    color: inherit;
    padding-left: 40px;
    border: 2px solid #383838;
    z-index: 100;
    position: relative;

    &:active,
    &:focus {
      border: 2px solid #559cad;
    }
  }
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: absolute;
  z-index: 1;
`;
