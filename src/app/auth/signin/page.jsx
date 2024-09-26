"use client";

import { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
export default function SignIn() {

  const [role, setRole] = useState("owner");
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

  async function handleSignIn(role) {
    if (role == "owner") {
      signIn('google', { callbackUrl: 'dashboard/owner' });
    } else if (role == "editor") {
      signIn("credentials", { email: "test@gmail.com", password: "test" })
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
            onClick={(role) => (handleSignIn(role))}
          >
            Sign in with Google as {role}
          </button>
        ) : (
          <div>
            <form className='flex flex-col gap-2'>
              <label>Email</label>
              <input
                type='email'
                name='email'
                placeholder='example@gmail.com'
                className='bg-indigo-100'
                onChange={(e) => (setEmail(e.target.value))}
              />
              <label>password</label>
              <input
                type='password'
                name='password'
                placeholder='*********'
                className='bg-indigo-100'
                onChange={(e) => (setpassword(e.target.value))}
              />
              <button
                className='btn'
                onSubmit={(role) => (handleSignIn(role))}
              >
                submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
