import { useState } from "react"
import { Form } from "react-router-dom"

// Define an interface to specify the props that the CreateForm component will recieve.
interface CreateFormProps {
  handleCreateSpice: (event: React.FormEvent<HTMLFormElement>) => void
}

export default function CreateForm(props: CreateFormProps) {
  // useState to clear form after submission
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [image, setImage] = useState<string>("")

  return (
    <>
      <div>
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
    </>
  )
}
