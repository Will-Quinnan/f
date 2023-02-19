import "./404.css"



function NotFound() {

    return(
    <div className="notFound">
        <img className='img' src="./images/dory.webp" alt="404" /> 
       
        <div className="notFound imgtext">
            <h1>Error</h1>
            <h1>'404'</h1>
            <h2>You seem to have forgotten where you were going</h2>
        </div>

        <div className='error-link'>

        <a className='btn btn-dark' href='home'>
            Go back Home
        </a>

        </div>
    </div>
    
    );
}

export default NotFound;