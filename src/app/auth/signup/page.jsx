"use client"

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      email,
      password,
      redirect: 'auth/signin',
      isSignUp: true,   // Custom flag to handle sign-up in authorize()
    });

    if (res.error) {
      console.log("Error:", res.error);
    } else {
      console.log("Signed up and logged in:", res);
    }
  };

  return (
    <div className='m-auto'>
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
        Sign up as editor !
      </section>
      <form className='flex flex-col gap-5 py-4' onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => { setUserName(e.target.value) }}>
        </input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <Link className="hover:text-indigo-500" href='/auth/signin'>
        User already exists
      </Link>
    </div>
  );
}
