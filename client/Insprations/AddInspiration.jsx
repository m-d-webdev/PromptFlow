"use client";

import { usePrompt } from "@/context/PromptContext";
import Model from "../components/Model";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clipboard, ImageUp, Send } from "lucide-react";
import { useInspirations } from "@/context/InspirationsContext";
import Select from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { ADD_INSPIRATION } from "@/api/inspirations";
import Loader from "../components/Loader";

const AddInspiration = () => {
    const { result } = usePrompt();
    const { filters } = useInspirations()
    const [image, setImage] = useState("");
    const [prompt, setprompt] = useState("")
    const [description, setdescription] = useState("")
    const [content, setcontent] = useState("")
    const [artStyle, setartStyle] = useState("")
    const [colors, setcolors] = useState("")
    const [moodTheme, setmoodTheme] = useState("");
    const [isLoading, setisLoading] = useState(false);

    const handleSetVa = (funname, val) => {
        console.log(funname, val);

        if (funname == "content") setcontent(val);
        if (funname == "artStyle") setartStyle(val);
        if (funname == "colors") setcolors(val);
        if (funname == "moodTheme") setmoodTheme(val);
    }

    const handelSubmit = async () => {
        setisLoading(true)
        const FORM_DATA = new FormData();

        FORM_DATA.append("image", image);
        FORM_DATA.append("prompt", prompt);
        FORM_DATA.append("description", description);
        FORM_DATA.append("content", content);
        FORM_DATA.append("artStyle", artStyle);
        FORM_DATA.append("colors", colors);
        FORM_DATA.append("moodTheme", moodTheme);

        await ADD_INSPIRATION(FORM_DATA)
            .then(res => {
                console.log(res);
                Router.back();
            })
            .catch(err => {
                console.error(err);
            })

        setisLoading(false)
    }
    const Router = useRouter()
    return (
        <>
            <Model className={"bg-background p-3 px-6 rounded-md md:w-[700] "}  >
                <div className="w-full gap-4 mb-8 flex justify-between items-center">
                    <div className="">
                        <h1 className="font-semibold text-xl mb-2 tracking-tighter ">Add Inspiration</h1>
                        <p className="text-destructive opacity-70 tracking-tight">Currently, only image uploads are allowed </p>
                    </div>
                    <div className="flex gap-2 items-center">

                        <Button
                            onClick={() => Router.back()}
                            variant={"outline"}>
                            Cancel
                        </Button>
                        <Button
                            disabled={
                                image == "" ||
                                prompt == "" ||
                                content == ""
                            }
                            onClick={handelSubmit}
                        >
                            Submit
                            {
                                isLoading
                                    ? <Loader />
                                    : <Send />
                            }
                        </Button>
                    </div>
                </div>
                <div className="flex w-full gap-6 items-start">
                    <div className="w-6/12">
                        <label htmlFor="promptId" className="text-nowrap tracking-tighter font-medium w-full flex items-center gap-4 px-1">Enter prompt <span className="w-full bg-foreground/10 p-[1px]"></span></label>
                        <div id="promptId" className=" flex mt-1 flex-col items-center justify-center relative   w-full h-[150]  ">
                            <div className="flex z-[3] top-0 rtl:left-0 ltr:right-0 absolute w-full gap-2 justify-end px-2 pt-1 items-center ">
                                <Button
                                    onClick={async () => {
                                        let text = await navigator.clipboard.readText();
                                        setprompt(text)
                                    }}
                                    variant={"secondary"} className={"text-xs border hover:opacity-100 p-2 bg-transparent opacity-60 border-foreground/10 rounded-sm"}><Clipboard />
                                    Past
                                </Button>
                            </div>
                            <textarea
                                value={prompt}
                                onChange={e => setprompt(e.target.value)}
                                placeholder="Enter the promt"
                                className="!z-[2]  scrl_none w-full pt-8  min-h-full  resize-none  p-2 font-medium tracking-tight   outline-chart-1/20 rounded-xl border border-foreground/20" >
                            </textarea>

                        </div>
                        <label htmlFor="promptId" className="text-nowrap tracking-tighter font-medium w-full flex items-center gap-4  mt-4 px-1">Name or  description <span className="w-full bg-foreground/10 p-[1px]"></span></label>
                        <div id="promptId" className=" flex mt-1 flex-col items-center justify-center relative   w-full h-[80]  ">
                            <div className="flex z-[3] top-0 rtl:left-0 ltr:right-0 absolute w-full gap-2 justify-end px-2 pt-1 items-center ">
                                <Button
                                    onClick={async () => {
                                        let text = await navigator.clipboard.readText();
                                        setdescription(text)
                                    }}
                                    variant={"secondary"} className={"text-xs border hover:opacity-100 p-2 bg-transparent opacity-60 border-foreground/10 rounded-sm"}><Clipboard />
                                    Past
                                </Button>
                            </div>
                            <textarea
                                value={description}
                                onChange={e => setdescription(e.target.value)}
                                placeholder="Enter the description"
                                className="!z-[2]  scrl_none w-full pt-8  min-h-full  resize-none  p-2 font-medium tracking-tight   outline-chart-1/20 rounded-xl border border-foreground/20" >
                            </textarea>

                        </div>

                    </div>

                    <div className=" w-6/12">
                        <label htmlFor="" className="text-nowrap tracking-tighter font-medium w-full flex items-center gap-4 px-1">Upload result <span className="w-full bg-foreground/10 p-[1px]"></span></label>

                        <input
                            onChange={e => {
                                setImage(e.target.files[0])
                            }
                            }
                            type="file" accept="image/*" name="inpData" id="inpData" className="hidden" />

                        {
                            image
                                ?
                                <>
                                    <label htmlFor="inpData" className="mt-1   rounded-xl w-full flex justify-center items-center ">
                                        <img className="w-full rounded-xl max-h-[400] object-cover " src={URL.createObjectURL(image)} alt="" />
                                    </label>

                                </>
                                : <>
                                    <div className="mt-1  border border-foreground/40 opacity-50 rounded-xl w-full flex justify-center items-center ">
                                        <label htmlFor="inpData" className="cursor-pointer flex-col w-full !h-[270] flex justify-center items-center ">
                                            <ImageUp className="w-20 h-20  opacity-80 stroke-1" />
                                            <p className="text-sm font-medium  opacity-80">FIle type allowed : png, jpg, jpeg ...</p>
                                        </label>
                                    </div>
                                </>
                        }

                    </div>
                </div>
                <label htmlFor="promptId" className="text-nowrap tracking-tighter font-medium w-full flex items-center gap-4  mt-5 px-1">Extra details<span className="w-full bg-foreground/10 p-[1px]"></span></label>
                <div className="w-full  mt-1 gap-1 justify-evenly  flex flex-wrap">

                    {
                        filters
                            ?.filter(f => f.category != "Popularity & Time")
                            ?.map(f => <Select
                                key={f.category}
                                label={f.category}
                                onChange={(vl) => handleSetVa(f.funName, vl)}
                                icon={f.icon}
                                parentClassName="mt-1 !max-w-[48%]"
                                list={f.options?.filter(ite => ite != "Any")?.map(ite => ({
                                    value: ite?.replace(/ /g, "-")?.toLowerCase(),
                                    innerText: ite
                                }))} />)

                    }
                </div>
            </Model >
        </>
    )
}

export default AddInspiration
