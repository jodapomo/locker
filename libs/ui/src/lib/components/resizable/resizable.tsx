import React, {
  FunctionComponent,
  useCallback,
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
  direction: 'top' | 'bottom' | 'right' | 'left';
};

const factors = {
  top: 1,
  bottom: -1,
  right: -1,
  left: 1,
};

export const Resizable: FunctionComponent<Props> = ({
  children,
  initialSize,
  minSize,
  maxSize,
  direction,
}) => {
  const [size, setSize] = useState<number>(initialSize || 0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVertical = direction === 'top' || direction === 'bottom';

  const refreshSize = useCallback(() => {
    const currentContainerRef = containerRef.current;
    if (!currentContainerRef) return;

    if (isVertical) setSize(currentContainerRef.clientHeight);
    else setSize(currentContainerRef.clientWidth);
  }, [isVertical]);

  useLayoutEffect(() => refreshSize(), [refreshSize]);

  const onDragStart = () => {
    changeBodyCursor(isVertical ? 'ns-resize' : 'ew-resize');
  };

  const getDelta = ui => (isVertical ? ui.deltaY : ui.deltaX);

  const onDrag = (event, ui) => {
    const delta = getDelta(ui);
    setSize(currentSize =>
      Math.max(0, currentSize - delta * factors[direction])
    );
  };

  const onDragStop = () => {
    refreshSize();
    changeBodyCursor();
  };

  const getResizeControl = Control => (
    <DraggableCore
      key="control"
      onStart={onDragStart}
      onDrag={onDrag}
      onStop={onDragStop}
    >
      <Control>
        <FontAwesomeIcon
          icon={isVertical ? 'grip-lines' : 'grip-lines-vertical'}
        />
      </Control>
    </DraggableCore>
  );

  const content = [<S.Wrapper key="content">{children}</S.Wrapper>];

  switch (direction) {
    case 'top':
      content.unshift(getResizeControl(S.TopResizeControl));
      break;
    case 'bottom':
      content.push(getResizeControl(S.BottomResizeControl));
      break;
    case 'right':
      content.push(getResizeControl(S.RightResizeControl));
      break;
    case 'left':
      content.unshift(getResizeControl(S.LeftResizeControl));
      break;
    default:
      break;
  }

  const containerProps = {
    ref: containerRef,
    maxSize,
    minSize,
    size,
  };

  if (isVertical) {
    return (
      <S.VerticalContainer {...containerProps}>{content}</S.VerticalContainer>
    );
  } else {
    return (
      <S.HorizontalContainer {...containerProps}>
        {content}
      </S.HorizontalContainer>
    );
  }
};

export default Resizable;
