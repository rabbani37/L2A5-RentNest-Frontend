
import Footer from '@/components/shared/footer'
import { NavBar } from '@/components/shared/navbar'
import { getMe } from '@/service/getMe'
import React from 'react'

const AuthGroupLayout = async ({ children, }: { children: React.ReactNode }) => {

    const user = await getMe();

// console.log(user);
    return (
        <div >
            <NavBar user={user} />

            {children}


        </div>
    )
}

export default AuthGroupLayout