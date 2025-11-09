import { LucideProps } from "lucide-react";
import React, { ForwardRefExoticComponent } from "react";

type sidebarIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref">& React.RefAttributes<SVGSVGElement>>
export interface SidebarItem{
    title: string,
    url: string,
    icon: sidebarIcon
}