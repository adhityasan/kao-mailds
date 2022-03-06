import React from "react";
import { Link } from "react-router-dom";
import { PropsProvider } from "@contexts/PropsContext";
import EmailFrame from "@app_components/EmailFrame";
import EmailFramePropsModifier from "@app_components/EmailFramePropsModifier";
import "./Preview.css";

const Preview = ({ title, description, props, component }: ITemplate) => {
  return (
    <PropsProvider initialState={props}>
      <div className="preview">
        <h1 className="preview-title" title={description}>
          {title} Preview
        </h1>
        <EmailFrame emailCompoenent={component} />
        <EmailFramePropsModifier />
        <div className="actions">
          <Link to="/" className="action">
            templates
          </Link>
          <button className="action">generate .html</button>
          <button className="action">generate .pug</button>
          <button className="action">send test</button>
        </div>
      </div>
    </PropsProvider>
  );
};

export default Preview;
