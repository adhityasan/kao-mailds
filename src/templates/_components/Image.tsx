import React from "react";

interface IImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  alt: string;
  src: string;
}

const Image = ({ style, ...rest }: IImageProps) => {
  return (
    <img
      {...rest}
      style={{
        display: "block",
        outline: "none",
        border: "none",
        textDecoration: "none",
        ...style,
      }}
    />
  );
};

export default Image;
