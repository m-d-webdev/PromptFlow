"use client";

import { useInspirations } from "@/context/InspirationsContext";
import PreLoadingelem from "../components/PreLoadingelem";
import FilterMenu from "./FilterMenu";
import ImageContainer from "./ImageContainer";
import Shariu from "./Shariu";

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
    const { menuOpen } = useInspirations()
    return (
        <div className="w-full  mt-20 flex   justify-start items-start">
            <FilterMenu />
            <div className={`!z-[2]  w-full duration-200  flex gap-4 flex-col items-start justify-start `}>
                <Shariu />
                <div className={`grid max-w-[600] md:max-w-none grid-cols-2 items-start md:grid-cols-3 duration-200 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6  px-2 justify-center flex-wrap w-full gap-4`}>
                    {/* {Array(8).fill().map(e => <PreLoadingelem className={"w-full border border-foreground/10 rounded-xl h-[350]"} />)} */}
                    {
                        users.map(u => <ImageContainer key={u.user.id} data={u} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default InspirationMainPart
