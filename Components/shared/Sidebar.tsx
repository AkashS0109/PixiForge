"use client";
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { navLinks } from '@/constants/index';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';


const Sidebar = () => {
  const pathname = usePathname();
  return (
     <aside className='hidden lg:flex h-screen w-72 bg-white p-5 shadow-md shadow-gray-400'>
       <div className='flex size-full flex-col gap-4'>
         <Link href='/' className='flex items-center justify-center gap-2 md:py-2'>
           <Image src="/assets/images/f2.png" alt='logo' width={180} height={28} />
         </Link>
         <nav className='h-full flex-col justify-between md:flex md:gap-4;'>
          <SignedIn>
           
            <ul className=' w-full flex-col items-start gap-2 md:flex;'>
              
                {navLinks.map((link)=>{
                  
                   const isActive = link.route === pathname;
                   return (
                    <li key={link.route} className={`flex items-center justify-center p-4 font-semibold w-full whitespace-nowrap rounded-full bg-cover  gap-1 transition-all hover:bg-blue-100 hover:shadow-inner group 
${isActive ? 'bg-blue-500 text-white' : 'text-gray-700'}`}>
                    <Link className=' font-semibold flex size-full gap-2 p-4;' href={link.route}>
                    <Image src={link.icon} alt='logo' width={24} height={10} className={`${isActive && 'brightness-200'}`}/>{link.label}
                  </Link>
                    </li>
                  
                   )
                })}
               
            </ul>
            {/* hidden */}
            <ul className='w-full flex-col items-start gap-2 md:flex;'> 
            <li className='flex  cursor-pointer  font-semibold gap-2 p-4'>
                      <UserButton afterSignOutUrl='/' showName />
                </li>
            </ul>
            
          </SignedIn>
          <SignedOut>
            <Button asChild className='button bg-blue-gadient bg-cover'>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
         </nav>
       </div>
     </aside> 
  )
}

export default Sidebar;
