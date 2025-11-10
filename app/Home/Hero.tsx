import { Button } from "@/components/ui/button";
import { CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import "../style.css";
export default function Herosection(){
    const [toggleMusic, setToggleMusic] = useState(false)
    const [toggleList, setToggleList] = useState(false)
    return(
        <section>
            <div className="grid grid-cols-[0.8fr_0.2fr] gap-3">
                <div className="image1 flex relative h-[40vh] p-3 drop-shadow-sm">
                    <Image src="/images/takina-inoue.jpg" fill  className="object-cover rounded-sm" alt=""/>
                    <div className="text-neutral-950 flex w-full items-center justify-between relative self-end z-20">
                        <div className="flex flex-col gap-3">
                            <div className="typewriter">
                                <p className={`font-bold text-xl`}>{"Hello World! I am Rajab".toUpperCase()}</p>
                            </div>
                            <p>This Background is My Only Btw.</p>
                        </div>
                        <Button className="bg-neutral-800 border border-neutral-400"><CircleArrowOutUpRight/></Button>
                    </div>
                </div>
                <div className="image2 grid grid-rows-2 gap-2">
                    <div className="relative drop-shadow-sm flex w-full items-center justify-center" onMouseEnter={()=>setToggleMusic(true)} onMouseLeave={()=>setToggleMusic(false)}>
                        <Image src="/images/Musics.jpg" className="rounded-sm opacity-70" fill alt=""/>
                        <div className={`flex ${toggleMusic ? 'opacity-100' : 'opacity-0 pointer-events-none'} absolute inset-0 backdrop-blur-lg size-full bg-neutral-900/30 rounded-sm text-white justify-center items-center flex-col gap-3 transition-all duration-300 ease-in-out z-30`}>
                            <p>My Fav Song</p>
                        </div>
                    </div>
                    <div className="relative drop-shadow-sm flex w-full items-center justify-center" onMouseEnter={()=>setToggleList(true)} onMouseLeave={()=>setToggleList(false)}>
                        <Image src="/images/listnimek.jpg" className="rounded-sm" fill alt=""/>
                        <div className={`flex ${toggleList ? 'opacity-100' : 'opacity-0 pointer-events-none'} absolute inset-0 backdrop-blur-lg size-full bg-neutral-900/20 rounded-sm text-white justify-center items-center flex-col gap-3 transition-all duration-300 ease-in-out z-30`}>
                            <p>Anime Playlist</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}