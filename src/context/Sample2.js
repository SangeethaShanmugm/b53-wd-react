import { useGlobalContext } from "./context"

export function Sample2() {
    const name = useGlobalContext()

    return (
        <h1>Hi {name}</h1>
    )
}
