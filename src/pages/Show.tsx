import { Link, useLoaderData, Form } from "react-router-dom"

// Destructuring the props needed to get our spice, including router prop match
const Show = () => {
  const spice: any = useLoaderData()

  return (
    <div className="App">
      <div className="Header">
        <div className="flex items-center justify-between p-3 border-b-4 border-gray-500 ">
          <h1 className="text-gray-700 text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-500 from-green-700 underline underline-offset-3 decoration-8 decoration-pink-600">
              THE
            </span>{" "}
            Spice App
          </h1>
          <nav className=" text-xl pr-4">
            <Link to="/">
              <button className="m-0 rounded">Home</button>
            </Link>
          </nav>
        </div>
      </div>

      <div className="bg-white opacity-90 rounded-lg shadow-md hover:shadow-lg border mt-20 border-gray-200 m-auto w-2/5">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2">{spice.name}</h1>
          <div className="flex">
            <div className="w-1/3 m-auto">
              <img src={spice.image} alt={spice.name} className="w-60 h-auto" />
            </div>
            <div className="flex-1 p-4 w-1/2 text-center m-auto">
              <h2 className="text-lg font-semibold">{spice.description}</h2>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-md font-bold mb-2 mt-7">Update {spice.name}</h2>
            <Form action={`/update/${spice.id}`} method="post">
              <input
                type="text"
                name="name"
                placeholder="Name of Spice"
                defaultValue={spice.name}
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                defaultValue={spice.description}
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                defaultValue={spice.image}
              />

              <button className="rounded">Update</button>
            </Form>
            <Form action={`/delete/${spice.id}`} method="post">
              <button className="rounded">Delete</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Show
