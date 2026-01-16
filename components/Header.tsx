'use client'
import React from 'react' 
import Image from 'next/image'
import Link from 'next/dist/client/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
const Header = () => {
  const pathname = usePathname();
  return (
    <header>
        <div className="main-container inner">
            <Link href="/">
                <Image src="pic1.svg" alt="Zync Logo" width={132} height={40}/>
            </Link>
            <nav>
                <Link href='/' className={cn('nav-link',{
                  'is-active': pathname === '/',
                  'is-home':true
                })}>Home</Link>
                <p>Search modal</p>
                <Link href="/coins">All Coins</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header