import { useNavigate, Link, Outlet } from "react-router-dom"




export default function Dashboard() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <>
            <Outlet></Outlet>
            <h1>Dashboard</h1>

            <Link to='wellcome'>IR A LA BIENBENIDA</Link>
            <button onClick={handleClick} className="Button" >Logot</button>

        </>
    )
} 