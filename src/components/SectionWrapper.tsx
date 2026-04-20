import React from 'react';

type SectionWrapperProps = {
  children: React.ReactNode;
};

export const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <section className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-[1050px] overflow-x-clip">
      {children}
    </section>
  );
};
