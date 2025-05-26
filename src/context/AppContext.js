import { createContext, useState } from "react";

// The const name can be used to create multiple context types - eg App meaning that this is App wide varialbe
export const AppContext = createContext();

// Create a context provider component
export function AppProvider({ children }) {
  const [isMUI, setMUI] = useState(true);

  const toggleVersion = () => setMUI((prev) => !prev);

  return (
    // the value and function are both passed as properties, value can be fetched from any child element with useContext
    // value can be updated from children by with function callback
    <AppContext.Provider value={{ isMUI, toggleVersion }}>
      {children}
    </AppContext.Provider>
  );
}

// export { AppContext, AppProvider };
