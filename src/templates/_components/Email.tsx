import React from "react";
import Box from "./Box";
import Item from "./Item";

interface IEmailProps {
  lang?: string;
  title: string;
  headCSS?: any;
  bodyStyle?: React.CSSProperties;
  children?: JSX.Element | JSX.Element[];
  align?: "center" | "left" | "right" | "justify" | "char";
  valign?: "top" | "baseline" | "bottom" | "middle";
  bgcolor?: string;
  width?: string | number;
  cellPadding?: string | number;
  cellSpacing?: string | number;
  style?: React.CSSProperties;
}

// inspired by http://htmlemailboilerplate.com
const Email = ({
  lang = "en",
  title = "email",
  align = "center",
  valign = "top",
  bgcolor = "#F5F8FA",
  headCSS,
  bodyStyle = {},
  width = "600px",
  cellPadding = 0,
  cellSpacing = 0,
  style,
  children,
}: IEmailProps) => {
  // default nested 600px wide outer table container (see http://templates.mailchimp.com/development/html/)
  return (
    <html lang={lang}>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        {headCSS && <style type="text/css">{headCSS}</style>}
      </head>
      <body
        style={{
          width: "100%",
          margin: 0,
          padding: 0,
          WebkitTextSizeAdjust: "100%",
          MozTextSizeAdjust: "100%",
          ...bodyStyle,
        }}
      >
        <Box width="100%" style={{ backgroundColor: bgcolor }}>
          <Item align={align} valign={valign}>
            <Box cellPadding={cellPadding} cellSpacing={cellSpacing} style={{ maxWidth: width, ...style }}>
              {children}
            </Box>
          </Item>
        </Box>
      </body>
    </html>
  );
};

export default Email;
