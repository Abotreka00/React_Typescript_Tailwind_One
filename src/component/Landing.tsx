import { BetweenVerticalEnd, Database, Gauge, Webhook } from "lucide-react"
import imgCyber from "../assets/cyber-bg.png"


function Landing() {
    return (
        <div className={`w-fit h-[100vb] pb-10 flex flex-col gap-6 relative bg-zinc-300`}>
            <div className="flex md:flex-row gap-8 flex-col items-center justify-between mt-36 mx-[40px]">
                <div className="md:w-1/2 w-full flex flex-col">
                    <span className="font-bold">Uniqe Sequencing & Production</span>
                    <h2 className="md:text-6xl text-3xl font-bold py-2">Cloud Management</h2>
                    <span className="font-bold">This is our tech brand.</span>
                    <div className="mt-3 w-full">
                        <button className="font-bold w-1/2 bg-indigo-600 hover:bg-indigo-700 duration-300 text-white py-2 px-4 rounded-md">Get Started</button>
                    </div>
                </div>
                <div className="md:w-1/2 w-full ">
                    <img src={imgCyber} alt="imgCyber" />
                </div>
            </div>
            <div className="bg-zinc-300 md:w-1/2 w-2/3 shadow-lg px-3 py-8 mt-10 flex flex-col mx-auto gap-4 justify-center ">
                <h4 className="text-center font-bold text-2xl">Data Services</h4>
                <div className="w-full">
                    <ul className="flex justify-between">
                        <li className="flex items-center text-[10px]"><Database className="text-indigo-600 mr-3" /> App Security</li>
                        <li className="flex items-center text-[10px]"><Gauge className="text-indigo-600 mr-3" /> Dashborad Design</li>
                        <li className="flex items-center text-[10px]"><BetweenVerticalEnd className="text-indigo-600 mr-3" /> Cloud Data</li>
                        <li className="flex items-center text-[10px]"><Webhook className="text-indigo-600 mr-3" /> API Serices</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Landing