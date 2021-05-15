import React from 'react';
import "./App.css";

const Detail =({ nutrition,subminewtd
    }
) =>{
    return(
    <div id="detail" style={{background:"whitesmoke"}}>
        {
            // (!subminewtd) ? document.getElementById("detail").style.display="none":

           (nutrition.calories===0)? <div class="text-danger"
            style={{backgroundColor:"rgb(230, 205, 180)",marginTop:"50%",borderLeftStyle:"solid",borderWidth:"5px", padding:"2px"}}>
                Sorry! we could not fetch details for the food items entered by you!
                Please enter the correct spellings of the food items and separate each item with commas</div>
                :<div style={{background:"white"}}>
                    <h2  style={{backgroundColor:"white",margin:"auto"}}>Nutritional Facts</h2>
                        
               <table  style={{backgroundColor:"white",margin:"auto",textAlign:"left"}}>
               
                   <thead style={{fontSize:"0px"}}></thead>
                   <tbody>
                   <tr>
                       <th className="calo" >Calories</th>
                       <td className="calo" style={{borderLeft:"0px",borderRight:"0px", borderBottom:"3px solid black"}}></td><td style={{borderLeft:"0px"}} className="calo">{nutrition.calories}</td>
                   </tr>
                   <tr>
                       <td style={{border:"0px"}}></td><td style={{border:"0px"}}></td><td >%Daily value</td>
                   </tr>
                   <tr>
                       <th >Total Fat</th>
                       <td className="newtd" >{nutrition.totalFat}{nutrition.UtotalFat}</td>
                       <td className="newtd" >{nutrition.DtotalFat}%</td>
                   </tr>
                   <tr>
                       <td className="newtd" >Saturated fat</td>
                       <td className="newtd" >{nutrition.saturatedFat}{nutrition.UsaturatedFat}</td>
                       <td className="newtd" >{nutrition.DsaturatedFat}%</td>
                   </tr>
                   <tr>
                       <th>Cholestrol</th>
                       <td className="newtd">{nutrition.cholestrol}{nutrition.Ucholestrol}</td>
                       <td className="newtd">{nutrition.Dcholestrol}%</td>
                   </tr>
                   <tr>
                       <th>Sodium</th>
                       <td className="newtd">{nutrition.sodium}{nutrition.Usodium}</td>
                       <td className="newtd">{nutrition.Dsodium}%</td>
                   </tr>
                   <tr>
                       <th>Total Carbohydrates</th>
                       <td className="newtd">{nutrition.carbohydrate}{nutrition.Ucarbohydrate}</td>
                       <td className="newtd">{nutrition.Dcarbohydrate}%</td>
                   </tr>
                   <tr>
                       <td className="newtd">Dietary Fibre</td>
                       <td className="newtd">{nutrition.fibre}{nutrition.Ufibre}</td>
                       <td className="newtd">{nutrition.Dfibre}%</td>
                   </tr>
                   <tr>
                       <td className="newtd">Total Sugars</td>
                       <td className="newtd">{nutrition.sugar}{nutrition.Usugar}</td>
                       <td className="newtd">{nutrition.Dsugar}%</td>
                   </tr>
                   <tr>
                       <th>Protein</th>
                       <td className="newtd">{nutrition.protein}{nutrition.Uprotein}</td>
                       <td className="newtd">{nutrition.Dprotein}%</td>
                   </tr>
                   <tr>
                       <td className="newtd">Vitamin D</td>
                       <td className="newtd">{nutrition.vitaminD}{nutrition.UvitaminD}</td>
                       <td className="newtd">{nutrition.DvitaminD}%</td>
                   </tr>
                   <tr>
                       <td className="newtd">Calcium</td>
                       <td className="newtd">{nutrition.calcium}{nutrition.Ucalcium}</td>
                       <td className="newtd">{nutrition.Dcalcium}%</td>
                   </tr>
                   <tr>
                       <td className="newtd">Iron</td>
                       <td className="newtd">{nutrition.iron}{nutrition.Uiron}</td>
                       <td className="newtd">{nutrition.Diron}%</td>
                   </tr>
                   <tr>
                       <td className="newtd">Potassium</td>
                       <td className="newtd">{nutrition.potassium}{nutrition.Upotassium}</td>
                       <td className="newtd">{nutrition.Dpotassium}%</td>
                   </tr>
                   </tbody>
                   
                   
               </table>
               <span>*Percent Daily Values are based on a 2000 calorie diet</span>
           </div>
           
        }
    
        
    </div>

    );

}

export default Detail;
