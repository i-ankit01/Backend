'use client'

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function signIN(){
    const router = useRouter();
    return (
        <div className="p-4">
            <button className="px-2 py-2 border rounded cursor-pointer mb-2" onClick={async () => {
            await signIn("google", { callbackUrl: "/" });
        }}>Login with google</button>

        <br />
        <button className="px-2 py-2 border rounded cursor-pointer mb-2" onClick={async () => {
            await signIn("github");
        }}>Login with Github</button>
        <br />
        <button className="px-2 py-2 border rounded cursor-pointer mb-2" onClick={async () => {
            const res = await signIn("credentials", {
                username: "",
                password: "",
                redirect: false,
            });
            console.log(res);
            router.push("/")
        }}>Login with email</button>
        </div>
    )
}