import React from 'react'
import { MagnifyingGlass, User } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import background from '../assets/0023.jpg'
import manga1 from '../assets/0024.jpg'

export function Home() {
  return (
    <>
     <div className='h-96 relative bg-gradient-to-t from-black to-zinc-500'>
      <img className='w-full h-full object-cover absolute mix-blend-overlay' src={background} alt="" />
      <div className='flex justify-center gap-2 h-full items-end'>
         <div className='flex items-center'>
         <i>
            <MagnifyingGlass className='mb-[.1rem]' size={30} />
         </i>
         <input className='border-none bg-white w-80 rounded-full placeholder-violet-600  group' type="text" placeholder='Pesquise o seu manga ou author' />
         </div>
         <Popover className=' relative flex items-center '>
         <Popover.Panel className='bg-black absolute z-10 w-[47rem] h-[41rem] translate-x-[-69%]'>
           hwlll
         </Popover.Panel>
            <Popover.Button className=' bg-violet-500 rounded-full border-none outline-none px-3 h-12 transition-all text-white hover:scale-105'>
               <User className='w-6'/>
            </Popover.Button>
         </Popover>
      </div>
      </div> 
      <div className='container mx-auto'>
         <h1 className='mt-8 mb-8'>Latest Mangas</h1>
            <div className='flex justify-between'>
               <div className='w-64 mr-4 bg-gradient-to-t rounded-md from-black to-zinc-500'>
                  <img className='w-full h-full mix-blend-overlay relative transi rounded-md hover:' src={manga1} alt="" />
                  <div className=' w-64 absolute bottom-[-4.1rem] px-3 z-10'>
                     <h2 className='text-4xl font-medium mb-2'>Hunted</h2>
                     <h3 className='mb-2'>Reinaldo Vombo</h3>
                     <hr color='red'  />
                     <span>action/devil</span>
                     <span></span>
                  </div>
               </div>
               <div className='w-64 mr-4 bg-gradient-to-t rounded-md from-black to-zinc-500'>
                  <img className='w-full h-full mix-blend-overlay relative transi rounded-md hover:' src={manga1} alt="" />
                  <div className=' w-64 absolute bottom-[-4.1rem] px-3 z-10'>
                     <h2 className='text-4xl font-medium mb-2'>Hunted</h2>
                     <h3 className='mb-2'>Reinaldo Vombo</h3>
                     <hr color='red'  />
                     <span>action/devil</span>
                     <span></span>
                  </div>
               </div>
               <div className='w-64 mr-4 bg-gradient-to-t rounded-md from-black to-zinc-500'>
                  <img className='w-full h-full mix-blend-overlay relative transi rounded-md hover:' src={manga1} alt="" />
                  <div className=' w-64 absolute bottom-[-4.1rem] px-3 z-10'>
                     <h2 className='text-4xl font-medium mb-2'>Hunted</h2>
                     <h3 className='mb-2'>Reinaldo Vombo</h3>
                     <hr color='red'  />
                     <span>action/devil</span>
                     <span></span>
                  </div>
               </div>
               <div className='w-64 mr-4 bg-gradient-to-t rounded-md from-black to-zinc-500'>
                  <img className='w-full h-full mix-blend-overlay relative transi rounded-md hover:' src={manga1} alt="" />
                  <div className=' w-64 absolute bottom-[-4.1rem] px-3 z-10'>
                     <h2 className='text-4xl font-medium mb-2'>Hunted</h2>
                     <h3 className='mb-2'>Reinaldo Vombo</h3>
                     <hr color='red'  />
                     <span>action/devil</span>
                     <span></span>
                  </div>
               </div>
            </div>
      </div>
    </>
  )
}
