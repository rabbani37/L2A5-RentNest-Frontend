
import React from 'react'

const AuthGroupLayout = async ({ children, }: { children: React.ReactNode }) => {

   

    return (
        <div >
           
            <div className='max-w-7xl mx-auto '>
                {children}
            </div>
        </div>
    )
}

export default AuthGroupLayout