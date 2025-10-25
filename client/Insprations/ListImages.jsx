"use client"

import { useInspirations } from "@/context/InspirationsContext";
import ImageContainer from "./ImageContainer"
import { useEffect, useState } from "react";
import { GET_INSPIRATION } from "@/api/inspirations";
import PreLoadingelem from "../components/PreLoadingelem";

const ListImages = () => {
    const { selectedFilters } = useInspirations();

    const [isLoading, setIsloading] = useState(false);
    const [data, setdata] = useState([]);

    const handleGetData = async () => {

        let finalObject = {};

        Object.entries(selectedFilters).map(([k, v]) => {
            if (v != "Any" && v != null & v != "") {
                finalObject[k.replace(/ /g, "").toLowerCase()] = v
            }
        });

        setIsloading(true);

        GET_INSPIRATION(finalObject)
            .then(res => {
                console.log(res);
                setdata(res)
                setIsloading(false);
            })
            .then(err => {
                setIsloading(false);

            })
    }
    useEffect(() => {
        handleGetData()
    }, [selectedFilters])
    return (
        <div className={`grid max-w-[600] md:max-w-none grid-cols-2 items-start md:grid-cols-3 duration-200 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6  md:px-2 px-1 justify-center flex-wrap w-full md:gap-3 gap-2`}>

            {
                isLoading
                    ? Array(8).fill().map((e, i) => <PreLoadingelem key={i} className={"w-full opacity-50 border border-foreground/10 rounded-xl h-[350]"} />)
                    : data.map((u, i) => <ImageContainer key={i} data={u} />)
            }
        </div>
    )
}

export default ListImages
