import Spice from "../components/Spice";
import {useLoaderData} from "react-router-dom"

const Index = (props: any) => {
  const spices: any = useLoaderData()
  // For each spice in the array render a Spice component
  return spices.map((spice: any) => <Spice spice={spice} key={spice.id} />);
};

export default Index;