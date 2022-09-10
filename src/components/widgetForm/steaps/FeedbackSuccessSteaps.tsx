import { CloseButton } from "../../CloseButton";
import successIcon from '../../../assets/check.svg'

interface FeedbackSuccessStepProps{
   onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({onFeedbackRestartRequested}:FeedbackSuccessStepProps){
   return(
      <>
      <header>
         <CloseButton/>
      </header>

      <div className="flex flex-col items-center py-18 w[304px]">
         <img src={successIcon} alt="icon de sucesso" className="w-6 h-6" />
      
      <span className="text-xl mt-2">Agradecemos o feedback</span>
      <button 
      onClick={onFeedbackRestartRequested}
      type="button"
      className="py-2 mt-2 mb-2 px-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors  hover:border-b-indigo-800 focus:border-b-indigo-800 focus:outline-none"
      >
       Quero enviar outro
      </button>
      </div>
      
      </>
   )
}