import axios from "axios";
import { useState, useEffect } from "react";
import ReceptList from "./ReceptList";


function Form() {
  const [api, setApi] = useState([]);
  const [inputText, setInputText] = useState('');
  const [selected, setSelected] = useState();
  const [active, setActive] = useState (false)
  


  
  const handleSelect = (receptas) => {
    setActive(false)
    setSelected(receptas)}
    
  const handleInputChange = (event) => {
      setActive(true)
      setInputText(event.target.value)
    }
  useEffect(() => {
    axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
      .then(res => {
        console.log(res.data);
        setApi(res.data.meals)
      });

  }, [inputText]);

  return (
    <>
      <input  className="input_search"
              placeholder="Enter recept name.." 
              onChange={(event) => handleInputChange(event)}
              type="text" />  
              <div className="button_out">             
             <button  onClick={inputText} className="clickme">Bon appetit!</button>
              </div>   
                                                     
          {api.length > 0 && active? 
            api.slice(0, 1).map(receptas => (
              <p className="onclick" onClick={() => handleSelect(receptas)}             
                 key={receptas}>           
               {receptas.strMeal}                                      
              </p>
            ))
          : ''}                    
        {selected && <ReceptList receptas={selected} />} 
    
    </>
  )
}
export default Form;