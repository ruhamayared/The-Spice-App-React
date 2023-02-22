import { Form } from "react-router-dom"
import { useState } from "react"
import SearchForm from "./Search"
import CreateForm from "./CreateForm"
import { Spices } from "../types/types"

// Define the type of the props object that the SideBar component expects to receive.
interface SidebarProps {
  handleFilterData: (data: Spices[]) => void
}

export default function SideBar(props: SidebarProps): any {
  return (
    <>
      <div className="h-32 w-60 mt-10">
        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-200 p-4">
          <p className="text-center mb-7">
            The{" "}
            <span className="underline underline-offset-2 decoration-2 decoration-pink-600">
              ultimate tool
            </span>{" "}
            for professional and aspiring cooks alike - designed to keep track of all the
            exotic spices that are out there!
          </p>

          <SearchForm handleFilterData={props.handleFilterData} />
          <CreateForm />
        </div>
      </div>
    </>
  )
}
