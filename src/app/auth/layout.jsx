
export default function AuthLayout({ children }) {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-3/5 bg-indigo-200">
          <div className="flex flex-col gap-y-80 justify-between py-24 px-24">
            <h1 className="text-4xl font-bold text-indigo-600">
              Opulent Hub
            </h1>
            <div className="flex flex-col gap-1">
              <h2 className="text-xl">
                Welcome To
              </h2>
              <h1 className="text-3xl">
                Opulent Hub Community
              </h1>
              <p className="text-sm max-w-96">
                Quodsi haberent magnalia inter potentiam et divitias, et non illam quidem haec eo spectant
              </p>
              <a href="/about" className="text-indigo-500">
                Know More
              </a>
            </div>
          </div>
        </div>
        <div className="w-2/5 bg-white">
          {children}
        </div>
      </div>
    </>
  )
}