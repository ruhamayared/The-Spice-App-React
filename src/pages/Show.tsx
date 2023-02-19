import { Link, useLoaderData, Form } from "react-router-dom"

// Destructuring the props needed to get our spice, including router prop match
const Show = () => {
  const spice: any = useLoaderData()

  return (
    <div className="App">
      <div className="Header">
        <div className="flex items-center justify-between p-3 border-b-4 border-gray-400 ">
          <h1 className="text-gray-700 text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-500 from-green-700 underline underline-offset-3 decoration-8 decoration-pink-600">
              THE
            </span>{" "}
            Spice App
          </h1>
          <nav className=" text-xl pr-4">
            <Link to="/">
              <button className="m-0">Home</button>
            </Link>
          </nav>
        </div>
      </div>

      <div className="flex justify-center content-center bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-200 pb-10 m-auto w-1/2">
        <h1>{spice.name}</h1>
        <img src={spice.image} alt={spice.name} className="w-60 h-auto" />
        <h2>{spice.description}</h2>
        <div>
          <h2>Update {spice.name}</h2>
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
            <button>Update {spice.name}</button>
          </Form>
          <Form action={`/delete/${spice.id}`} method="post">
            <button>Delete {spice.name}</button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Show
