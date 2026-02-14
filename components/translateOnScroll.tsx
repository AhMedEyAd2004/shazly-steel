'use client'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function ScrollNavbar({ children, className, ...props }:
    { children: React.ReactNode, className: string }
    & React.HTMLAttributes<HTMLDivElement>) {

    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down & past threshold
                setIsVisible(false)
            } else {
                // Scrolling up
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <nav
            className={cn([className,
                isVisible ? 'translate-y-0' : '-translate-y-[210%]'])}
            {...props}
        >
            {children}
        </nav >
    )
}