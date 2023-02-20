import { Form } from "react-router-dom"
import { useState } from "react"
import SearchForm from "./Search"

// Define the type of the props object that the SideBar component expects to receive.
interface SidebarProps {
  handleFilterData: (data: any) => void
}

export default function SideBar(props: SidebarProps): any {
  // useState to clear form after submission
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  return (
    <>
      <div className="relative h-32 w-60 mt-10">
        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-200 p-4">
          <p className="text-center mb-7">
            The ultimate tool for professional and aspiring cooks alike - designed to keep
            track of all the exotic spices that are out there!
          </p>

          <SearchForm handleFilterData={props.handleFilterData} />

          <h2 className="text-md font-bold mt-10">Create a Spice</h2>
          <Form
            onSubmit={(e) => {
              setName(""), setDescription(""), setImage("")
            }}
            action="/create"
            method="post"
          >
            <input
              type="text"
              name="name"
              placeholder="Name of spice"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={image}
              onChange={(e) => {
                setImage(e.target.value)
              }}
            />
            <button className="rounded">Create New Spice</button>
          </Form>
        </div>
      </div>
    </>
  )
}
