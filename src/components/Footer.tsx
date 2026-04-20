'use client';

import { SectionWrapper } from './SectionWrapper';
import { Github, Mail, MessageCircle } from 'lucide-react';
import { Tip } from './ui/tip/Tip';
import Link from 'next/link';

const FooterLinks = [
  {
    icon: <Mail className="w-6 h-6" />,
    link: 'mailto:virender288@gmail.com',
    tip: 'Contact me',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    link: 'https://x.com/virentwt',
    tip: 'virenishere',
  },
  {
    icon: <Github className="w-6 h-6" />,
    link: 'https://github.com/virenishere',
    tip: 'Check out my Github',
  },
];

export const Footer = () => {
  return (
    <SectionWrapper>
      <footer className="text-white flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center border-t-[1px] pt-6 pb-20 md:pb-8 md:py-8 mt-12 border-cyan-200/10 border-solid rounded-md">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {FooterLinks.map((link, index) => (
            <Tip tip={link.tip} key={index}>
              <Link href={link.link}>{link.icon}</Link>
            </Tip>
          ))}
        </div>
        <div className="flex justify-center items-center text-center">
          <div className="text-foreground font-grotesk text-base sm:text-lg md:text-xl">
            Made with <Tip tip="by virender">{'<'}3</Tip>, Thank You!
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
};
