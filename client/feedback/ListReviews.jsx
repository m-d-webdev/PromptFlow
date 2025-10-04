"use client"

import { DecimalsArrowRight, ListChevronsUpDown, Search } from "lucide-react";
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";
import PreLoadingelem from "../components/PreLoadingelem";

const reviews = [
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "John",
            avatar: "https://i.pinimg.com/736x/d1/81/e4/d181e44cf0a7d5f9190bc96939da4164.jpg"
        },
        rating: 5,
        review: "Amazing results! The AI creates stunning visuals in seconds."
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Omar",
            avatar: "https://i.pinimg.com/736x/7d/c1/37/7dc137193de6c0e778ec115acb056fe9.jpg"
        },
        rating: 4,
        review: "Great tool for quick ideas and creative images. Love it!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Sophia",
            avatar: "https://i.pinimg.com/736x/eb/eb/67/ebeb67a599498d7c4596f7b63c49777d.jpg"
        },
        rating: 5,
        review: "Beautiful AI art every time. Super easy to use!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Youssef",
            avatar: "https://i.pinimg.com/736x/25/b9/c9/25b9c99d1a7f5bcc86d09ee85d82ee02.jpg"
        },
        rating: 5,
        review: "Perfect for generating images and videos fast. So smooth!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Maya",
            avatar: "https://i.pinimg.com/736x/7d/f2/fb/7df2fbc4f4d2e2f9e48e70fa7a9999c4.jpg"
        },
        rating: 4,
        review: "Really helps me find creative prompts instantly. Great UX!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Lucas",
            avatar: "https://i.pinimg.com/736x/8d/7f/9c/8d7f9c7cba49a24381f4ef943a762dda.jpg"
        },
        rating: 5,
        review: "Top-notch quality! My go-to for AI content generation."
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "John",
            avatar: "https://i.pinimg.com/736x/d1/81/e4/d181e44cf0a7d5f9190bc96939da4164.jpg"
        },
        rating: 5,
        review: "Amazing results! The AI creates stunning visuals in seconds."
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Omar",
            avatar: "https://i.pinimg.com/736x/7d/c1/37/7dc137193de6c0e778ec115acb056fe9.jpg"
        },
        rating: 4,
        review: "Great tool for quick ideas and creative images. Love it!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Sophia",
            avatar: "https://i.pinimg.com/736x/eb/eb/67/ebeb67a599498d7c4596f7b63c49777d.jpg"
        },
        rating: 5,
        review: "Beautiful AI art every time. Super easy to use!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Youssef",
            avatar: "https://i.pinimg.com/736x/25/b9/c9/25b9c99d1a7f5bcc86d09ee85d82ee02.jpg"
        },
        rating: 5,
        review: "Perfect for generating images and videos fast. So smooth!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Maya",
            avatar: "https://i.pinimg.com/736x/7d/f2/fb/7df2fbc4f4d2e2f9e48e70fa7a9999c4.jpg"
        },
        rating: 4,
        review: "Really helps me find creative prompts instantly. Great UX!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Lucas",
            avatar: "https://i.pinimg.com/736x/8d/7f/9c/8d7f9c7cba49a24381f4ef943a762dda.jpg"
        },
        rating: 5,
        review: "Top-notch quality! My go-to for AI content generation."
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "John",
            avatar: "https://i.pinimg.com/736x/d1/81/e4/d181e44cf0a7d5f9190bc96939da4164.jpg"
        },
        rating: 5,
        review: "Amazing results! The AI creates stunning visuals in seconds."
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Omar",
            avatar: "https://i.pinimg.com/736x/7d/c1/37/7dc137193de6c0e778ec115acb056fe9.jpg"
        },
        rating: 4,
        review: "Great tool for quick ideas and creative images. Love it!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Sophia",
            avatar: "https://i.pinimg.com/736x/eb/eb/67/ebeb67a599498d7c4596f7b63c49777d.jpg"
        },
        rating: 5,
        review: "Beautiful AI art every time. Super easy to use!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Youssef",
            avatar: "https://i.pinimg.com/736x/25/b9/c9/25b9c99d1a7f5bcc86d09ee85d82ee02.jpg"
        },
        rating: 5,
        review: "Perfect for generating images and videos fast. So smooth!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Maya",
            avatar: "https://i.pinimg.com/736x/7d/f2/fb/7df2fbc4f4d2e2f9e48e70fa7a9999c4.jpg"
        },
        rating: 4,
        review: "Really helps me find creative prompts instantly. Great UX!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Lucas",
            avatar: "https://i.pinimg.com/736x/8d/7f/9c/8d7f9c7cba49a24381f4ef943a762dda.jpg"
        },
        rating: 5,
        review: "Top-notch quality! My go-to for AI content generation."
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "John",
            avatar: "https://i.pinimg.com/736x/d1/81/e4/d181e44cf0a7d5f9190bc96939da4164.jpg"
        },
        rating: 5,
        review: "Amazing results! The AI creates stunning visuals in seconds."
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Omar",
            avatar: "https://i.pinimg.com/736x/7d/c1/37/7dc137193de6c0e778ec115acb056fe9.jpg"
        },
        rating: 4,
        review: "Great tool for quick ideas and creative images. Love it!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Sophia",
            avatar: "https://i.pinimg.com/736x/eb/eb/67/ebeb67a599498d7c4596f7b63c49777d.jpg"
        },
        rating: 5,
        review: "Beautiful AI art every time. Super easy to use!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Youssef",
            avatar: "https://i.pinimg.com/736x/25/b9/c9/25b9c99d1a7f5bcc86d09ee85d82ee02.jpg"
        },
        rating: 5,
        review: "Perfect for generating images and videos fast. So smooth!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Maya",
            avatar: "https://i.pinimg.com/736x/7d/f2/fb/7df2fbc4f4d2e2f9e48e70fa7a9999c4.jpg"
        },
        rating: 4,
        review: "Really helps me find creative prompts instantly. Great UX!"
    },
    {
        likesCount: Math.ceil(Math.random() * 100),
        user: {
            name: "Lucas",
            avatar: "https://i.pinimg.com/736x/8d/7f/9c/8d7f9c7cba49a24381f4ef943a762dda.jpg"
        },
        rating: 5,
        review: "Top-notch quality! My go-to for AI content generation."
    },

];

const ListReviews = () => {
    const [isLoading, setloading] = useState(true);
    useEffect(() => {
        const tim = setTimeout(() => {
            setloading(false)
        }, 2000);
        return () => {
            clearTimeout(tim)
        }
    }, [])
    return (
        <div className="min-h-screen  pb-20 flex flex-col items-center  w-full mt-10">
            <div className="w-full flex items-center justify-center flex-col max-w-[1200] p-2 mb-8">
                <h2 className="font-medium tracking-tighter">Find honest reviews about what you’re looking for</h2>
                <div
                    style={{
                        filter: `drop-shadow(0 0 1px var(--filter-color))`
                    }}
                    className="flex items-center gap-3 mt-2 w-full max-w-[400] bg-background p-2 rounded-sm">
                    <Search className="w-5 h-5" />
                    <input placeholder="Search ..." className="border-none outline-none w-full font-medium tracking-tight" />
                </div>
            </div>
            <div className="grid w-full max-w-[1200] grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-3">

                {
                    isLoading
                        ? Array(7).fill().map((r, i) => <PreLoadingelem key={i} className={"h-[250]"} />)
                        : reviews.map(r => <ReviewCard key={r.user.name} data={r} />)
                }
            </div>
            <div className="w-full flex items-center justify-center flex-col max-w-[1200] p-2 mt-8">
                <button className="opacity-80  justify-center border font-medium tracking-tighter bg-background border-foreground/20 rounded-md p-2 px-6 hover:opacity-100 duration-200 flex items-center gap-2 cursor-pointer ">Load more  <ListChevronsUpDown className="w-4 h-4" /></button>

            </div>
        </div>
    )
}

export default ListReviews
