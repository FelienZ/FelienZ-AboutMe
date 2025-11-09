'use client'

import { Button } from "@/components/ui/button";
import { CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
export default function Mainpage(){
    const [toggleMusic, setToggleMusic] = useState<boolean>(false)
    const [toggleList, setToggleList] = useState<boolean>(false)
    return(
        <section>
            <div className="grid grid-cols-[0.8fr_0.2fr] gap-3">
                <div className="image1 flex relative h-[40vh] p-3 drop-shadow-sm">
                    <Image src="/images/takina-inoue.jpg" fill  className="object-cover rounded-sm" alt=""/>
                    <div className="text-neutral-950 flex w-full items-center justify-between relative self-end z-20">
                        <div className="flex flex-col gap-3">
                            <p className="font-bold text-xl">{'Takina Inoue'.toUpperCase()}</p>
                            <p>Inikah My Only...</p>
                        </div>
                        <Button className="bg-neutral-800 border border-neutral-400"><CircleArrowOutUpRight/></Button>
                    </div>
                </div>
                <div className="image2 grid grid-rows-2 gap-2">
                    <div className="relative drop-shadow-sm flex w-full items-center justify-center" onMouseEnter={()=>setToggleMusic(!toggleMusic)} onMouseLeave={()=>setToggleMusic(!toggleMusic)}>
                        <Image src="/images/Musics.jpg" className="rounded-sm opacity-70" fill alt=""/>
                        <div className={`${toggleMusic ? 'flex' : 'hidden'} backdrop-blur-lg size-full bg-neutral-900/30 rounded-sm text-white justify-center items-center flex-col gap-3 relative z-30`}>
                            <p>My Fav Song</p>
                        </div>
                    </div>
                    <div className="relative drop-shadow-sm flex w-full items-center justify-center" onMouseEnter={()=>setToggleList(!toggleList)} onMouseLeave={()=>setToggleList(!toggleList)}>
                        <Image src="/images/listnimek.jpg" className="rounded-sm" fill alt=""/>
                        <div className={`${toggleList ? 'flex' : 'hidden'} backdrop-blur-lg size-full bg-neutral-900/20 rounded-sm text-white justify-center items-center flex-col gap-3 relative z-30`}>
                            <p>Anime Playlist</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}