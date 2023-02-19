import { Link } from "react-router-dom"

//Defining an interface for props to let TS know what the props objects looks like
interface SpiceProps {
  spice: {
    id: number
    name: string
    description: string
    image: string
  }
}

const Spice = (props: SpiceProps) => {
  const spice = props.spice

  return (
    <div>
      <div className="">
        <img src={spice.image} alt={spice.name} className="w-full h-60" />
      </div>
      <Link to={`/spice/${spice.id}`}>
        <h1 className="text-center mt-5">{spice.name}</h1>
      </Link>
      {/* <h2>{spice.description}</h2> */}
    </div>
  )
}

export default Spice
