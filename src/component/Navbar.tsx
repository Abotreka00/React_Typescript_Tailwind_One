import { Menu, XIcon } from "lucide-react"
import { useState } from "react"

function Navbar() {
    const [MenuShow, setMenuShow] = useState(true)
    const handleClick = () => {
        return setMenuShow(!MenuShow)
    }
  return (
    <div className="fixed flex items-center z-10 top-0 left-0 h-14 w-screen bg-zinc-300 drop-shadow-lg px-4">
        <div className="relative flex flex-grow items-center justify-between">
            <div className="flex gap-6 items-center">
                <a href="https://github.com/Abotreka00" className="md:text-4xl text-3xl font-bold uppercase">saleh.</a>
                <ul className="md:flex hidden items-center gap-6">
                    <li className="cursor-pointer font-bold hover:text-zinc-500 duration-300">Home</li>
                    <li className="cursor-pointer font-bold hover:text-zinc-500 duration-300">About</li>
                    <li className="cursor-pointer font-bold hover:text-zinc-500 duration-300">Support</li>
                    <li className="cursor-pointer font-bold hover:text-zinc-500 duration-300">Platforms</li>
                    <li className="cursor-pointer font-bold hover:text-zinc-500 duration-300">Pricing</li>
                </ul>
            </div>
            <div className="md:flex hidden items-center gap-4">
                <button className="font-bold hover:text-zinc-500 duration-300">Sign In</button>
                <button className="font-bold bg-indigo-600 hover:bg-indigo-700 duration-300 text-white py-2 px-4 rounded-md">Sign Up</button>
            </div>
            <div onClick={() => handleClick()} className="md:hidden hover:text-zinc-500 duration-300 cursor-pointer">
                {MenuShow ? <Menu /> : <XIcon />} 
            </div>
        </div>
        <div className={`${MenuShow ? "hidden" : "flex" }`}>
            <ul className="absolute top-[58px] pt-8 pb-8 px-20 bg-zinc-300 left-0 z-20 md:hidden w-full items-center">
                <li className="cursor-pointer font-bold hover:text-zinc-500 duration-300 mb-6 pb-3 border-b-2 border-zinc-500">Home</li>
                <li className="cursor-pointer font-bold hover:text-zinc-500 duration-300 mb-6 pb-3 border-b-2 border-zinc-500">About</li>
                <li className="cursor-pointer font-bold hover:text-zinc-500 duration-300 mb-6 pb-3 border-b-2 border-zinc-500">Support</li>
                <li className="cursor-pointer font-bold hover:text-zinc-500 duration-300 mb-6 pb-3 border-b-2 border-zinc-500">Platforms</li>
                <li className="cursor-pointer font-bold hover:text-zinc-500 duration-300 mb-6 pb-3 border-b-2 border-zinc-500">Pricing</li>
                <div className="flex md:hidden flex-col gap-4">
                    <button className="font-bold border-2 border-indigo-500 p-2 rounded-lg text-indigo-600 hover:text-indigo-900 duration-300">Sign In</button>
                    <button className="font-bold bg-indigo-600 hover:bg-indigo-700 duration-300 text-white py-2 px-4 rounded-md">Sign Up</button>
                </div> 
            </ul>                    
        </div>
    </div>
  )
}

export default Navbar