// You need to wrap you app with sessionProvider 
// Now if you do that directly in the layout.tsx then you have to make it "use client"
// So make a providers.tsx and then make it client component and wrap you application with any provider you want 

'use client'

import { SessionProvider } from "next-auth/react";
import React from "react";

export function Providers({children} : {children : React.ReactNode}){
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

// Anything that yo write inside a component automatically reaches as props