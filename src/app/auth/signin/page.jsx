"use client";

import { useState } from 'react';
import { signIn } from 'next-auth/react';
export default function SignIn() {

  const [role, setRole] = useState("owner");

  function handleRoleSelection(selectedRole) {
    setRole(selectedRole);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`sign in as ${role}`)
  };

  function handleSignIn() {
    if (role === "owner") {
      signIn("google", {
        callbackUrl: "/dashboard/owner",
        role:"owner",
        scope: "https://www.googleapis.com/auth/youtube.upload"
      })
    }
    else if(role === "editor"){
      signIn("google", {
        callbackUrl: "/dashboard/editor",
        role: "editor",
        scope: ""
      })
    }
  }

  return (
    <div className='py-10'>
      <section>
        <h1 className='text-xl'>
          Welcome back!
        </h1>
        <h1 className='text-xl'>
          Login to your account
        </h1>
        <h1 className='text-sm'>
          Its nice to see you again. Ready for work?
        </h1>
      </section>
      <form onSubmit={handleSubmit} className="">
        <label>Select Login Role:</label>
        <div className=" flex flex-row gap-3">
          <button
            type="button"
            className={`py-1 px-2 rounded-lg ${role === "owner" ? "bg-indigo-600 text-white" : "bg-gray-200 text-black"}`}
            onClick={() => handleRoleSelection("owner")}
          >
            Owner
          </button>
          <button
            type="button"
            className={`py-1 px-2 rounded-lg ${role === "editor" ? "bg-indigo-600 text-white" : "bg-gray-200 text-black"}`}
            onClick={() => handleRoleSelection("editor")}
          >
            Editor
          </button>
        </div>
        <div>
          {role && (
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              onClick={handleSignIn}
            >
              Sign in with Google
            </button>
          )}
        </div>
      </form>
      
    </div>
  );
}
