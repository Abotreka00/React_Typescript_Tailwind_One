import { ArrowRight , Phone } from "lucide-react"
import imgBgPeople from "../assets/support.jpg"

function Support() {
  return (
    <div className="bg-zinc-100 my-[50px] relative w-full">
        <div className="w-full h-[450px] absolute bg-gray-900/90 ">
            <img className="w-full h-full object-cover mix-blend-overlay" src={imgBgPeople} alt="imgBgPeople" />
        </div>
        <div className="relative text-center">
            <h4 className="pt-10 text-white">SUPPORT</h4>
            <h3 className="text-white md:text-4xl text-3xl my-4">Finding the right team</h3>
            <p className="w-[70%] mx-auto text-white text-left opacity-65">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, atque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem perspiciatis enim aspernatur deserunt voluptate ut quisquam molestias aliquam quod, a, id nam magni, hic ea qui suscipit voluptas voluptatem est.</p>
        </div>
        <div className="relative grid w-[70%] md:gap-3 gap-20 mx-auto mt-[100px] grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            <div className="relative bg-white rounded-md shadow-lg">
                <div className="bg-indigo-600 left-4 w-fit p-2 rounded-md absolute -top-5 text-white">
                    <Phone />
                </div>
                <span className="block mx-4 pt-4 mt-3 text-2xl font-bold">Sales</span>
                <p className="mx-4 opacity-80 my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia magnam at nulla? Repudiandae ratione provident vero sed quas impedit quibusdam?</p>
                <div className="bg-indigo-100 rounded-b-lg">
                    <p className="flex items-center py-3 px-4 text-indigo-600 cursor-pointer font-bold">Contact Us <ArrowRight className="ml-3" /></p>
                </div>
            </div>
            <div className="relative bg-white rounded-md shadow-lg">
                <div className="bg-indigo-600 left-4 w-fit p-2 rounded-md absolute -top-5 text-white">
                    <Phone />
                </div>
                <span className="block mx-4 pt-4 mt-3 text-2xl font-bold">Sales</span>
                <p className="mx-4 opacity-80 my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia magnam at nulla? Repudiandae ratione provident vero sed quas impedit quibusdam?</p>
                <div className="bg-indigo-100 rounded-b-lg">
                    <p className="flex items-center py-3 px-4 text-indigo-600 cursor-pointer font-bold">Contact Us <ArrowRight className="ml-3" /></p>
                </div>
            </div>
            <div className="relative bg-white rounded-md shadow-lg">
                <div className="bg-indigo-600 left-4 w-fit p-2 rounded-md absolute -top-5 text-white">
                    <Phone />
                </div>
                <span className="block mx-4 pt-4 mt-3 text-2xl font-bold">Sales</span>
                <p className="mx-4 opacity-80 my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia magnam at nulla? Repudiandae ratione provident vero sed quas impedit quibusdam?</p>
                <div className="bg-indigo-100 rounded-b-lg">
                    <p className="flex items-center py-3 px-4 text-indigo-600 cursor-pointer font-bold">Contact Us <ArrowRight className="ml-3" /></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support
