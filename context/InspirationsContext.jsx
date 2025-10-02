"use client";
import { Brush, PaintBucket, PersonStanding, Smile, TrendingUpDown } from "lucide-react";
import { createContext, useContext, useEffect, useRef, useState } from "react"
const InspirationsContextPr = createContext();

export const InspirationsContext = ({ children }) => {
    const [menuOpen, setmenuOpen] = useState(false);
    const [selectedFilters, setselectedFilters] = useState({});
    const [likedPosts, setlikedPosts] = useState([]);





    const filters = [
        {
            funName: "content",
            icon: <PersonStanding className="w-5 h-5" />,
            category: "Content",
            options: ["Any", "Characters", "Scenes", "Objects", "Animals"]
        },
        {
            funName: "artStyle",
            icon: <Brush className="w-5 h-5" />,
            category: "Art Style",
            options: ["Any", "Realistic", "Cartoon", "Anime", "3D Render", "Oil Painting", "Pixel Art", "Minimalist"]
        },
        {
            funName: "colors",
            icon: <PaintBucket className="w-5 h-5" />,
            category: "Colors",
            options: ["Any", "Black & White", "Warm Colors", "Cool Colors", "Pastel", "Neon"]
        },
        {
            icon: <TrendingUpDown className="w-5 h-5" />,
            category: "Popularity & Time",
            options: ["Any", "Most Viewed", "Most Liked", "Newest", "Oldest"]
        },
        {
            funName: "moodTheme",
            icon: <Smile className="w-5 h-5" />,
            category: "Mood & Theme",
            options: ["Any", "Romantic", "Dark", "Funny", "Futuristic", "Nature"]
        }
    ];

    return (
        <InspirationsContextPr.Provider value={{ menuOpen, setmenuOpen, selectedFilters, setselectedFilters, filters, likedPosts, setlikedPosts }}>
            {children}
        </InspirationsContextPr.Provider>
    )
};


export const useInspirations = () => {
    const { menuOpen, setmenuOpen, selectedFilters, setselectedFilters, filters, likedPosts, setlikedPosts } = useContext(InspirationsContextPr);

    return { menuOpen, setmenuOpen, selectedFilters, setselectedFilters, filters, likedPosts, setlikedPosts };
}