import {Link} from "react-router-dom";

function ErrorMessage(){

    const refreshPage=()=> {
        window.location.reload(false);
    }

    return (
        <div className='loadingWrapper errMessage'>
           <h3>
               Something went wrong, please reload the page or Go home!
               <div className='buttonList'>
                   <button className='button' onClick={refreshPage}>
                       Click to reload!
                   </button>
                   <Link className='button' to='/'>Go Home</Link>
               </div>

           </h3>

        </div>
    )
}
export default ErrorMessage;