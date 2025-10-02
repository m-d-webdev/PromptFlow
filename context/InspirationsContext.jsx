"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react"
const InspirationsContextPr = createContext();



export const InspirationsContext = ({ children }) => {
    const [menuOpen, setmenuOpen] = useState(false);
    const [selectedFilters, setselectedFilters] = useState({});

    return (
        <InspirationsContextPr.Provider value={{ menuOpen, setmenuOpen, selectedFilters, setselectedFilters }}>
            {children}
        </InspirationsContextPr.Provider>
    )
};


export const useInspirations = () => {
    const { menuOpen, setmenuOpen, selectedFilters, setselectedFilters } = useContext(InspirationsContextPr);

    return { menuOpen, setmenuOpen, selectedFilters, setselectedFilters };
}