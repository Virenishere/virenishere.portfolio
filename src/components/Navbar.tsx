'use client';
interface InavMenu {
  label: string;
  targetId: string;
}
const navMenu: InavMenu[] = [
  { label: '/', targetId: '' },
  { label: 'work', targetId: '' },
  { label: 'projects', targetId: '' },
  { label: 'blogs', targetId: '' },
];

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center pt-6 pb-10">
      <ul className="flex flex-row bg-transparent shadow-lg ring-1 ring-white/5  gap-10 text-2xl px-16 py-6 font-semibold rounded-full text-white">
        {navMenu.map(({ label, targetId }) => (
          <li key={targetId}>
            <a href={`#${targetId}`}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
