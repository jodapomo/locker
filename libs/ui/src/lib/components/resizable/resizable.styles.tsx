import styled from 'styled-components';

type WrapperInputProps = {
  size: string;
};

type WrapperProps = WrapperInputProps & {
  style: {};
};

export const Wrapper = styled.div.attrs(
  ({ size }: WrapperInputProps): WrapperProps => ({
    size,
    style: {
      height: size,
    },
  })
)`
  width: 100%;
  max-height: 100%;
  min-height: 100%;
`;

export const ResizeControl = styled.div`
  width: 100%;
  height: 10px;
  margin-bottom: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: ns-resize;
  z-index: 10;
`;

type ContainerInputProps = {
  maxSize: string;
  minSize: string;
};

export const Container = styled.div.attrs(
  ({ maxSize, minSize }: ContainerInputProps): ContainerInputProps => ({
    maxSize: maxSize ? `calc(${maxSize})` : 'unset',
    minSize: minSize ? `calc(${minSize})` : 'unset',
  })
)<ContainerInputProps>`
  display: flex;
  flex-flow: column nowrap;
  max-height: ${props => props.maxSize};
  min-height: ${props => props.minSize};
  z-index: 1;
`;
