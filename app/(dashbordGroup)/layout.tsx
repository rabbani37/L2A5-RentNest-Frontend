
import Footer from '@/components/shared/footer'
import { NavBar } from '@/components/shared/navbar'
import React from 'react'

const DashboardGroupLayout = async ({ children }: { children: React.ReactNode }) => {



    return (
        <div >
            <NavBar />

            {children}

            
        </div>
    )
}

export default DashboardGroupLayout