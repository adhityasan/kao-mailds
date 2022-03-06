import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import templates from "@templates";
import Preview from "@pages/TemplateTest";
import App from "./App";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {templates.map((template: ITemplate) => {
          const previewPath = "preview/" + template.path;
          return <Route key={template.path} path={previewPath} element={<Preview {...template} />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
