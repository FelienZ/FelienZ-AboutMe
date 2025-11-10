import { featuredData } from "@/utils/featured";
import { BookmarkCheck } from "lucide-react";
import Image from "next/image";

export default function Featuredsection(){
    return(
        <section className="flex flex-col gap-3  bg-white rounded-md drop-shadow-sm p-4 overflow-x-auto">
            <p className="font-bold flex items-center gap-2"><BookmarkCheck/> Highlight Project</p>
            <div className="grid grid-cols-4 gap-8 min-w-screen">
              {featuredData.map((i, idx)=> 
                <div key={idx} className="h-[25vh] flex relative p-3 bg-white hover:bg-neutral-200 transition-colors duration-200 rounded-md drop-shadow-sm">
                    <Image src={i.imgUrl} fill  className="object-cover rounded-sm" alt=""/>
                    <div className="flex w-full items-center justify-between relative self-end z-20">
                        <p className="font-bold text-neutral-100 bg-neutral-500 px-2 rounded-full">{i.title}</p>
                    </div>
                </div>
              )}  
            </div>
        </section>
    )
}