import { createContext } from "react";
import { useState, useEffect } from "react";

export const DocsContext = createContext({});

const DocsContextProvider = ({ children }) => {
  const [checkedEvery, setCheckedEvery] = useState(false)

  const savedLog = sessionStorage.getItem('logged')
  const [logged, setLogged] = useState(savedLog ? JSON.parse(savedLog) : false)

  useEffect(() => {
    sessionStorage.setItem('logged', JSON.stringify(logged))
  }, [logged]);

  // const [docs, setDocs] = useState([]);

  return (
    <DocsContext.Provider
      value={{ checkedEvery, setCheckedEvery, logged, setLogged }}
    >
      {children}
    </DocsContext.Provider>
  );
};

export default DocsContextProvider;
