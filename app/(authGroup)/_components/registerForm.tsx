"use client"


import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { ComboboxBasic } from './ComboboxBasic'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const RegisterForm = () => {
    return (
        <form className='space-y-3'>
            <Card className="p-5 space-y-3">



                <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                    <div className='space-y-1'>
                        <Label htmlFor="name">Name</Label>
                        <Input name="name" id="name" type="text" placeholder="John Doe" required />
                    </div>

                    <div className='space-y-1'>
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" id="email" type="email" placeholder="m@example.com" required />
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                    <div className='space-y-1'>
                        <Label htmlFor="password">Password</Label>
                        <Input name="password" id="password" type="password" placeholder='* * * * * *' required />
                    </div>

                    <div className='space-y-1'>
                        <Label htmlFor="phone">Phone</Label>
                        <Input name="phone" id="phone" type="tel" placeholder='012....' required />
                    </div>
                </div>

                <div className='space-y-1'>
                    <Label htmlFor="role">Select Your Role</Label>
                    <ComboboxBasic />
                </div>

                <Button type='submit' className='w-full'>Register</Button>
            </Card>
        </form>
    )
}

export default RegisterForm