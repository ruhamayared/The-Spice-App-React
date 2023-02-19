import Spice from "../components/Spice";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";
import { useState } from "react";

const Index = (props: any) => {
  const spices: any = useLoaderData()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")


  // For each spice in the array render a Spice component
  return <>
   <h2>Create a Spice</h2>
  <Form onSubmit={(e) => {
    setName(""),
    setDescription(""),
    setImage("")
  }} action="/create" method="post">
      <input type="text" name="name" placeholder="Name of spice" value={name} onChange={e => {setName(e.target.value)}}/>
      <input type="text" name="description" placeholder="Description" value={description} onChange={e => {setDescription(e.target.value)}}/>
      <input type="text" name="image" placeholder="Image URL" value={image} onChange={e => {setImage(e.target.value)}}/>
      <button>Create New Spice</button>
  </Form>
  {spices.map((spice: any) => <Spice spice={spice} key={spice.id} />)}
  </>
};

export default Index;