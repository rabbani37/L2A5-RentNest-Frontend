
import React from 'react'

const PublicGroupLayout = async ({ children, }: { children: React.ReactNode }) => {

   

    return (
        <div >
            <div className='max-w-7xl mx-auto '>
                {children}
            </div>
        </div>
    )
}

export default PublicGroupLayout