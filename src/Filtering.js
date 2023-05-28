import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";



function Filtering() {

    const[input,setInput] = useState("")
    const [pLang,setPLang] = useState(["javaScript", "c#", "python","Java","PHP","Ruby","swift"])
    const [output,setOutput]=useState([])
    
    const handleOnchange = (value) => {
        setInput(value)
      };

    useEffect(()=>{
        const testArray = []
        pLang.forEach((l)=>{
            if(l.includes(input))
            {
                testArray.push(l)
            }
        })
        setOutput(testArray)
},[input])
    
    return ( 
        <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your filteration</Form.Label>
        <Form.Control
            onChange={(e) => {
              handleOnchange( e.target.value);
            }}
          value={input}
          type="text"
          placeholder="Enter your filter"
        />

      </Form.Group>
    </Form>

    <ul>
    {output.map((lang)=>{return(
    <li>{lang}</li>)
    })}
    </ul>
        
        </>
     );
}

export default Filtering ;