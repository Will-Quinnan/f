import "./about.css";
import { useEffect , useState } from 'react';



function About() {

    const [visible, setVisable] = useState(false);
    const [phoneVisible, setPhoneVisable] = useState(false);

    function getEmail() {
        return visible ? 'wmplqnjr@gmail.com' : '';
        }
    
    function toggleEmail(){
        setVisable (!visible)
    }

    function validateCode(e){
        const text = e.target.value;
        if ( text.toLowerCase() === "h47") {
            setPhoneVisable(true);
        }else {
            setPhoneVisable(false)
        }

        
        
    }

    function getPhone() {
        return phoneVisible ? '(777)777-7777': 'Invalid Code'
    }


    return (
        
    <div className = "about">
        <h2>About me</h2>
        <h4>Will Q</h4>
        <h6>{getEmail()}</h6>
        <button  onClick={toggleEmail} className="btn btn-sm btn-dark">Click to see email</button>
        
        <hr />
        <p>Type the code to see phone number</p>
        <input onChange={validateCode} placeholder="code"></input>

        <h6 className= 'mt-3'>{getPhone()}</h6>

    </div>
    );
}

export default About