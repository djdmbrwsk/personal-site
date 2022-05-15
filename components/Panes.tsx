import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

export const Panes = ({
  currentPane = 0,
  children,
}: PropsWithChildren<{
  currentPane?: number;
}>) => {
  const wrapper = css`
    overflow: hidden;
  `;
  const inner = css`
    transition: transform 300ms ease;
    transform: translate3d(-${currentPane * 100}%, 0, 0);
    white-space: nowrap;
  `;

  return (
    <div css={wrapper}>
      <div css={inner}>{children}</div>
    </div>
  );
};

export const Pane = ({
  children,
  verticalAlign = 'middle',
}: PropsWithChildren<{
  verticalAlign?: 'top' | 'middle' | 'bottom';
}>) => {
  const wrapper = css`
    display: inline-block;
    vertical-align: ${verticalAlign};
    width: 100%;
  `;
  return <div css={wrapper}>{children}</div>;
};
