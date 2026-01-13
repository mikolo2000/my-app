import { useState } from "react";

function InputText (props){
    const [value, setValue] = useState("");
    const handleChange = (e) =>{
        setValue(e.target.value);
        props.onChange(e.target.value)
    }
    
    return(
        <div>
            <input type={props.type} onChange={handleChange} value={value}/>
            <p className="errorMessage">{props.errorMessage || "No message yet"}</p>
        </div>
        
    );
}


export default InputText; 