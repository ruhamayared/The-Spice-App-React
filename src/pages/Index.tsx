import Spice from "../components/Spice"
import { useLoaderData } from "react-router-dom"
import SideBar from "../components/Sidebar"
import { useEffect, useState } from "react"

const Index = () => {
  const spices: any = useLoaderData()
  const [filteredData, setFilteredData] = useState(spices)

  // Takes in an object as a parameter and calls setFilteredData to update the filteredData state variable.
  function handleFilterData(filteredData: any) {
    setFilteredData(filteredData)
  }

  // Add a useEffect hook to listen for changes to the spices array and update filteredData accordingly.
  useEffect(() => {
    setFilteredData(spices)
  }, [spices])

  const currentSpices = spices

  return (
    <>
      <div className="Header">
        <div className="flex items-center justify-between p-3 border-b-4 border-gray-500 ">
          <h1 className="text-gray-700 text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-500 from-green-700 underline underline-offset-3 decoration-8 decoration-pink-600">
              THE
            </span>{" "}
            Spice App
          </h1>
        </div>
      </div>

      <div className="contianer">
        <div className="main">
          <div className="sidebar">
            <SideBar handleFilterData={handleFilterData} currentSpices={currentSpices} />
          </div>

          <div className="flex flex-wrap justify-center mt-5">
            {filteredData
              .sort((a: any, b: any) => a.id - b.id)
              .map((spice: any) => (
                <div
                  key={spice.id}
                  className="flex bg-white opacity-90 rounded-lg shadow-md hover:shadow-lg border border-gray-200 pb-4 m-4 w-60 max-h-cardHeight"
                >
                  <Spice spice={spice} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
