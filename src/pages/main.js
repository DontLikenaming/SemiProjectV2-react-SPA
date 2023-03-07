import {Link} from "react-router-dom";
import doggy from "../img/img.jpg"
import '../css/index.css';

const Main = () => {
    return (
        <div>
            <Link to="./zipcode">
                <img src={doggy} alt="golden" />
            </Link>
        </div>
    );
}

export default Main;