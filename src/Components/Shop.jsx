import { EyeIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Shop() {
  return (
    <>
      <section className="h-screen bg-white flex justify-center items-center" id="shop">
        <div className="container mx-auto">
          <div className="h-32 flex justify-center items-center">
            <h1 className="text-3xl font-black">Trending This Week</h1>
          </div>
          <div className="mb-10 grid grid-cols-3 gap-2">
            <div className="h-32 bg-[url('https://source.unsplash.com/random/300x300/?fashion-men')] flex justify-center items-center">
              <button className="bg-white p-2">Men&apos;s Fashion</button>
            </div>
            <div className="h-32 bg-[url('https://source.unsplash.com/random/300x300/?fashion-women')] flex justify-center items-center">
              <button className="bg-white p-2">Women&apos;s Fashion</button>
            </div>
            <div className="h-32 bg-[url('https://source.unsplash.com/random/300x300/?fashion-kids')] flex justify-center items-center">
              <button className="bg-white p-2">Kid&apos;s Fashion</button>
            </div>
          </div>
          <h1 className="text-3xl font-black">New Summer Collection 2024</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className={`product-card group bg-[url('https://source.unsplash.com/random/300x300/?fashion')]`}>
              <div className="group bottom-2 p-4 bg-slate-300 w-full bg-opacity-50 backdrop-blur-sm rounded-sm group-hover:bg-slate-200 group-hover:bg-opacity-80 transition duration-300">
                <h1 className="text-xl">Cashmere Tank + Bag</h1>
                <h1 className="text-2xl font-medium">$100</h1>
              </div>
              <div className="top-4 left-4 absolute group group-hover:opacity-100 opacity-0 transition duration-300 delay-300">
                <div className="flex gap-2 flex-col">
                  <button className="bg-slate-800 bg-opacity-50 backdrop-blur-sm p-2 hover:bg-opacity-100 hover:text-slate-200 transition duration-300">
                    <ShoppingCartIcon className="w-6 h-6" />
                  </button>
                  <button className="bg-slate-800 bg-opacity-50 backdrop-blur-sm p-2 hover:bg-opacity-100 hover:text-slate-200 transition duration-300">
                    <EyeIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div className={`product-card group bg-[url('https://source.unsplash.com/random/300x300/?car')]`}>
              <div className="group bottom-2 p-4 bg-slate-300 w-full bg-opacity-50 backdrop-blur-sm rounded-sm group-hover:bg-slate-200 group-hover:bg-opacity-80 transition duration-300">
                <h1 className="text-xl">Cashmere Tank + Bag</h1>
                <h1 className="text-2xl font-medium">$100</h1>
              </div>
              <div className="top-4 left-4 absolute group group-hover:opacity-100 opacity-0 transition duration-300 delay-300">
                <div className="flex gap-2 flex-col">
                  <button className="bg-slate-800 bg-opacity-50 backdrop-blur-sm p-2 hover:bg-opacity-100 hover:text-slate-200 transition duration-300">
                    <ShoppingCartIcon className="w-6 h-6" />
                  </button>
                  <button className="bg-slate-800 bg-opacity-50 backdrop-blur-sm p-2 hover:bg-opacity-100 hover:text-slate-200 transition duration-300">
                    <EyeIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div className={`product-card group bg-[url('https://source.unsplash.com/random/300x300/?bag')]`}>
              <div className="group bottom-2 p-4 bg-slate-300 w-full bg-opacity-50 backdrop-blur-sm rounded-sm group-hover:bg-slate-200 group-hover:bg-opacity-80 transition duration-300">
                <h1 className="text-xl">Cashmere Tank + Bag</h1>
                <h1 className="text-2xl font-medium">$100</h1>
              </div>
              <div className="top-4 left-4 absolute group group-hover:opacity-100 opacity-0 transition duration-300 delay-300">
                <div className="flex gap-2 flex-col">
                  <button className="bg-slate-800 bg-opacity-50 backdrop-blur-sm p-2 hover:bg-opacity-100 hover:text-slate-200 transition duration-300">
                    <ShoppingCartIcon className="w-6 h-6" />
                  </button>
                  <button className="bg-slate-800 bg-opacity-50 backdrop-blur-sm p-2 hover:bg-opacity-100 hover:text-slate-200 transition duration-300">
                    <EyeIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
