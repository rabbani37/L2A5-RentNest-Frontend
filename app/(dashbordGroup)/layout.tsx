
import React from 'react'

const DashboardGroupLayout = async ({children}: { children: React.ReactNode }) => {

   

    return (
        <div >
           ..NavBar..
            <div className='max-w-7xl mx-auto '>
                {children}
            </div>
        </div>
    )
}

export default DashboardGroupLayout