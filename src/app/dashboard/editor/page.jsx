"use client";

import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
export default function Owner() {

  const { data: session } = useSession();
  // useEffect(() => {
  //   if (!session?.user && status !== "loading") {
  //     redirect('/');
  //   }
  // }, ([session, status]));

  // if (status === "loading") {
  //   return <p>Loading...</p>;
  // }
  // console.log(session?.user);
  return (
    <div>
    </div>
  )
}