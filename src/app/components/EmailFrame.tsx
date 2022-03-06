import { usePropsContext } from "@contexts/PropsContext";
import React, { useMemo } from "react";
import ReactDOMServer from "react-dom/server";

import "./EmailFrame.css";

interface IEmailFrameProps {
  emailCompoenent: React.ComponentType<any>;
}

const EmailFrame = ({ emailCompoenent: EmailComponent }: IEmailFrameProps) => {
  const { propsState } = usePropsContext();
  const doctype =
    // eslint-disable-next-line quotes
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">';

  const emailHtmlString = useMemo(() => {
    return ReactDOMServer.renderToString(<EmailComponent {...propsState} />);
  }, [EmailComponent, propsState]);

  return (
    <div className="email-frame-container">
      <iframe className="email-frame" srcDoc={doctype + emailHtmlString} name="mail-preview"></iframe>
    </div>
  );
};

export default EmailFrame;
