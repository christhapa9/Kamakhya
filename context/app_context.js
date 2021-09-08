import { createContext, useState } from "react";

export const AppContext = createContext({});

const AppContextComponent = (props) => {
  const [mode, setMode] = useState(false);

  const checkMode = async () => {
    if (err) {
      setMode(false);
    } else {
      if (mode === true) {
        setMode(true);
      } else {
        setMode(false);
      }
    }
  };

  const stateValue = {
    mode,
    setMode,
    checkMode,
  };

  return (
    <AppContext.Provider value={stateValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextComponent;
