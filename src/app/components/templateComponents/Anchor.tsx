import React from "react";

interface IAnchorProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  color?: string;
  textDecoration?: string;
}

const Anchor = ({ color = "#58a6ff", textDecoration = "none", children, style, ...anchorProps }: IAnchorProps) => {
  return (
    <a
      {...anchorProps}
      target="_blank"
      style={{
        color,
        textDecoration,
        ...style,
      }}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default Anchor;
