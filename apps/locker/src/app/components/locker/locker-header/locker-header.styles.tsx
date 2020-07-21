import styled from 'styled-components';

export const LockerHeaderContainer = styled.div`
  /* background: #9bdb4d; */
  width: 100%;
  height: 90px;
  padding: 10px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const UpperHeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
`;

export const LockerNameContainer = styled.div`
  width: 70%;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: flex-end;

  h1 {
    line-height: 32px;
    height: 32px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
