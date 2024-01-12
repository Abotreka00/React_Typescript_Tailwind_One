import { Check } from "lucide-react"

function Pricing() {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 w-full h-[70%] bg-slate-900"></div>
      <div className="relative text-3xl">
        <h4 className="text-center text-white pt-10">PRICING</h4>
        <p className="text-center text-white md:text-6xl font-bold text-4xl my-4">The right price for your research.</p>
        <p className="text-center w-[90%] opacity-70 text-white m-auto mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quas harum officiis, at ducimus dolorem dolore voluptatum illo saepe doloremque.</p>
      </div>
      <div className="relative mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 mx-10">
        <div className="drop-shadow-lg p-4 bg-white rounded-lg">
          <p className="w-fit p-1 bg-indigo-400 text-white px-3 font-bold rounded-xl">STANDARD</p>
          <span className="block mt-5 text-4xl font-bold">$49 <sub>/mo</sub></span>
          <p className="my-10 w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, necessitatibus.</p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4"><Check color="green"/> Lorem, ipsum dolor.</li>
            <li className="flex items-center gap-4"><Check color="green"/> Lorem, ipsum dolor.</li>
            <li className="flex items-center gap-4"><Check color="green"/> Lorem, ipsum dolor.</li>
            <li className="flex items-center gap-4"><Check color="green"/> Lorem, ipsum dolor.</li>
            <li className="flex items-center gap-4"><Check color="green"/> Lorem, ipsum dolor.</li>
          </ul>
          <div className="bg-slate-900 mt-5 w-full py-4 rounded-lg text-center text-white font-bold cursor-pointer hover:bg-slate-950 duration-300">
            <span>Get Started</span>
          </div>
        </div>
        <div className="drop-shadow-lg p-4 bg-white rounded-lg">
          <p className="w-fit p-1 bg-indigo-400 text-white px-3 font-bold rounded-xl">PREMIUM</p>
          <span className="block mt-5 text-4xl font-bold">$99 <sub>/mo</sub></span>
          <p className="my-10 w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, necessitatibus.</p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4"><Check color="green"/> Lorem, ipsum dolor.</li>
            <li className="flex items-center gap-4"><Check color="green"/> Lorem, ipsum dolor.</li>
            <li className="flex items-center gap-4"><Check color="green"/> Lorem, ipsum dolor.</li>
            <li className="flex items-center gap-4"><Check color="green"/> Lorem, ipsum dolor.</li>
            <li className="flex items-center gap-4"><Check color="green"/> Lorem, ipsum dolor.</li>
          </ul>
          <div className="bg-slate-900 mt-5 w-full py-4 rounded-lg text-center text-white font-bold cursor-pointer hover:bg-slate-950 duration-300">
            <span>Get Started</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing