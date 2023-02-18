import url from "./url"
import { redirect } from "react-router-dom"

// Create
export async function createAction({ request }: any) {
  //Get form data
  const formData = await request.formData()

  // Construct new data
  const newSpice = {
    subject: formData.get("subject"),
    details: formData.get("details"),
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
export async function updateAction({ request, params }: any) {
  // Get form data
  const formData = await request.formData()

  // Construct new data
  const updatedSpice = {
    subject: formData.get("subject"),
    details: formData.get("details"),
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
export async function deleteAction({ params }: any) {
  // Send request to backend
  await fetch(url + params.id + "/", {
    method: "delete",
  })

  // Redirect back to Show page
  return redirect("/")
}
