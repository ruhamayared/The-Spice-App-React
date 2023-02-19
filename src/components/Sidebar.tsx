import { Form } from "react-router-dom"
import { useState } from "react"

export default function SideBar(): any {
  // useState to clear form after submission
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  // Search for spices function
  // function searchSpice(string: any) {
  //   return spices.filter((spice: any) => {
  //     if (spice.name.includes(string)) {
  //       return true
  //     }
  //     return false
  //   })
  // }

  return (
    <>
      <div className="fixed top-20 bottom-20 left-0 h-screen w-40 m-0 flex flex-col shadow-lg bg-slate-500">
        <p>
          The ultimate tool for professional and aspiring cooks alike - designed to keep track
          of all the exotic spices that are out there!
        </p>
        <div>
          <form>
            <input type="text" className="search" name="name" placeholder="Search spices" />
            <button className="search-button">🔍</button>
          </form>

          <h2>Create a Spice</h2>
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
            <button>Create New Spice</button>
          </Form>
        </div>
      </div>
    </>
  )
}
