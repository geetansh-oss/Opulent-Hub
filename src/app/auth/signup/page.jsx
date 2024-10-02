// pages/auth/signup.js
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,  // Prevent automatic redirection
      isSignUp: true,   // Custom flag to handle sign-up in authorize()
    });

    if (res.error) {
      console.log("Error:", res.error);
    } else {
      console.log("Signed up and logged in:", res);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className = "btn">Sign Up</button>
    </form>
  );
}
