import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

const TopNavBtn = () => {
  
  return (
    <div className="flex justify-between items-center pt-6 pb-10 px-16 relative z-50">
      <Link href="/">
        <Button className="rounded-full font-bold text-xl">V</Button>
      </Link>
      <ModeToggle />
    </div>
  )
};

export default TopNavBtn;
