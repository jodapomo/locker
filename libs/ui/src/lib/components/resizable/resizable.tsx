import React, {
  FunctionComponent,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { DraggableCore } from 'react-draggable';

import { changeBodyCursor } from '../../utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './resizable.styles';

type Props = {
  initialSize?: number;
  minSize?: string;
  maxSize?: string;
};

export const Resizable: FunctionComponent<Props> = ({
  children,
  initialSize,
  minSize = '100px',
  maxSize = '100% - 200px',
}) => {
  const [size, setSize] = useState<number>(initialSize || 0);
  const containerRef = useRef<HTMLDivElement>(null);

  const refreshSize = () => {
    const currentContainerRef = containerRef.current;
    if (currentContainerRef) setSize(currentContainerRef.clientHeight);
  };

  useLayoutEffect(() => refreshSize(), []);

  const onDrag = (event, ui) => {
    changeBodyCursor('ns-resize');
    const delta = ui.deltaY;
    setSize(currentSize => Math.max(0, currentSize - delta));
  };

  const onDragStop = () => {
    refreshSize();
    changeBodyCursor();
  };

  return (
    <S.Container ref={containerRef} maxSize={maxSize} minSize={minSize}>
      <DraggableCore onDrag={onDrag} onStop={onDragStop}>
        <S.ResizeControl>
          <FontAwesomeIcon icon="grip-lines" />
        </S.ResizeControl>
      </DraggableCore>
      <S.Wrapper size={`${size}px`}>{children}</S.Wrapper>
    </S.Container>
  );
};

export default Resizable;
