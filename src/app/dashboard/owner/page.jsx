"use client";

import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation";
export default function Owner() {
  const { data: session } = useSession();
  if (!session) {
    redirect('/auth/signin');
  }

  return (<div>
    Owner
    <button className="btn" onClick={signOut}>Sign Out</button>
  </div>)
}