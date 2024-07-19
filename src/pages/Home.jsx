import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div>
            <h1>Home</h1>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
     );
}
 
export default Home;