import Logo from "@/assets/logo.svg"
import { MenuIcon } from "lucide-react"
import { TextAnimate } from './components/magicui/text-animate'
function App() {

  return (
    <>
      <div className="w-full h-full fixed bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] bg-repeat bg-[length:128px] rounded-none opacity-[0.075] absolute"></div>
      <div className='bg-sky-800 blur-[100px] size-[250px] sm:size-[400px] rounded-full -left-20 -top-20 fixed z-10'></div>
      <div className='bg-sky-800 blur-[100px] size-[250px] sm:size-[400px] rounded-full -right-20 -bottom-20 fixed z-10'></div>
      <main className='flex flex-col gap-2 h-svh relative z-20 py-5 px-8'>
        {/* <Scene /> */}
        <header className="flex justify-end w-full p-3 mx-auto">
          <button className="rounded-full flex p-3 bg-gray-900/60 items-center border border-ring/20 backdrop-blur-3xl">
            <MenuIcon />
          </button>
        </header>
        <div className='flex flex-col items-center gap-10 mx-auto text-white relative sm:px-20 h-full pt-20'>
          <div className="size-20 grid place-content-center relative">
            <img src={Logo} className="w-full object-cover relative z-10" />
            <img src={Logo} className="w-full object-cover blur-lg scale-150 absolute opacity-50 z-0 dark:opacity-30" />
          </div>
          <div className="grid gap-2">
            <TextAnimate className='text-center font-medium text-[34px] leading-[32px] sm:text-6xl sm:leading-[56px] tracking-[-1px] max-w-[680px]' animation="blurInUp" by="character" once>
              Assistenza Tecnica, Riparazioni e Soluzioni Digitali a Milano
            </TextAnimate>
            <TextAnimate className='text-center text-zinc-300 text-md  sm:text-6xl sm:leading-[56px] tracking-[-1px] max-w-[680px]' animation="blurInUp" by="character" once>
              Siamo al tuo fianco per ogni esigenza informatica, a casa o in azienda.
            </TextAnimate>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
