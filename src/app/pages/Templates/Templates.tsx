import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Templates.css";

interface ITemplatesProps {
  templates: ITemplate[];
}

const Templates = ({ templates }: ITemplatesProps) => {
  const [viewedTemplates, setViewedTemplates] = useState<ITemplate[]>(templates);

  const onSearch: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value = "" } = target;
    if (value) {
      const searchRegex = new RegExp(value, "gi");
      const searchedTemplates = templates.filter(({ title }) => title.match(searchRegex));
      setViewedTemplates(searchedTemplates);
    } else {
      setViewedTemplates(templates);
    }
  };

  useEffect(() => {
    setViewedTemplates(templates);
  }, [templates]);

  return (
    <>
      <div className="template-header">
        <h1 className="header-title">Email Templates</h1>
        <input className="header-search" placeholder="Search Title..." onChange={onSearch} />
      </div>
      <div className="template-content">
        {viewedTemplates.map(({ path, description = "No description", title }) => (
          <div key={path} className="card">
            <div className="card-content">
              <div className="card-icon-box">
                <img className="card-icon" src="email.png" />
              </div>
              <h3 title={title} className="card-title">
                {title}
              </h3>
              <p title={description} className="card-description">
                {description}
              </p>
            </div>
            <div className="card-actions">
              <Link to={"preview/" + path} className="card-btn btn-preview">
                preview
              </Link>
              <button className="card-btn card-btn-html">html</button>
              <button className="card-btn card-btn-pug">pug</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Templates;
