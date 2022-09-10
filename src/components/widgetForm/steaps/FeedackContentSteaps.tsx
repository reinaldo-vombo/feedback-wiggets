import { ArrowArcLeft, Camera } from "phosphor-react"
import { FormEvent, useState } from "react"
import { FeedbackType, feedbackTypes } from ".."
import { api } from "../../../services/api"
import { CloseButton } from "../../CloseButton"
import { Loanding } from "../../Loanding"
import { ScreenShotButton } from "./ScreeShotButton"

interface FeedbackContantStepProps{
   feedbackType: FeedbackType
   onFeedbackRestartRequested: () => void
   onFeedbackSent: () => void
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested, onFeedbackSent}: FeedbackContantStepProps ){

  const feedbackTypeInfo = feedbackTypes[feedbackType]
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)

    async function handleSubmitFeedback(event: FormEvent){
      event.preventDefault()
      setIsSendingFeedback(true)
      // console.log({
      //    screenshot, comment
      // })

      await api.post('/feedbacks', {
         type: feedbackType,
         comment,
         screenshot
      })

      setIsSendingFeedback(false)
      onFeedbackSent()
   }

   return(
      <>
         <header>
            <button 
            type="button" 
            onClick={onFeedbackRestartRequested}
            className="absolute left-2  text-zinc-400 hover:text-zinc-100">
               <ArrowArcLeft weight="bold" className="w-4 h-4"/>
            </button>
            <span className="text-xl leading-4 flex items-center gap-2">
               <img src={feedbackTypeInfo.image.source} 
                  alt={feedbackTypeInfo.image.alt}
                  className='w-6 h-6'
                />
             {feedbackTypeInfo.title}
            </span>
            <CloseButton/>
         </header>

         <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
            <textarea 
            className="min-w-[304px] w-full min-h-[112px] text-sm placeholderbg-zinc-400 border-zinc-600 bg-transparent rounded-md focus:border-violet-800 focus:ring-violet-800 focus:outline-none focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" 
            placeholder="Conte com detalhes o que está acontecendo..."
            onChange={event => setComment(event.target.value)}
            />

            <footer className="flex gap-2 mt-2">
               <ScreenShotButton
               screenshot={screenshot}
               onScreenShotTook = {setScreenshot}
               />
               <button 
               disabled={comment.length === 0 || isSendingFeedback }
               type="submit"
               className="p-2 bg-violet-700 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-violet-500 focus:ring-2 focus:ring-offset-2 transition-colors focus:outline-none disabled:opacity-50 disabled:hover:bg-none"
               >
                 {isSendingFeedback ? <Loanding /> : 'Enviar feedback'}
               </button>
            </footer>
         </form>
   </>
   )
}