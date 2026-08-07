"use client"

import Link from "next/link"
import {
    BellIcon,
    ChevronDownIcon,
    CreditCardIcon,
    LogOutIcon,
    SettingsIcon,
    UserIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button, buttonVariants } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "#projects" },
    { label: "Resources", href: "#resources" },
] as const

const accountItems = [
    { label: "Profile", href: "/abc", icon: UserIcon },
    { label: "Billing", href: "/ab", icon: CreditCardIcon },
    { label: "Notifications", href: "/cd", icon: BellIcon },
] as const

export function NavBar() {






    return (
        <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/70">
            <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
                <Link
                    className="shrink-0 text-xl font-bold tracking-tight text-foreground"
                    href="#top"
                >
                    Northstar
                </Link>

                <nav aria-label="Main navigation" className="min-w-0 flex-1 overflow-x-auto auto">
                    <ul className="flex min-w-max items-center justify-center gap-1">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    className={buttonVariants({ variant: "ghost", size: "sm" })}
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <DropdownMenu>
                    <DropdownMenuTrigger
                        render={
                            <Button

                                className="shrink-0 gap-2 pl-1.5 cursor-pointer"
                                variant="ghost"
                            />
                        }
                    >
                        <Avatar size="sm">
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span className="hidden text-sm font-medium sm:inline">Jordan Doe</span>
                        <ChevronDownIcon aria-hidden="true" data-icon="inline-end" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>
                                <span className="block">Jordan Doe</span>
                                <span className="font-normal text-muted-foreground">jordan@example.com</span>
                            </DropdownMenuLabel>
                            {accountItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <DropdownMenuItem key={item.href} render={<Link href={item.href} />}>
                                        <Icon aria-hidden="true" />
                                        {item.label}
                                    </DropdownMenuItem>
                                )
                            })}
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem >
                            <SettingsIcon aria-hidden="true" />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem >
                            <LogOutIcon aria-hidden="true" />
                            Sign out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
