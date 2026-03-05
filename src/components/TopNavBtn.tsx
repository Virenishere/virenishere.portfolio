import Link from 'next/link';
import { Button } from './ui/button';
import { ModeToggle } from './ModeToggle';

const TopNavBtn = () => {
  return (
    <>
      <div className="fixed top-6 left-16 z-50">
        <Link href="/">
          <Button className="h-14 w-14 rounded-full backdrop-blur-md bg-white/20 shadow-lg ring-1 ring-white/5 text-white hover:bg-white/30 transition-all duration-300 border-white/10 font-bold text-2xl">
            V
          </Button>
        </Link>
      </div>

      <div className="fixed top-6 right-16 z-50">
        <ModeToggle />
      </div>
    </>
  );
};

export default TopNavBtn;
