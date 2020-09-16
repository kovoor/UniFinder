import React, { createContext, useState, useContext } from "react";

export const UniContext = createContext();

export const UniProvider = ({ children }) => {
    const [uni, setUni] = useState({});

    const values = { uni, setUni }
    
    return (
        <UniContext.Provider value={values}>
            {children}
        </UniContext.Provider>
    )
}

const UniConsumer = UniContext.Consumer;

export default UniProvider;
export { UniConsumer };

