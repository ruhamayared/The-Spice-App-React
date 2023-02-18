import { Link } from "react-router-dom"

//Defining an interface for props to let TS know what the props objects looks like
interface SpiceProps {
  spice:{
    id: number,
    name: string,
    description: string,
    image: string,
}
  }

const Spice = (props: SpiceProps) => {
  const spice = props.spice

  return (
    <div>
    <img src={spice.image} alt={spice.name} />
      <Link to={`/post/${spice.id}`}>
        <h1>{spice.name}</h1>
      </Link>
      <h2>{spice.description}</h2>
    </div>
  )
}

export default Spice
