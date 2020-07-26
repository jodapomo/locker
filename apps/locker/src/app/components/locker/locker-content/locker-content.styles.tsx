import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  /* background: #485a6c; */
  width: 100%;
  flex: 1;
  position: relative;
  z-index: 1;
`;

export const ItemsWrapper = styled.div`
  /* background: #ffe16b; */
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 25px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #383838;
    width: 10px;
    border-radius: 10px;

    &:hover {
      background: ${lighten(0.05, '#383838')};
    }
  }
`;

export const Fill = styled.div`
  /* background: #89ffdd; */
  flex: 1 1 auto;
`;

export const Items = styled.div`
  /* background: #485a6c; */
`;

export const Item = styled.div`
  min-height: 150px;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.7);
  background: #3838387d;
  background: #383838;
  margin-bottom: 15px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
`;
