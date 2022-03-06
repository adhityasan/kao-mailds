import React from "react";

interface ISpanProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  lineHeight?: string | number;
}

const Span = ({ lineHeight = "normal", style, children, ...rest }: ISpanProps) => (
  <span
    {...rest}
    style={{
      lineHeight: lineHeight,
      ...style,
    }}
  >
    {children}
  </span>
);

export default Span;
