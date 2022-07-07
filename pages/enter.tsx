import { useState } from "react";

export default function Enter() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");
  return (
    <div className="pt-8">
      <h3 className="font-extrabold text-3xl flex justify-center">Enter to Carrot</h3>
      <div>
        <div className="p-9">
          <h5 className="text-sm font-semibold text-gray-500 flex justify-center">Enter using:</h5>
          <div className="flex justify-around border-b">
            <button onClick={onEmailClick} className="focus:border-x-emerald-600">Email address</button>
            <button onClick={onPhoneClick}>Phone number</button>
          </div>
          <form>
            <label>
              {method === "email" ? "Email address" : null}
              {method === "phone" ? "Phone number" : null}
            </label>
            <div>
              {method === "email" ? <input type="email" required /> : null}
              {method === "phone" ? (
                <div>
                  <span>+82</span>
                  <input type="number" required />
                </div>
              ) : null}
            </div>
            <button>
              {method === "email" ? "Get login link" : null}
              {method === "phone" ? "Get one-time password" : null}
            </button>
          </form>
          <div>
            <div>
              <div>
                <div />
              </div>
              <div>
                <span>Or enter with</span>
              </div>
            </div>
            <div>
              <button>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="f">트위터?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
