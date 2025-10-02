"use client";

import { useInspirations } from "@/context/InspirationsContext";
import PreLoadingelem from "../components/PreLoadingelem";
import FilterMenu from "./FilterMenu";
import ImageContainer from "./ImageContainer";
import Shariu from "./Shariu";
import ListImages from "./ListImages";

const users = [
    {
        user: { id: 1, name: "Liam Carter" },
        image: "/inspirationsMain/img8.jpeg"
    },
    {
        user: { id: 2, name: "Ava Johnson" },
        image: "/inspirationsMain/img5.jpeg"
    },
    {
        user: { id: 3, name: "Noah Martinez" },
        image: "/inspirationsMain/img3.jpeg"
    },
    {
        user: { id: 4, name: "Sophia Brown" },
        image: "/inspirationsMain/img1.jpg"
    },
    {
        user: { id: 5, name: "Mason Wilson" },
        image: "/inspirationsMain/img2.jpeg"
    },
    {
        user: { id: 6, name: "Isabella Davis" },
        image: "/inspirationsMain/img6.jpeg"
    },
    {
        user: { id: 7, name: "Ethan Garcia" },
        image: "/inspirationsMain/img4.jpeg"
    },
    {
        user: { id: 8, name: "Mia Anderson" },
        image: "/inspirationsMain/img8.jpg"
    },
    {
        user: { id: 1, name: "Liam Carter" },
        image: "/inspirationsMain/img8.jpeg"
    },
    {
        user: { id: 2, name: "Ava Johnson" },
        image: "/inspirationsMain/img5.jpeg"
    },
    {
        user: { id: 9, name: "Mia Anderson" },
        image: "/inspirationsMain/img7.jpeg"
    },
    {
        user: { id: 3, name: "Noah Martinez" },
        image: "/inspirationsMain/img3.jpeg"
    },
    {
        user: { id: 4, name: "Sophia Brown" },
        image: "/inspirationsMain/img1.jpg"
    },
    {
        user: { id: 5, name: "Mason Wilson" },
        image: "/inspirationsMain/img2.jpeg"
    },
];

const InspirationMainPart = () => {
    const { menuOpen } = useInspirations();


    return (
        <div className="w-full  md:mt-20 mt-10 flex   justify-start items-start">
            <FilterMenu />
            <div className={`!z-[2]  w-full duration-200  flex md:gap-4 gap-2 flex-col items-start justify-start `}>
                <Shariu />
                <ListImages />
               
            </div>
        </div>
    )
}

export default InspirationMainPart
