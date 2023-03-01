import { createContext } from "react";
import { useState } from "react";

export const DocsContext = createContext({});

const DocsContextProvider = ({ children }) => {

const [docs, setDocs] = useState([]);

    return (
    <DocsContext.Provider value={docs}>
        {children}
    </DocsContext.Provider>
    )
}

export default DocsContextProvider