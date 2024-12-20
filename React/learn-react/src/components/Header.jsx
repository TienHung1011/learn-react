import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contract">Contract</Link>
                </li>
                <li>
                    <Link></Link>
                </li>
            </ul>
        </header>
    )
}