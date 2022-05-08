import { useState } from "react";
import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./widgetForm";

export function Widget() {
  // Forma 1 sem usar Popover
  // const [isWidgetOpen, setIsWidgetOpen] =  useState(false)

  // const toggleWidgetVisibility = () => {
  //   setIsWidgetOpen(!isWidgetOpen)
  // }

  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      {/* <div className='absolute bottom-5 right-5'> troquei a div por Popover */}
      {/* FORMA 1 */}
      {/* OBS: usando o Popover não vou precisar dessa linha 18 */}
      {/* {isWidgetOpen ? <p>Hellow world</p> : null} */}
      {/* OU */}
      {/* {isWidgetOpen && <p>Hellow world</p>} São equivaletes -> so executa a segunda parte se a primeira for verdadeiro */}

      {/* FORMA 2 */}
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      {/* forma 2 */}
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        {/* forma 1 */}
        {/* <button onClick={toggleWidgetVisibility} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"> */}
        <ChatTeardropDots
          className="w-6 h-6" /*size="200" weight="thin" weight="bold" weight="fill" weight="duotone"*/
        />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          {/* overflow-hidden --> esconte qualquer texto ou conteudo de alguma div ou elemento que sobreponha o tamanho maximo daquele elemrnto fica invisivel  */}
          <span className="pl-2"></span>
          FeedBack
        </span>
      </Popover.Button>
      {/* </div> */}
    </Popover>
  );
}
