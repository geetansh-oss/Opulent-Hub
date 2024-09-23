"use client";

import { useState } from 'react';
export default function SignIn() {

  const [role, setRole] = useState("");
  return (

    <div>
      (role == "owner" ? (
      <div>

      </div>
      ):(
      <div>

      </div>
      ))
    </div>

  );
}
