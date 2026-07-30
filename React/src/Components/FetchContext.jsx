import { createContext } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    return (
        <DataContext.Provider>
            {children}
        </DataContext.Provider>
    )
}