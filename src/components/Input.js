import React from 'react';

const Input =({input,submit,nutrition,ip,clear}) =>{
    return(
<div>
<div class =""style={{ margin:"auto",borderRadius:"4%",}}>
        <div style={{borderTop:"2em"}}>
            <h6>Enter an ingredient list for what you are cooking, like "1 cup rice, 10 oz chickpeas", etc.<br></br>
Enter each ingredient separated by commas.</h6>
            <textarea onChange={input} id="input" cols="30" rows="7" style={{background:"beige",margin:"auto"}} placeholder="1 cup rice,
10 oz chickpeas"/>
            <br></br>
            <button onClick={submit} className= "button2">Analyze</button>&emsp;&emsp;&emsp; <button onClick={clear} className="btn btn-info">New Recipe</button>
        </div>
        <div>
            {
                (nutrition!==[] && ip!==[]) ? <div>
                    <tr>{
                        nutrition.forEach(nutri => {
                            <td>{nutri.totalNutrientsKCal.ENERC_KCAL.quantity}</td>
                        })
                        }
                        {
                            ip.forEach(element => {
                                <td>{element}</td>
                            })
                        }
                    </tr>
                    
                </div>
                :<span></span>
            }
        </div>
        {/* {(nutrition.calories===0)? <div class="text-danger" style={{backgroundColor:"rgb(230, 205, 180)",marginTop:"5em", margin:"auto",borderLeftStyle:"solid",borderWidth:"5px", padding:"2px"}}>Sorry! we could not fetch details for the food items entered by you!Please enter the correct spellings of the food items and separate each item with commas</div> :<div style={{background:"white"}}></div>} */}
    </div>
</div>
    );
    

}

export default Input;