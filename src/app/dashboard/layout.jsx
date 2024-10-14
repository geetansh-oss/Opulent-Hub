import Link from 'next/link';
import SideMenu from '@/components/editor-sideMenu';
import Navbar from '@/components/navbar';

export default function dashLayout({ children }) {
  return (
    <div>
    <div>
    <Navbar/>
    </div>
      <div className="flex">
        <SideMenu />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}