import { Link, useLoaderData, Form } from "react-router-dom";

// Destructuring the props needed to get our spice, including router prop match
const Show = () => {
  const spice: any = useLoaderData();

  return (
    <div>
      <h1>{spice.name}</h1>
      <img src={spice.image} alt={spice.name} />
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

      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;