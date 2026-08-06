"use client"


import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { ComboboxBasic } from './ComboboxBasic'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const LoginForm = () => {
    return (
        <form className='space-y-3'>
            <Card className="p-5 space-y-3">
                {/* <div className='space-y-1'>
                    <Label htmlFor="role">Select Your Role</Label>
                    <ComboboxBasic />
                </div> */}

                <div className='space-y-1'>
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" id="email" type="email" placeholder="m@example.com" required />
                </div>

                <div className='space-y-1'>
                    <Label htmlFor="password">Password</Label>
                    <Input name="password" id="password" type="password" placeholder='* * * * * *' required />
                </div>
                <Button type='submit' className='w-full'>Login</Button>
            </Card>
        </form>
    )
}

export default LoginForm