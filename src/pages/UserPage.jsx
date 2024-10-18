import { useParams, Link } from "react-router-dom"

export default function UserPage() {
    const { id } = useParams()


    console.log(id);


    return (
        <>
            <h1>User Page</h1>
            <Link to={`/users/${id}}`} >Usuario {id}</Link>
        </>
    )
}