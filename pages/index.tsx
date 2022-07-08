import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        <div
          key={i}
          className="py-8 px-4 flex flex-row justify-between border-b shadow-sm select-none"
        >
          <div className="flex flex-row space-x-4">
            <div className="h-24 w-24 bg-gray-400 rounded-lg shadow-sm" />
            <div className="flex flex-col justify-center">
              <h3 className="font-semibold text-md">New iPhone 14</h3>
              <span className="text-gray-500 text-sm">Black</span>
              <span className="text-lg font-bold mt-3">$95</span>
            </div>
          </div>
          <div className="flex flex-row space-x-1 items-end text-gray-500">
            <div className="flex flex-row space-x-1 mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>1</span>
            </div>
            <div className="flex flex-row space-x-1 mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>1</span>
            </div>
          </div>
        </div>
      ))}
      <button
        className="fixed bottom-24 right-5 bg-orange-400 rounded-full p-3 text-white
      hover:bg-orange-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
};

export default Home;
