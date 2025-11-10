import { Button } from "@/components/ui/button";
import { statsData } from "@/utils/stats";
import { ChartLine, CircleArrowOutUpRight } from "lucide-react";

export default function Statsection(){
    return (
        <section className="flex flex-col gap-3  bg-white rounded-md drop-shadow-sm p-4">
            <p className="font-bold flex items-center gap-2"><ChartLine/> My Stats</p>
            <div className="grid grid-cols-4 gap-3">
              {statsData.map((i, idx)=> 
                <div key={idx} className="flex flex-col justify-between h-[15vh] p-3 bg-white hover:bg-neutral-200 transition-colors duration-200 rounded-md drop-shadow-sm">
                    <div className="flex items-center gap-3">
                        {i.icon}
                        <p className="font-bold">{i.title}</p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <p>{i.description}</p>
                        <Button className="bg-neutral-400 border size-8 hover:bg-neutral-800 border-neutral-600"><CircleArrowOutUpRight/></Button>
                    </div>
                </div>
              )}  
            </div>
        </section>
    )
}