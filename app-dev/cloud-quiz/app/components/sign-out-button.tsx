"use client"
import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase-initialization";

export default function SignOutButton() {
  const onSignOutClick = (): void => {
    signOut(auth);
  }

  return (
    <button onClick={onSignOutClick} className={`border mt-20`}>Sign Out</button>
  )
}
