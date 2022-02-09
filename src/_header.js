import { Link } from "react-router-dom";

const _header = ({user}) => {
    if (!user) {
        return (
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/login">log in</Link></li>
                <li><Link to="/signin">sig in</Link></li>
            </ul>
        )
    } else {
        // think on the edit author and logout logic
        return (
            <ul>
                <li><Link to="/">home</Link></li>

                <li><Link to="">Edit author info</Link></li>
                <li><Link to="">log out</Link></li>
            </ul>
        )
    }
}

export default _header;