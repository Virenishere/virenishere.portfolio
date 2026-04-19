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
      <footer className="text-white flex flex-col gap-4 md:gap-0 md:flex-row justify-between border-t-[1px] pt-6 md:py-8 mt-12 border-cyan-200/10 border-solid rounded-md">
        <div className="flex justify-center items-center gap-12">
          {FooterLinks.map((link, index) => (
            <Tip tip={link.tip} key={index}>
              <Link href={link.link}>{link.icon}</Link>
            </Tip>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <div className="text-foreground font-grotesk text-xl">
            Made with <Tip tip="by virender">{'<'}3</Tip>, Thank You!
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
};
