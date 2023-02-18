import url from "./url"

export async function IndexLoader() {
  const response = await fetch(url)
  const spices = await response.json()
  console.log("Index loader:", spices)
  return spices
}

export async function ShowLoader({ params }: any) {
  const response = await fetch(url + params.id + "/")
  const spice = await response.json()
  console.log("Show loader:", spice)
  return spice
}
