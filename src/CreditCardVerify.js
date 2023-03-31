import { useState } from "react";
function CreditCardVerify(){
    const [text,setText]=useState({s1:"", s2:"", s3:"", s4:""})
    const [status,setStatus]=useState("Invalid");
    const handleClick=(e)=>{
        e.preventDefault();
        setStatus(
            text.s1.charAt(0)==='4'?"Visa":text.s1.charAt(0)==='6'?"Master Card":"Invalid"
        );
    };
    return(
        <div>
            <div>
                <h4>Enter a Credit Card Number:</h4>
                    <input type="text"
                        value={text.s1}
                        minLength={4}
                        maxLength={4}
                        onChange={
                        (e)=>setText({...text,s1:e.target.value})
                    }
                    />
                    <input type="text"
                        value={text.s2}
                        minLength={4}
                        maxLength={4}
                        onChange={
                        (e)=>setText({...text,s2:e.target.value})
                    }
                    />
                    <input type="text"
                        value={text.s3}
                        minLength={4}
                        maxLength={4}
                        onChange={
                        (e)=>setText({...text,s3:e.target.value})
                    }
                    />
                    <input type="text"
                        value={text.s4}
                        minLength={4}
                        maxLength={4}
                        onChange={
                        (e)=>setText({...text,s4:e.target.value})
                    }
                    />
            </div>
            <button onClick={handleClick}>Check</button>
            {
                text.s1!=="" && text.s2!=="" && text.s3!=="" && text.s4!==""?
                (<h3>{`${text.s1}-${text.s2}-${text.s3}-${text.s4}`}</h3>):("")
            }
            <h3>*Your Credit Card Number is {status}*</h3>
        </div>
    )
}
export default CreditCardVerify;