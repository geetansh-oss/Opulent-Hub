"use client";

import { useState, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
export default function SignIn() {

  const [role, setRole] = useState("");
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  // if (session?.user?.role == "owner") {
  //   console.log(session?.user);
  //   redirect("/dashboard/owner")
  // } else if (session?.user?.role == "editor") {
  //   redirect("dashboard/editor")
  // }

  function handleRoleSelection(selectedRole) {
    setRole(selectedRole);
  };
  // handle owner signIn amd signUp
  async function handleSignInOwner(e) {
    e.preventDefault();
    await signIn('google', {
      callbackUrl: '/dashboard/owner'
    });
  }
  // handle editor signIn and signUp
  async function handleSignInEditor(e) {
    e.preventDefault();
    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/dashboard/editor'
    });
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
        {role == "owner" ? (
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            onClick={handleSignInOwner}
          >
            Sign in with Google as {role}
          </button>
        ) : (
          <div>
            <form className='flex flex-col gap-2'>
              <label>Email</label>
              <input
                type='email'
                value={email}
                placeholder='example@gmail.com'
                className='bg-indigo-100'
                onChange={(e) => (setEmail(e.target.value))}
              />
              <label>password</label>
              <input
                type='password'
                value={password}
                placeholder='*********'
                className='bg-indigo-100'
                onChange={(e) => (setpassword(e.target.value))}
              />
              <button
                className='btn'
                type='submit'
                onClick={handleSignInEditor}
              >
                submit
              </button>
            </form>
            <Link href="/auth/signup">Do not have a account ?</Link>
          </div>
        )}
      </div>
    </div>
  );
}
