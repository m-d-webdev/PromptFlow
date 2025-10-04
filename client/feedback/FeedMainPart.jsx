"use client";
import { motion } from "framer-motion"
import { Star } from "lucide-react";
const reviews = [
    {
        user: {
            name: "John",
            avatar: "https://i.pinimg.com/736x/d1/81/e4/d181e44cf0a7d5f9190bc96939da4164.jpg"
        },
        rating: 5,
        review: "Amazing results! The AI creates stunning visuals in seconds."
    },
    {
        user: {
            name: "Omar",
            avatar: "https://i.pinimg.com/736x/7d/c1/37/7dc137193de6c0e778ec115acb056fe9.jpg"
        },
        rating: 4,
        review: "Great tool for quick ideas and creative images. Love it!"
    },
    {
        user: {
            name: "Sophia",
            avatar: "https://i.pinimg.com/736x/eb/eb/67/ebeb67a599498d7c4596f7b63c49777d.jpg"
        },
        rating: 5,
        review: "Beautiful AI art every time. Super easy to use!"
    },
    {
        user: {
            name: "Youssef",
            avatar: "https://i.pinimg.com/736x/25/b9/c9/25b9c99d1a7f5bcc86d09ee85d82ee02.jpg"
        },
        rating: 5,
        review: "Perfect for generating images and videos fast. So smooth!"
    },
    {
        user: {
            name: "Maya",
            avatar: "https://i.pinimg.com/736x/7d/f2/fb/7df2fbc4f4d2e2f9e48e70fa7a9999c4.jpg"
        },
        rating: 4,
        review: "Really helps me find creative prompts instantly. Great UX!"
    },
    {
        user: {
            name: "Lucas",
            avatar: "https://i.pinimg.com/736x/8d/7f/9c/8d7f9c7cba49a24381f4ef943a762dda.jpg"
        },
        rating: 5,
        review: "Top-notch quality! My go-to for AI content generation."
    }

];


const FeedMainReviewsSection = () => {
    return (
        <div className="absolute z-1 max-w-[1500] overflow-x-hidden  mb-10 w-full min-h-[700] hidden lg:flex justify-between items-center">
            <div className="flex flex-col gap-8  pl-10 relative">

                {
                    reviews.slice(0, 3).map((i, n) =>
                        <motion.div
                            key={i.user.name}
                            style={{
                                filter: `drop-shadow(0 0 2px var(--filter-color))`
                            }}
                            initial={{
                                rotate: `0deg`,
                                opacity: 0,
                                x: `-150px`,
                            }}
                            exit={{
                                rotate: `0deg`,
                                opacity: 0,
                                x: `-150px`,
                            }}
                            whileInView={{
                                rotate: `${n == 0 ? "12" : n == 1 ? '-6' : '6'}deg`,
                                opacity: 1,
                                x: `${n == 0 ? "6" : n == 1 ? '50' : '0'}px`,
                            }}
                            viewport={{
                                amount: 0.2,
                                once: false
                            }}
                            transition={{
                                duration: 1.5,
                                delay: n * .2,
                                stiffness: 100,
                                type: "spring"
                            }}
                            className={` ${n == 0 ? "" : n == 1 ? 'translate-y-[-15px]' : '6'} bg-background flex w-[180] flex-col items-center justify-center rounded-xl p-1 px-2`}
                        >
                            <img className="w-[40] h-[40] rounded-full object-cover" src={i.user.avatar} alt="" />
                            <p className="text-xs tracking-tight mt-2 text-center">
                                {i.review}
                            </p>
                            <div className="flex items-center  mt-2 opacity-50">

                                {
                                    Array(i.rating)
                                        .fill()
                                        .map(
                                            (ind, nn) => <Star className="w-4 h-4 stroke-none fill-chart-4" key={nn} />
                                        )
                                }
                            </div>
                        </motion.div>

                    )
                }
            </div>
            <div className="flex flex-col gap-6  pr-10 relative">

                {
                    reviews.slice(3, reviews.length).map((i, n) =>
                        <motion.div
                            key={i.user.name}
                            style={{
                                filter: `drop-shadow(0 0 2px var(--filter-color))`
                            }}
                            initial={{
                                rotate: `0deg`,
                                opacity: 0,
                                x: `150px`,
                            }}
                            exit={{
                                rotate: `0deg`,
                                opacity: 0,
                                x: `150px`,
                            }}
                            whileInView={{
                                rotate: `${n == 0 ? "12" : n == 1 ? '16' : '-6'}deg`,
                                opacity: 1,
                                x: `-${n == 0 ? "150" : n == 1 ? '0' : '120'}px`,
                            }}
                            viewport={{
                                amount: 0.2,
                                once: false
                            }}
                            transition={{
                                duration: 1.5,
                                delay: n * .2,
                                stiffness: 100,
                                type: "spring"
                            }}
                            className={` ${n == 0 ? "translate-y-[-15px]" : n == 1 ? '' : '6'} bg-background flex w-[180] flex-col items-center justify-center rounded-xl p-1 px-2`}
                        >
                            <img className="w-[40]  object-top h-[40] rounded-full object-cover" src={i.user.avatar} alt="" />
                            <p className="text-xs tracking-tight mt-2 text-center">
                                {i.review}
                            </p>
                            <div className="flex items-center  mt-2 opacity-50">

                                {
                                    Array(i.rating)
                                        .fill()
                                        .map(
                                            (ind, nn) => <Star className="w-4 h-4 stroke-none fill-chart-4" key={nn} />
                                        )
                                }
                            </div>
                        </motion.div>

                    )
                }
            </div>
        </div>
    )
}

export default FeedMainReviewsSection
