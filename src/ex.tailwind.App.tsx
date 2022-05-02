interface ButtonProps {
  text?: string
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors " /*Poderia declarar a cor assim tbm (bg-[#8257e6])*/ /*className="button" --> daria pra fazer asiim tbm, usando o arquivo global*/ >{props.text ?? 'Default'}</button> //props.text ?? 'Default' --> as esclamaçoes sig que Default sera o valor padrão
}

function App() {
  return (
    <div className="flex gap-2">
      <Button text="Enviar"/>
      <Button text="Ok"/>
      <Button />
    </div>
  )
}

export default App
