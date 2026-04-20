'use client';

import React from 'react';
import ReachMe from './ReachMe';
import { SectionWrapper } from './SectionWrapper';
import { DiscordPresence } from './ui/discord/DiscordPresence';
import { Tip } from './ui/tip/Tip';
import { CardContainer, CardItem } from './ui/3d-card/ThreeDCard';
import Image from 'next/image';
import profilepic from '@/assets/images/pfp.jpg';
import site from '@/data/site.json';

export default function Introduction() {
  return (
    <SectionWrapper>
      <div className="flex flex-col py-6" id="home">
        <div className="flex w-full justify-between items-center gap-6 mb-12 md:mb-24">
          <ReachMe />
          <div className="relative animate-float hidden md:flex flex-col items-center mr-0 lg:mr-8 shrink-0">
            <CardContainer className="cursor-default">
              <CardItem>
                <Image
                  src={profilepic}
                  alt="profile"
                  width={400}
                  height={400}
                  sizes="(min-width: 1024px) 400px, 300px"
                  className="rounded-[3rem] select-none pointer-events-none w-[260px] h-[260px] lg:w-[400px] lg:h-[400px] object-cover"
                  draggable={false}
                  priority
                />
              </CardItem>
            </CardContainer>
          </div>
        </div>
        <div className="flex justify-between items-stretch w-full flex-col md:flex-row gap-8">
          <div className="md:w-[50%] w-full min-w-0">
            <p className="font-jetbrain mb-4 text-2xl text-sky-200/95 md:hidden">
              activity
            </p>
            <DiscordPresence
              userId={
                process.env.NEXT_PUBLIC_DISCORD_USER_ID ||
                site.discord.userId ||
                ''
              }
              username={site.discord.username}
              containerClass="bg-transparent px-0 px-2"
              activityClass="text-cyan-300"
              detailContainerClass="gap-1"
              detailsClass="text-[#ffbe6f]"
              progressBarClass="bg-[#ffbe6f]"
              stateClass="text-[#BF9DEA]"
              userClass="text-[#ffbe6f]"
              timeClass="text-green-300"
            />
          </div>
          <div className="md:w-[50%] w-full min-w-0" id="bio">
            <p className="font-jetbrain mb-4 text-2xl text-sky-200/95 md:hidden">
              bio
            </p>
            <div className="md:ml-6 relative">
              <div
                aria-hidden
                className="absolute -inset-px rounded-2xl bg-[radial-gradient(60%_120%_at_50%_0%,rgba(103,232,249,0.18),transparent_70%)] opacity-80 blur-md -z-10"
              />
              <div className="relative px-5 py-5 md:px-6 md:py-6 rounded-2xl border border-gray-200/15 bg-stone-900/40 backdrop-blur-sm">
                <div className="font-grotesk text-base md:text-lg leading-[1.75rem] text-gray-200 select-none">
                  Hey, I&apos;m Virender — a{' '}
                  <Tip name="27" tip="yes that's correct" />
                  -year-old Full Stack Engineer from India. I&apos;m currently
                  working at <Tip name="Peeker AI" tip="building cool stuff" />.
                  I love creating tools that help developers move faster and
                  build smarter. In my free time, you&apos;ll usually find me
                  watching anime, reading manga, or hitting the gym.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
