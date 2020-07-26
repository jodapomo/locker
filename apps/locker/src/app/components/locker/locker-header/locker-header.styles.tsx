import styled from 'styled-components';

export const Container = styled.div`
  /* background: #9bdb4d; */
  width: 100%;
  height: 100px;
  padding: 10px;
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.7);
  z-index: 100;
`;

export const UpperContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
`;

export const NameContainer = styled.div`
  width: 70%;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;

  h1 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
