import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ResizeControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 10;
`;

const VerticalResizeControl = styled(ResizeControl)`
  height: 10px;
  cursor: ns-resize;
`;

const HorizontalResizeControl = styled(ResizeControl)`
  width: 10px;
  cursor: ew-resize;
`;

export const TopResizeControl = styled(VerticalResizeControl)`
  margin-bottom: -10px;
`;

export const BottomResizeControl = styled(VerticalResizeControl)`
  margin-top: -10px;
`;

export const RightResizeControl = styled(HorizontalResizeControl)`
  margin-left: -10px;
`;

export const LeftResizeControl = styled(HorizontalResizeControl)`
  margin-right: -10px;
`;

type ContainerProps = {
  maxSize: string;
  minSize: string;
  size: number | string;
  style?: {};
};

const Container = styled.div.attrs(
  ({ maxSize, minSize, size }: ContainerProps): ContainerProps => ({
    maxSize: maxSize ? `calc(${maxSize})` : 'unset',
    minSize: minSize ? `calc(${minSize})` : 'unset',
    size,
  })
)`
  display: flex;
  z-index: 1;
`;

export const VerticalContainer = styled(Container).attrs(
  ({ size, ...rest }: ContainerProps): ContainerProps => ({
    ...rest,
    size,
    style: {
      height: `${size}px`,
    },
  })
)`
  flex-flow: column nowrap;
  max-height: ${props => props.maxSize};
  min-height: ${props => props.minSize};
`;

export const HorizontalContainer = styled(Container).attrs(
  ({ size, ...rest }: ContainerProps): ContainerProps => ({
    ...rest,
    size,
    style: {
      width: `${size}px`,
    },
  })
)`
  flex-flow: row nowrap;
  max-width: ${props => props.maxSize};
  min-width: ${props => props.minSize};
`;
