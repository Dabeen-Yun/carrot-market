import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 xl:place-content-center py-20 px-20 gird gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen select-none">
      <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col justify-between">
        <span className="font-semibold text-2xl">Select Item</span>
        <div className="flex justify-between my-1">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$170</span>
        </div>
        <div className="flex justify-between my-1">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$800</span>
        </div>
        <div className="flex justify-between border-t-2 border-dashed">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">$970</span>
        </div>
        <div className="flex mx-auto w-fit">
          <button
            className="bg-blue-500 text-white text-center mt-3 rounded-xl py-3 px-11
          hover:bg-teal-500 hover:text-black
          active:bg-yellow-500"
          >
            Checkout
          </button>
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl my-10 group">
        <div className="bg-blue-500 p-6 pb-16 flex justify-between">
          <span className="text-white text-xl">Profile</span>
        </div>
        <div className="bg-white rounded-3xl p-6 pb-0 relative -top-5">
          <div className="flex justify-between items-end relative -top-16">
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-sm">Orders</span>
              <span className="text-medium font-semibold">340</span>
            </div>
            <div className="h-24 w-24 bg-green-800 rounded-full group-hover:h-28 group-hover:w-28 transition-all"></div>
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-sm">Spent</span>
              <span className="font-semibold">$2,310</span>
            </div>
          </div>
          <div className="relative -top-16 flex flex-col items-center mt-5 -mb-12">
            <span className="text-lg font-medium">Dabeen Yun</span>
            <span className="text-sm text-gray-500">Korea</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-xl my-10 lg:col-span-2 xl:col-span-1">
        <div className="flex flex-row justify-between mb-5">
          <span className="shadow-sm">←</span>
          <div>
            <span className="m-3">⭐ 4.9</span>
            <span className="shadow-sm p-2 rounded-md">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-80 mb-5" />
        <div className="flex flex-col mb-1.5">
          <span className="font-semibold text-m">Swoon Lounge</span>
          <span className="text-gray-500 text-xs font-medium">Chair</span>
        </div>
        <div className="flex felx-row justify-between items-center">
          <div className="space-x-2 pt-2.5">
            <button className="w-5 h-5 rounded-full bg-yellow-500" />
            <button className="w-5 h-5 rounded-full bg-indigo-500" />
            <button className="w-5 h-5 rounded-full bg-teal-500" />
          </div>
          <div className="space-x-2">
            <button className="p-1 bg-slate-100 rounded-lg aspect-square">
              ➖
            </button>
            <span className="shadow-sm p-1 rounded-md">1</span>
            <button className="p-1 bg-slate-100 rounded-lg aspect-square">
              ➕
            </button>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold">$450</span>
          <button className="bg-blue-500 rounded-lg px-7 py-1 text-m text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
