
function ReceptList({ receptas }) {
    return (
        <div className='column_list'>
            <div className="row_list">
                    <div className="left_side">
                    {Object.keys(receptas).map((key, i) => {

                      if (
                        key.substring(0, 10) === "strMeasure" &&
                        receptas[key] !== "" &&
                        receptas[key] !== null &&
                        receptas[key] !== " "
                        )
                        {
                          return <p className="left_paragraph" key={i}>{receptas[key]}</p>;
                        }
                      })}
                    </div>
                    <img className="img" src={receptas.strMealThumb} alt="" />

                   <div className="right_side">
                   {Object.keys(receptas).map((key, i) => {
                     
                      if (
                        key.substring(0, 13) === "strIngredient" &&
                        receptas[key] !== "" &&
                        receptas[key] !== null &&
                        receptas[key] !== " "
                        )
                        {
                          return <p className="right_paragraph"  key={i}>{receptas[key]}</p>;
                        }
                      })}
                   </div>    
                                
            </div >  
            <div className="click_like">
              
            <h2  >
                    Click like if you like
            </h2>   
            </div> 
        </div>  
        
       )
       
   }
   export default ReceptList;
                  
                  

                
                    

                
                   
                        
                 
                  
                        
                 

