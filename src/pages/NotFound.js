import {Link} from "react-router-dom";

function NotFound(){
    return(
        <div className='h1'>
            <h1>404 Error</h1>
            <h1>Page Not Found</h1>
            <Link className='button' to='/'>Go Home</Link>
        </div>
    )
}

export default NotFound;