import { createContext } from "react";
import { useState } from "react";

export const DocsContext = createContext({});


const DocsContextProvider = ({ children }) => {

const [checkedEvery, setCheckedEvery] = useState(false);
const [docs, setDocs] = useState([]);

    return (
    <DocsContext.Provider value={{checkedEvery,setCheckedEvery}}>
        {children}
    </DocsContext.Provider>
    )
}

export default DocsContextProvider