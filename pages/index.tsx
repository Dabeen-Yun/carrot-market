import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-20 gird gap-10">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
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
        <div className="bg-blue-500 text-white text-center mt-3 mx-auto rounded-xl py-3 w-1/2">
          Checkout
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl my-10">
        <div className="bg-blue-500 p-6 pb-16">
          <span className="text-white text-xl">Profile</span>
        </div>
        <div className="bg-white rounded-3xl p-6 pb-0 relative -top-5">
          <div className="flex justify-between items-end relative -top-16">
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-sm">Orders</span>
              <span className="text-medium font-semibold">340</span>
            </div>
            <div className="h-24 w-24 bg-green-800 rounded-full"></div>
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
      <div className="bg-white p-6 rounded-2xl shadow-xl my-10"></div>
      <div className="bg-white p-6 rounded-2xl shadow-xl my-10"></div>
    </div>
  );
};

export default Home;
