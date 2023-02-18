import { Link, useLoaderData } from "react-router-dom";

// Destructuring the props needed to get our spice, including router prop match
const Show = () => {
  const spice: any = useLoaderData();

  return (
    <div>
      <h1>{spice.name}</h1>
      <img src={spice.image} alt={spice.name} />
      <h2>{spice.description}</h2>

      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;