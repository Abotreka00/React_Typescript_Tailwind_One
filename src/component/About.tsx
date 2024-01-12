
function About() {
  return (
    <div className="relative w-full py-36 bg-white">
        <div className="text-center">
            <h3 className="text-4xl py-5 md:text-6xl font-bold">Trusted by developers across the world</h3>
            <p className="opacity-90 md:w-1/2 w-[90%] mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim saepe, consectetur non laudantium alias ducimus?</p>
        </div>
        <div className="bg-white mt-[30px] w-2/3 mx-auto grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            <div className="bg-zinc-50 drop-shadow-lg py-5 px-10 text-center">
                <span className="md:text-3xl text-2xl font-bold text-indigo-600">100%</span>
                <p className="opacity-60 mt-1">Completion</p>
            </div>
            <div className="bg-zinc-50 drop-shadow-lg py-5 px-10 text-center">
                <span className="md:text-3xl text-2xl font-bold text-indigo-600">24/7</span>
                <p className="opacity-60 mt-1">Delivery</p>
            </div>
            <div className="bg-zinc-50 drop-shadow-lg py-5 px-10 text-center">
                <span className="md:text-3xl text-2xl font-bold text-indigo-600">100K</span>
                <p className="opacity-60 mt-1">Transactions</p>
            </div>
        </div>
    </div>
  )
}

export default About