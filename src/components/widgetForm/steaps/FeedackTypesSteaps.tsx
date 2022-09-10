import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackTypesStepProps{
   onFeedbackTypeChange: (type: FeedbackType) => void
}

export function FeedbackTypesStep({onFeedbackTypeChange}:FeedbackTypesStepProps ){
   return(
      <>
         <header>
            <span className="text-xl leading-4">Deixe o seu comentario</span>
            <CloseButton/>
         </header>

         <div className="flex py-8 gap-2 w-full">
         { Object.entries(feedbackTypes).map(([key, value]) => {
            return (
               <button
               key={key}
               className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-b-indigo-800 focus:border-b-indigo-800 focus:outline-none"
               type="button"
               onClick={ ()=> onFeedbackTypeChange(key as FeedbackType)}
               >
                  <img src={value.image.source} alt={value.image.alt} />
                  <span>{value.title}</span>
               </button>
            )
         })}
      </div>
   </>
   )
}