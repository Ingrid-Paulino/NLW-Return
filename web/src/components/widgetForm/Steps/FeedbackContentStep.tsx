import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../lib/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackrestartRequested: () => void; // função que n recebe parametro e que não tem retorno 
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackrestartRequested, onFeedbackSent}: FeedbackContentStepProps ) {
  const [screenshot, setScreenshot] = useState<string | null>(null) //caso a img exista é uma sting caso não exista é nullo
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitfeedback(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSendingFeedback(true);

    // console.log({
    //   screenshot,
    //   comment,
    // });

    // Chamada na API - na rota feedbacks e no segundo argumento passo os dados que eesa rota espera
    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot,
    })

    setIsSendingFeedback(true);
    onFeedbackSent();
  }

  return (
    // O fragment não é mostrado no meu html
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackrestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
          {feedbackTypeInfo.title}
        </span>
        
        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitfeedback}>
         <textarea
            className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent "
            placeholder="Conte com detalhes o que está acontecendo..."
            onChange={(e) => setComment(e.target.value)} // pega o texto do textarea
          />

          <footer className="flex gap-2 mt-2">
            <ScreenshotButton
              onScreenshotTook={setScreenshot}
              screenshot={screenshot}
            />
            <button
              type="submit"
              disabled={comment.length === 0 || isSendingFeedback}
              className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            >
    
              {isSendingFeedback ? <Loading /> : 'Enviar feedback' }
            </button>
          </footer>
      </form>
    </>
  );
}