import { useContext } from "react"
import { ProfileNameContext } from "./ExampleContext"

//custom hooks
export const useGlobalContext = () => {
    return useContext(ProfileNameContext)
}