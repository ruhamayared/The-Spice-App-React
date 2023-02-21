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
      <div>
        <img src={spice.image} alt={spice.name} className="h-60 rounded-lg" />
      </div>
      <Link to={`/spice/${spice.id}`}>
        <h1 className="text-center mt-5 text-lg font-medium hover:text-orange-500">
          {spice.name}
        </h1>
      </Link>
    </div>
  )
}

export default Spice
