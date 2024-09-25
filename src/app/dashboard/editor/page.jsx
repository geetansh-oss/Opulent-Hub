"use client";

import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation";
export default function Owner() {

  const { data: session } = useSession();
  if(!session?.user){
    redirect('/auth/signin'); 
  }
  console.log(session?.user?.role);
  return (<div>
    editor
    <button onClick={signOut} className="btn">Sign Out</button>
  </div>)
}