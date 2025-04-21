"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/Components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

  
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className=' flex justify-between fixed h-16 w-full border-b-4 border-blue-100 bg-white p-5 lg:hidden'>
   <Link href='/' className='flex items-center gap-2 md:py-2'>
   <Image src="/assets/images/f21.png" alt='logo' width={180} height={28}/>
   </Link>
   <nav className='flex gap-2'>
    <SignedIn>
      <UserButton afterSwitchSessionUrl='/'/>
      <Sheet>
  <SheetTrigger>
  <Image src="/assets/icons/menu.svg" alt="logo" width={24} height={24} className='curspr-pointer'/>
  </SheetTrigger>
  <SheetContent className='sm:w-64 bg-white'>
   <>
   <Image src="/assets/images/f21.png"  width={180} height={24} alt='logo' className='p-3' />
   </>
    <ul className=' w-full flex-col items-start gap-2 md:flex;'>
                 
                   {navLinks.map((link)=>{
                     
                      const isActive = link.route === pathname;
                      return (
                       <li key={link.route} className={`flex items-center justify-center p-3 font-semibold w-full whitespace-nowrap  bg-cover  gap-1 transition-all hover:bg-blue-100 hover:shadow-inner group 
   ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700'}`}>
                       <Link className=' font-semibold flex size-full gap-1 p-2;' href={link.route}>
                       <Image src={link.icon} alt='logo' width={15} height={8} />{link.label}
                     </Link>
                       </li>
                     
                      )
                   })}
                  
               </ul>
  </SheetContent>
</Sheet>

    </SignedIn>
    <SignedOut>
            <Button asChild className='button bg-blue-gadient bg-cover'>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
   </nav>
    </header>
  )
}

export default MobileNav
