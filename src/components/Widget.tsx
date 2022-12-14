import React, { useState } from 'react'
import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './widgetForm'
import { Home } from './home'


export function Widget(){
   return (
      <>
      <Home/>
      <Popover className='absolute bottom-4 right-4 md:bottom-10 md:right-8 flex flex-col items-end'>
         <Popover.Panel>
            <WidgetForm/>
         </Popover.Panel>
        
         <Popover.Button className='bg-violet-500 rounded-full px-3 h-12 text-white flex items-center border-none group'>
            <ChatTeardropDots className='w-6'/>
            <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
               <span className='pl-2'></span>
               Feedback
            </span>
         </Popover.Button>
      </Popover>
      </>
      
   )  
   
}