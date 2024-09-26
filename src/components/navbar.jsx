"use client";

import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react"

export default function Navbar() {

  const { data: session } = useSession();
  
  return (
    <nav className="flex flex-row justify-between bg-opacity-0 p-4">
      {/* Logo Section */}
      <Link href="/" className="text-2xl font-bold italic text-indigo-500">
        Opulent Hub
      </Link>
      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link href="/about" className="text-lg hover:underline">
          About
        </Link>
        <Link href="/contact" className="text-lg hover:underline">
          Contact Us
        </Link>
        {/* if Session is not available */}
        {session?.user?.role ? (
          <div>
          {
            (session?.user?.role == "owner") ? (
              <Link href="/dashboard/owner">
              <FaRegUserCircle size={25} />
            </Link>
            ):(
              <Link href="/dashboard/editor">
              <FaRegUserCircle size={25} />
            </Link>
            )
          }
            
          </div>
        ) : (
          <div className="flex item-center">
            <button className="btn" onClick={signIn}>Login</button>
          </div>
        )}
      </div>
    </nav>
  );
}
