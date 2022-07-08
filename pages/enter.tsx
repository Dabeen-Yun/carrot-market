import { useState } from "react";

function cls(...classnames: string[]) {
  return classnames.join(" ");
}

export default function Enter() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");
  return (
    <div className="mt-16 w-11/12 m-auto">
      <h3 className="font-extrabold text-3xl flex justify-center">
        Enter to Carrot
      </h3>
      <div>
        <div>
          <h5 className="p-8 text-sm font-semibold text-gray-500 flex justify-center">
            Enter using:
          </h5>
          <div className="flex justify-around border-b w-full mb-7">
            <button
              className={cls(
                "pb-4 font-medium", //기본적으로 들어가는 classname
                method === "email"
                  ? "border-b-2 border-orange-500 text-orange-400" // method가 email일 때 들어가는 classname
                  : "border-transparent" //method가 phone일 때 들어가는 classname
              )}
              onClick={onEmailClick}
            >
              Email address
            </button>
            <button
              className={cls(
                "pb-4 font-medium",
                method === "phone"
                  ? "border-b-2 border-orange-500 text-orange-400"
                  : "border-transparent"
              )}
              onClick={onPhoneClick}
            >
              Phone number
            </button>
          </div>
        </div>
        <div>
          <form>
            <label className="font-semibold text-sm">
              {method === "email" ? "Email address" : null}
              {method === "phone" ? "Phone number" : null}
            </label>
            <div className="mt-3">
              {method === "email" ? (
                <input
                  className="appearance-none w-full rounded-lg 
                  placeholder:text-gray-300 
                  focus:border-orange-500 focus:border-2 foucs:outline-none focus:ring-0
                  hover:brightness-90"
                  type="email"
                  required
                />
              ) : null}
              {method === "phone" ? (
                <div className="flex rounded-md shadow-sm">
                  <span className="flex justify-center items-center border border-gray-300 px-3 rounded-l-md bg-gray-100">
                    +82
                  </span>
                  <input
                    className="flex w-full rounded-r-md appearance-none py-2 border-gray-300
                    placeholder:text-gray-300 
                    focus:border-orange-500 focus:border-2 foucs:outline-none focus:focus:ring-0
                      hover:brightness-90"
                    type="number"
                    required
                  />
                </div>
              ) : null}
            </div>
            <button className="bg-orange-500 rounded-lg border border-gray-600 shadow-lg text-white text-sm font-semibold w-full mt-7 py-2 focus:outline-none focus:brightness-90">
              {method === "email" ? "Get login link" : null}
              {method === "phone" ? "Get one-time password" : null}
            </button>
          </form>
          <div>
            <div>
              <div>
                <div />
              </div>
              <div className="mt-10 flex justify-center">
                <span className="font-semibold text-xs text-gray-500">
                  Or enter with
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <button className="border border-gray-300 w-1/2 mr-4 rounded-lg flex items-center justify-center shadow-sm">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="border border-gray-300 w-1/2 rounded-lg p-3 flex justify-center shadow-sm">
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M 8 0 C 3.58 0 0 3.58 0 8 c 0 3.54 2.29 6.53 5.47 7.59 c 0.4 0.07 0.55 -0.17 0.55 -0.38 c 0 -0.19 -0.01 -0.82 -0.01 -1.49 c -2.01 0.37 -2.53 -0.49 -2.69 -0.94 c -0.09 -0.23 -0.48 -0.94 -0.82 -1.13 c -0.28 -0.15 -0.68 -0.52 -0.01 -0.53 c 0.63 -0.01 1.08 0.58 1.23 0.82 c 0.72 1.21 1.87 0.87 2.33 0.66 c 0.07 -0.52 0.28 -0.87 0.51 -1.07 c -1.78 -0.2 -3.64 -0.89 -3.64 -3.95 c 0 -0.87 0.31 -1.59 0.82 -2.15 c -0.08 -0.2 -0.36 -1.02 0.08 -2.12 c 0 0 0.67 -0.21 2.2 0.82 c 0.64 -0.18 1.32 -0.27 2 -0.27 c 0.68 0 1.36 0.09 2 0.27 c 1.53 -1.04 2.2 -0.82 2.2 -0.82 c 0.44 1.1 0.16 1.92 0.08 2.12 c 0.51 0.56 0.82 1.27 0.82 2.15 c 0 3.07 -1.87 3.75 -3.65 3.95 c 0.29 0.25 0.54 0.73 0.54 1.48 c 0 1.07 -0.01 1.93 -0.01 2.2 c 0 0.21 0.15 0.46 0.55 0.38 A 8.013 8.013 0 0 0 16 8 c 0 -4.42 -3.58 -8 -8 -8 Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
