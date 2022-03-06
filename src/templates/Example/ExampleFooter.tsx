import React from "react";
import Box from "@templates_components/Box";
import Anchor from "@templates_components/Anchor";
import Item from "@templates_components/Item";
import Span from "@templates_components/Span";

const TextDivider = () => <>&nbsp;·&nbsp;</>;

const EmailFooter = () => {
  return (
    <Box>
      <Item style={{ height: 20 }} />
      <Item align="center">
        <Span color="rgb(117, 128, 140)" style={{ fontSize: 14, lineHeight: 1.4 }}>
          Designed by adhityasan
          <TextDivider />
          Bekasi, 17610 Jawa Barat, Indonesia
        </Span>
      </Item>
      <Item style={{ height: 5 }} />
      <Item align="center">
        <Span color="rgb(117, 128, 140)" style={{ fontSize: 14, lineHeight: 1.4 }}>
          <Anchor href="https://github.com/adhityasan/kao-mailds" style={{ color: "rgb(117, 128, 140)", fontSize: 15 }}>
            It&apos;s an example of email template developed with kao-mailds
          </Anchor>
          <br />
          <Anchor href="https://github.com/adhityasan" style={{ color: "rgb(117, 128, 140)", fontSize: 15 }}>
            You can find the author here
          </Anchor>
        </Span>
      </Item>
      <Item style={{ height: 45 }} />
    </Box>
  );
};

export default EmailFooter;
