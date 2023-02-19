import Spice from "../components/Spice";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props: any) => {
  const spices: any = useLoaderData()
  // For each spice in the array render a Spice component
  return <>
   <h2>Create a Spice</h2>
  <Form action="/create" method="post">
      <input type="text" name="name" placeholder="Name of spice"/>
      <input type="text" name="description" placeholder="Description"/>
      <input type="text" name="image" placeholder="Image URL"/>
      <button>Create New Spice</button>
  </Form>
  {spices.map((spice: any) => <Spice spice={spice} key={spice.id} />)}
  </>
};

export default Index;