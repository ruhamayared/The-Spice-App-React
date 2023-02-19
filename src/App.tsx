import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="flex items-center justify-between p-3">
        <h1 className="text-black text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            THE
          </span>{" "}
          Spice App
        </h1>
        <nav className="pr-4">
          <a href="#" className="text-black hover:text-gray-400">
            Link 1
          </a>
          <a href="#" className="text-black hover:text-gray-400 ml-4">
            Link 2
          </a>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default App
