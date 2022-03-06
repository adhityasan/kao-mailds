import React, { createContext, useState, useCallback, useContext, ReactNode } from "react";

interface IPropsContext {
  [key: string]: any;
}

interface IPropsProviderProps {
  children: ReactNode;
  initialState?: object;
}

const PropsContext = createContext({});
const { Provider } = PropsContext;

export const Consumer = PropsContext.Consumer;

export const PropsProvider = ({ children, initialState = {} }: IPropsProviderProps) => {
  const [state, setState] = useState(initialState);

  const setPropsState = useCallback((newState, preUpdate) => {
    setState((prevState) => {
      if (preUpdate && preUpdate.call) {
        preUpdate();
      }
      return { ...prevState, ...newState };
    });
  }, []);

  const updatePropsState = useCallback((updateFunction) => setState(updateFunction), []);

  const resetPropsState = useCallback(() => setState(initialState), [initialState]);

  const propsContextValue = {
    propsState: { ...initialState, ...state },
    setPropsState,
    updatePropsState,
    resetPropsState,
  };

  return <Provider value={propsContextValue}>{children}</Provider>;
};

export const usePropsContext = (): IPropsContext => useContext(PropsContext);

export default PropsContext;
