import Spice from "../components/Spice"
import { useLoaderData } from "react-router-dom"
import SideBar from "../components/Sidebar"

const Index = (props: any) => {
  const spices: any = useLoaderData()

  return (
    <>
      <div className="Header">
        <div className="flex items-center justify-between p-3 border-b-4 border-gray-400 ">
          <h1 className="text-gray-700 text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-500 from-green-700 underline underline-offset-3 decoration-8 decoration-pink-600">
              THE
            </span>{" "}
            Spice App
          </h1>
        </div>
      </div>

      <SideBar />

      <div className="flex flex-wrap justify-center w-3/4 m-auto">
        {spices.map((spice: any) => (
          <div className="flex bg-white opacity-90 rounded-lg shadow-md hover:shadow-lg border border-gray-200 pb-4 m-4 w-60">
            <Spice spice={spice} key={spice.id} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Index
