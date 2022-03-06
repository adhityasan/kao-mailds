import React from "react";
import { AppProvider } from "@contexts/AppContext";
import templates from "@templates";
import TemplatesList from "@pages/Templates";
import "./app.css";

const App = () => {
  return (
    <AppProvider>
      <TemplatesList templates={templates} />
    </AppProvider>
  );
};

export default App;
