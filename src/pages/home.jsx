import { Link } from "react-router-dom";
import "./home.css";

function Home() {

    return (
    <div className = "home">
        <h1>Welcome To Fishfillet</h1>
        <h4>Easy to portion 1 lb fillets </h4>


    <Link className="btn btn-success" to="/catalog">Check our amazing catalog</Link>

    </div>
    );
}

export default Home