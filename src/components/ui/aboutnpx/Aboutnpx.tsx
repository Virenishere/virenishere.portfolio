"use client";

import React from "react";
import { Clipboard } from "lucide-react";
import { toast } from "sonner";

export default function Aboutnpx() {

  const handleCopy = () => {
    navigator.clipboard.writeText("npx vineetdev");

    toast.success(
      <span className="flex items-center gap-2">
        Copied to clipboard
      </span>,
      {
        description: "Make sure you run this in your terminal <3",
        className:
          "bg-gray-200/90 text-stone-800 border border-gray-200/20 rounded-xl p-4",
      }
    );
  };

  return (
    <div className="w-full max-w-full relative flex items-center justify-start h-[70px] rounded-2xl gap-8 mt-4 md:mx-3 border border-gray-200/20 bg-stone-800/20">

      {/* Left Accent Bar */}
      <div className="w-[10%] h-full bg-cyan-500 rounded-tl-2xl rounded-bl-2xl" />

      {/* Command Text */}
      <h4 className="text-xl md:text-2xl text-cyan-300 font-jetbrain">
        npx virenishere
      </h4>

      {/* Copy Button */}
      <Clipboard
        size={40}
        onClick={handleCopy}
        className="cursor-pointer text-cyan-300 p-2 absolute right-2 md:right-4 rounded-xl border border-gray-200/20 hover:bg-cyan-400/10 transition"
      />
    </div>
  );
}