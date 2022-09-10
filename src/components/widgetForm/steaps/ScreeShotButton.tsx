import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas'
import { useState } from "react";
import { Loanding } from "../../Loanding";

interface ScreenShotButtonProps{
   screenshot: string | null
   onScreenShotTook:(screenshot: string | null) => void
}

export function ScreenShotButton({screenshot, onScreenShotTook}: ScreenShotButtonProps){
   const [isTakigScreeShot, setIsTakigScreeShot] = useState(false)

   async function handleScreenShot(){
      setIsTakigScreeShot(true)
      const canvas = await html2canvas(document.querySelector('html')!)
      const base64image = canvas.toDataURL('image/pg')
       
      onScreenShotTook(base64image)
      setIsTakigScreeShot(false)
   }

   if (screenshot){
      return(
         <button
         type="button"
         className="p-1 w-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
         onClick={() => onScreenShotTook(null)}
         style={{
            backgroundImage: `url(${screenshot})`,
            backgroundPosition: 'right bottom',
            backgroundSize: 180
         }}
         >
            <Trash weight="fill" />
         </button>
      )
   }

   return(
      <button
         onClick={handleScreenShot}
         type="button"
         className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:ring-2 focus:ring-offset-2 transition-colors hover:border-violet-800 focus:outline-none"
         >
           { isTakigScreeShot ? <Loanding/> :  <Camera className="w-6 h-6"/>}
         </button>
   )
}