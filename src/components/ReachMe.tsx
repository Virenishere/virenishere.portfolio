import { Github, Mail, Twitter, User } from "lucide-react";
import React from "react";
import Aboutnpx from "./ui/aboutnpx/Aboutnpx";

export default function ReachMe(){
    return(
        <div className="flex flex-col">
            <div className="flex flex-row gap-6">
            <Github />
            <Mail />
            <Twitter />
            <User />
            </div>
            <div>
                <Aboutnpx />
            </div>
        </div>
    )
}