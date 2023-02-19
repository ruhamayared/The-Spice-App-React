import url from "./url"
import { redirect } from "react-router-dom"

// Create
export async function CreateAction({ request }: any) {
  //Get form data
  const formData = await request.formData()

  // Construct new data
  const newSpice = {
    name: formData.get("name"),
    description: formData.get("description"),
    image: formData.get("image"),
  }

  // Send request to backend
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSpice),
  })

  // Redirect back to Index page
  return redirect("/")
}

// Update
export async function UpdateAction({ request, params }: any) {
  // Get form data
  const formData = await request.formData()

  // Construct new data
  const updatedSpice = {
    name: formData.get("name"),
    description: formData.get("description"),
    image: formData.get("image"),
  }

  // Send request to backend
  await fetch(url + params.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedSpice),
  })

  // Redirect back to Index page
  return redirect("/")
}

// Delete
export async function DeleteAction({ params }: any) {
  // Send request to backend
  await fetch(url + params.id + "/", {
    method: "delete",
  })

  // Redirect back to Show page
  return redirect("/")
}
