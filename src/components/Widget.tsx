import { useState } from 'react';
import { ChatTeardropDots } from 'phosphor-react'

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] =  useState(false)

  const toggleWidgetVisibility = () => {
    setIsWidgetOpen(!isWidgetOpen)
  }

  return (
    <div className='absolute bottom-5 right-5'>
      {/* {isWidgetOpen ? <p>Hellow world</p> : null} */}
      {/* OU */}
      
      {isWidgetOpen && <p>Hellow world</p>} {/* São equivaletes -> so executa a segunda parte se a primeira for verdadeiro */}

      
      <button onClick={toggleWidgetVisibility} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className='w-6 h-6'  /*size="200" weight="thin" weight="bold" weight="fill" weight="duotone"*/ />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear"> 
        {/* overflow-hidden --> esconte qualquer texto ou conteudo de alguma div ou elemento que sobreponha o tamanho maximo daquele elemrnto fica invisivel  */}
          <span className="pl-2"></span>
          FeedBack
        </span>
      </button>
    </div>
  ) 
}