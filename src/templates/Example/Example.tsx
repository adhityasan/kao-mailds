import React from "react";
import Email from "@templates_components/Email";
import Item from "@templates_components/Item";
import Image from "@templates_components/Image";
import Box from "@templates_components/Box";
import Span from "@templates_components/Span";
import Anchor from "@templates_components/Anchor";
import ExampleFooter from "./ExampleFooter";
import _ExampleHeadCSS from "./_ExampleHeadCSS";

const backgroundStyle: React.CSSProperties = {
  WebkitBoxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
  backgroundColor: "#FFF",
  borderRadius: 7,
  boxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
  margin: "0 auto",
  width: "100%",
  padding: "0 32px",
};

const linkStyle: React.CSSProperties = {
  color: "white",
  display: "block",
  paddingBottom: "13px",
  paddingTop: "13px",
  textDecoration: "none",
  width: "100%",
};

const fluidItemStyle: React.CSSProperties = {
  backgroundColor: "#4e99e5",
  borderRadius: 4,
  cursor: "pointer",
  height: 48,
  textAlign: "center",
  textDecoration: "none",
};

const Example = (props: any) => {
  return (
    <Email headCSS={_ExampleHeadCSS} title="Example Mail">
      <Item style={{ height: 45 }} />
      <Item>
        <Image
          alt="logo"
          height="auto"
          src="https://raw.githubusercontent.com/adhityasan/assets/main/kao_mailds_logo.png"
          style={{ margin: "0 auto " }}
          width={200}
        />
      </Item>
      <Item style={{ height: 30 }} />
      <Item align="center">
        <Box style={backgroundStyle}>
          <Item style={{ height: 40 }} />
          <Item>
            <Span style={{ fontSize: 22, fontWeight: "bold" }}>Welcome to kaomailds&nbsp;</Span>
          </Item>
          <Item style={{ height: 25 }} />
          <Item>Hello {props?.name}, we are happy to have you on board!</Item>
          <Item style={{ height: 25 }} />
          <Item>
            To access the optimal experience for shipment management, you only need to activate your account below.
          </Item>
          <Item style={{ height: 50 }} />
          <Item className="button" style={fluidItemStyle}>
            <Anchor href={props?.nationality} style={linkStyle}>
              activate my account
            </Anchor>
          </Item>
          <Item style={{ height: 35 }} />
        </Box>
        <ExampleFooter />
      </Item>
    </Email>
  );
};

export default Example;
