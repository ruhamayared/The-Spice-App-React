import Spice from "../components/Spice"
import { useLoaderData } from "react-router-dom"
import SideBar from "../components/Sidebar"

const Index = (props: any) => {
  const spices: any = useLoaderData()

  return (
    <>
      <SideBar />
      <div className="flex flex-wrap justify-center">
        {spices.map((spice: any) => (
          <div className="flex flex-wrap justify-center bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-200 pb-4 m-4 w-60">
            <Spice spice={spice} key={spice.id} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Index
