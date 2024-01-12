import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

function Footer() {
  return (
    <div className="relative bg-slate-900 mt-10 py-10 px-5">
        <div className="flex lg:flex-row flex-col gap-4">
            <div className="flex-grow grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                <div className="text-white">
                    <h3 className="font-bold text-2xl mb-4">SQLUTIONS</h3>
                    <ul className=" opacity-80 ml-3">
                        <li className="cursor-pointer ">Markiting</li>
                        <li className="cursor-pointer ">Aralyytics</li>
                        <li className="cursor-pointer ">Commerce</li>
                        <li className="cursor-pointer ">Data</li>
                        <li className="cursor-pointer ">Cloud</li>
                    </ul>
                </div>
                <div className="text-white">
                    <h3 className="font-bold text-2xl mb-4">SUPPORT</h3>
                    <ul className=" opacity-80 ml-3">
                        <li className="cursor-pointer ">Markiting</li>
                        <li className="cursor-pointer ">Aralyytics</li>
                        <li className="cursor-pointer ">Commerce</li>
                        <li className="cursor-pointer ">Data</li>
                    </ul>
                </div>
                <div className="text-white">
                    <h3 className="font-bold text-2xl mb-4">COMPANY</h3>
                    <ul className=" opacity-80 ml-3">
                        <li className="cursor-pointer ">Markiting</li>
                        <li className="cursor-pointer ">Aralyytics</li>
                        <li className="cursor-pointer ">Commerce</li>
                        <li className="cursor-pointer ">Data</li>
                    </ul>
                </div>
                <div className="text-white">
                    <h3 className="font-bold text-2xl mb-4">LEOAL</h3>
                    <ul className=" opacity-80 ml-3">
                        <li className="cursor-pointer ">Markiting</li>
                        <li className="cursor-pointer ">Aralyytics</li>
                        <li className="cursor-pointer ">Commerce</li>
                        <li className="cursor-pointer ">Data</li>
                    </ul>
                </div>
            </div>
            <div className="text-white">
                <h3 className=" mb-4 text-2xl md:text-1xl font-bold">SUBSCRIPE TO OUR NEWSLETTER</h3>
                <p className="mb-4 opacity-80 w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ratione.</p>
                <div className="flex items-center w-2/3 gap-4">
                    <input className="outline-none text-black font-bold py-2 px-1 w-full rounded-lg" type="text" placeholder="Enter Your Email"/>
                    <button className="bg-indigo-600 py-2 px-2 rounded-lg">Subscribe</button>
                </div>
            </div>
        </div>
        <hr className="text-white my-7"/>
        <div className="flex justify-between md:mx-10 flex-col md:flex-row gap-4">
            <p className="text-white opacity-80">2024 Workflow, LLC, All Rights Reserved</p>
            <ul className="flex text-white gap-4">
                <li><Facebook className="cursor-pointer opacity-60 hover:opacity-100 duration-300"/></li>
                <li><Instagram className="cursor-pointer opacity-60 hover:opacity-100 duration-300"/></li>
                <li><Twitter className="cursor-pointer opacity-60 hover:opacity-100 duration-300"/></li>
                <li><Github className="cursor-pointer opacity-60 hover:opacity-100 duration-300"/></li>
                <li><Linkedin className="cursor-pointer opacity-60 hover:opacity-100 duration-300"/></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer