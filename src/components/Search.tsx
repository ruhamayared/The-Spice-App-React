import { useState, useEffect } from "react"
import Spice from "./Spice"
import url from "../url"

// Define the shape of the "Spices" object that represents each individual spice.
interface Spices {
  id: number
  name: string
  description: string
  image: string
}

// Define the type of the props object that the SearchForm component expects to receive.
interface SearchFormProps {
  handleFilterData: (data: Spices[]) => void
}

export default function SearchForm({ handleFilterData }: SearchFormProps) {
  // Define three pieces of state: the current search query, the list of all spices, and the filtered list of spices.
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [spices, setSpices] = useState<Spices[]>([])
  const [filteredData, setFilteredData] = useState<Spices[]>([])

  // Use the useEffect hook to fetch the list of spices from the server when the component renders.
  useEffect(() => {
    async function fetchSpices() {
      const response = await fetch(url)
      const data = await response.json()
      setSpices(data)
      setFilteredData(data)
    }
    fetchSpices()
  }, [])

  // Define a function that filters the list of spices by name, updates the filteredData state, and calls the handleFilterData prop with the filtered list.
  function handleSearch() {
    const filtered = spices.filter((item: Spices) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredData(filtered)
    handleFilterData(filtered)
  }

  // Define a function that resets the filteredData state and search query to their initial values, and calls the handleFilterData prop with the unfiltered list.
  function handleReset() {
    setFilteredData(spices)
    setSearchQuery("")
    handleFilterData(spices)
  }

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <div className="flex space-x-2">
        <button className="text-white font-bold py-2 px-4 rounded" onClick={handleSearch}>
          Search
        </button>
        <button className="text-white font-bold py-2 px-4 rounded" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}
