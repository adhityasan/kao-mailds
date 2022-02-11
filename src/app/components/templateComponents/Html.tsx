import React from "react";

type IHtmlProps = React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;

/**
 * Html Component usage is only for wrapping templates component on renderStatic
 * You should not use this component in templates
 * @param lang is html lang attribute, by default it will be "en"
 */
const Html = ({ children, lang = "en" }: IHtmlProps) => <html lang={lang}>{children}</html>;

export default Html;
