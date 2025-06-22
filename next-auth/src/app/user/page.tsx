
// You can use useSession hook to get the details of the user
// But you have to make the component a client component
// So to get the userDetails in a server component like this you have to use getServerSession() function by next-auth

import { getServerSession } from "next-auth"
import { NEXTAUTH } from "../lib/auth"

export default async function UserDetails(){
    const session = await getServerSession(NEXTAUTH) // NEXTAUTH is passed as argument to get the user id on the server component 
    return (
        <>
        <div className="mt-10">
            Server Component
        </div>
        <div className="border h-32 w-full" >
            
            {JSON.stringify(session)}
        </div>
        </>
    )
}