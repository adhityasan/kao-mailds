import React, { createContext, useState, useCallback, useContext, ReactNode } from "react";

interface IAppContext {
  [key: string]: any;
}

interface IAppProviderProps {
  children: ReactNode;
  initialState?: object;
}

const AppContext = createContext({});
const { Provider } = AppContext;

export const Consumer = AppContext.Consumer;

export const AppProvider = ({ children, initialState = {} }: IAppProviderProps) => {
  const [state, setState] = useState(initialState);

  const setAppState = useCallback((newState, preUpdate) => {
    setState((prevState) => {
      if (preUpdate && preUpdate.call) {
        preUpdate();
      }
      return { ...prevState, ...newState };
    });
  }, []);

  const updateAppState = useCallback((updateFunction) => setState(updateFunction), []);

  const resetAppState = useCallback(() => setState(initialState), [initialState]);

  const appContextValue = {
    appState: { ...initialState, ...state },
    setAppState,
    updateAppState,
    resetAppState,
  };

  return <Provider value={appContextValue}>{children}</Provider>;
};

export const useAppContext = (): IAppContext => useContext(AppContext);

export default AppContext;
