import React from 'react';
import ProfilePic from './ui/profilepic/ProfilePic';
import AboutMe from '@/constants/aboutme';
import ReachMe from './ReachMe';
import DiscordUI from './DiscordUI';

export default function Introduction() {
  return (
    <section 
    id='home'
    className="min-h-screen flex flex-row px-24 items-center justify-around text-white">
      <div className="flex flex-col">
        <h1 className="relative font-grotesk font-bold text-3xl md:text-8xl text-white before:content-['///'] before:absolute before:block before:left-0 before:top-0 before:text-[175px] before:font-[700] before:text-white/25 before:tracking-[-0.1em] before:-translate-x-full before:-translate-y-1/4 before:pointer-events-none">
          {AboutMe.FirstName}
        </h1>

        <p className="font-jetbrains text-white">{AboutMe.Role}</p>
        <h2>{AboutMe.ShortIntro}</h2>
        <ReachMe />
        <DiscordUI />
      </div>
      <div className="flex flex-col items-center pt-10 justify-center text-white ">
        <ProfilePic />

        <div className="flex items-center justify-center w-1/2">
          {AboutMe.Info}
        </div>
      </div>
    </section>
  );
}
