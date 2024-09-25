"use client";

import { signOut } from "next-auth/react"
export default function Owner(){
  return(<div>
    Owner
    <button onClick={signOut} className="btn">Sign Out</button>
    </div>)
}