import './404.css';



function NotFound() {

    return(
    <div className=".notFound">
        <img src="/images/404.png" alt="404" /> 
        
        <div className='error-link'>
        <a className='btn btn-dark' href='home'>
            Go back Home
        </a>

        </div>
    </div>
    
    );
}

export default NotFound;