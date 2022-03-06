import React, { useState } from "react";
import { usePropsContext } from "@contexts/PropsContext";
import "./EmailFramePropsModifier.css";

const EmailFramePropsModifier = () => {
  const { propsState, setPropsState } = usePropsContext();
  const [errorParse, setErrorParse] = useState<string>("");

  const onChangeState: React.ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
    const { value } = target;
    try {
      const nextStateProps = JSON.parse(value);
      setPropsState(nextStateProps);
      setErrorParse("");
    } catch (error: any) {
      setPropsState(propsState);
      setErrorParse(error?.message);
    }
  };

  return (
    <div className="props-modifier-container">
      <textarea
        defaultValue={JSON.stringify(propsState, null, 2)}
        className="props-modifier-textarea"
        onChange={onChangeState}
      />
      {errorParse && <span className="error-parse">{errorParse}</span>}
    </div>
  );
};

export default EmailFramePropsModifier;
