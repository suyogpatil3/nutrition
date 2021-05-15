
import './App.css';
import background from './image/img4.jpg';
import icon from './image/icon.png';
import React from 'react';
import Detail from './Detail';
import Input from './Input';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends React.Component{

  constructor(){
    
    super();
    this.check=undefined;
    this.errorArray=[];
    this.ip = "";
    this.receivedData=[];
    this.array1=[];
    let check = undefined;
    this.state = {
      input:[],
      error:[],
      evalue:"",
      totalNutrition:[],
      submitData:false,
      analyze:false,
      dataAPI:[]
    }

  }

  onInput=(event)=>{
    this.ip=event.target.value;
  }

  onSubmit=()=>{
      
      if(this.ip!==""){
        this.array1 = this.ip.split(",");
        this.setState({input:this.array1});
        this.setState({submitData:true});
        this.getDetails();
      }
     
  }
     getDetails=()=>{
       let i=0;
       let array = this.array1;
      Promise.all(array.map(value =>{
        return fetch(`https://api.edamam.com/api/nutrition-data?app_id=431de160&app_key=f4fc15a8dd8fca27b666d892fbf5486a&ingr=${value}`)
        .then( response =>{
          if(response.ok){
            return response.json();
          }
        })
        .then(data =>{
          // this.processData(data);
          return data;
        })
        .catch((error) => {
          this.errorMsg(value);
        });
      }))
      .then(dataReceived =>{
        this.setState({dataAPI:dataReceived});
        this.receivedData=this.processData(dataReceived);
      })
  }

  onAnalyze=()=>{
    this.setState({analyze:true});
  }

  onClear(){
    window.location.reload();
  }
  processData(data){
   
    let  nutrition= {
      calories: 0,
      totalFat:0,
      saturatedFat:0,
      monoUnsaturatedFat:0,
      polyUnsaturatedFat:0,
      cholestrol:0,
      sodium:0,
      carbohydrate:0,
      fibre:0,
      sugar:0,
      protein:0,
      vitaminD:0,
      calcium:0,
      iron:0,
      potassium:0,
      
      DtotalFat:0,
      DsaturatedFat:0,
      DmonoUnsaturatedFat:0,
      DpolyUnsaturatedFat:0,
      Dcholestrol:0,
      Dsodium:0,
      Dcarbohydrate:0,
      Dfibre:0,
      Dsugar:0,
      Dprotein:0,
      DvitaminD:0,
      Dcalcium:0,
      Diron:0,
      Dpotassium:0,
  
      UtotalFat:"-",
      UsaturatedFat:"-",
      UmonoUnsaturatedFat:"-",
      UpolyUnsaturatedFat:"-",
      Ucholestrol:"-",
      Usodium:"-",
      Ucarbohydrate:"-",
      Ufibre:"-",
      Usugar:"-",
      Uprotein:"-",
      UvitaminD:"-",
      Ucalcium:"-",
      Uiron:"-",
      Upotassium:"-"
  
    }
    data.map(dataItem =>{
      if(dataItem.totalNutrientsKCal.ENERC_KCAL.quantity!==0){
        nutrition.calories = + nutrition.calories + parseInt((dataItem.totalNutrientsKCal.ENERC_KCAL)?(dataItem.totalNutrientsKCal.ENERC_KCAL.quantity.toFixed(1)) :0);
        nutrition.totalFat= +nutrition.totalFat+ parseInt((dataItem.totalNutrients.FAT) ? (dataItem.totalNutrients.FAT.quantity.toFixed(1)):0);
        nutrition.saturatedFat= +nutrition.saturatedFat+ parseInt((dataItem.totalNutrients.FASAT) ? (dataItem.totalNutrients.FASAT.quantity.toFixed(1)):0);
        nutrition.monoUnsaturatedFat= +nutrition.monoUnsaturatedFat +parseInt((dataItem.totalNutrients.FAMS) ? (dataItem.totalNutrients.FAMS.quantity.toFixed(1)):0);
        nutrition.polyUnsaturatedFat= +nutrition.polyUnsaturatedFat +parseInt((dataItem.totalNutrients.FAPU) ? (dataItem.totalNutrients.FAPU.quantity.toFixed(1)):0);
        nutrition.cholestrol= +nutrition.cholestrol+ parseInt((dataItem.totalNutrients.CHOLE) ? (dataItem.totalNutrients.CHOLE.quantity.toFixed(1)):0);
        nutrition.sodium= +nutrition.sodium + parseInt((dataItem.totalNutrients.NA) ? (dataItem.totalNutrients.NA.quantity.toFixed(1)):0);
        nutrition.carbohydrate= +nutrition.carbohydrate +parseInt((dataItem.totalNutrients.CHOCDF)? (dataItem.totalNutrients.CHOCDF.quantity.toFixed(1)):0);
        nutrition.fibre= +nutrition.fibre + parseInt((dataItem.totalNutrients.FIBTG) ? (dataItem.totalNutrients.FIBTG.quantity.toFixed(1)):0);
        nutrition.sugar= +nutrition.sugar+parseInt((dataItem.totalNutrients.SUGAR) ? (dataItem.totalNutrients.SUGAR.quantity.toFixed(1)):0);
        nutrition.protein= +nutrition.protein+parseInt((dataItem.totalNutrients.PROCNT) ? (dataItem.totalNutrients.PROCNT.quantity.toFixed(1)):0);
        nutrition.vitaminD=+nutrition.vitaminD+parseInt((dataItem.totalNutrients.VITD) ? (dataItem.totalNutrients.VITD.quantity.toFixed(1)):0);
        nutrition.calcium=+nutrition.calcium+parseInt((dataItem.totalNutrients.CA) ? (dataItem.totalNutrients.CA.quantity.toFixed(1)):0);
        nutrition.iron=+nutrition.iron+parseInt((dataItem.totalNutrients.FE) ? (dataItem.totalNutrients.FE.quantity.toFixed(1)):0);
        nutrition.potassium=+nutrition.potassium+parseInt((dataItem.totalNutrients.K) ? (dataItem.totalNutrients.K.quantity.toFixed(1)):0);

        nutrition.DtotalFat =+nutrition.DtotalFat+ parseInt((dataItem.totalDaily.FAT) ? (dataItem.totalDaily.FAT.quantity.toFixed(1)): 0);
        nutrition.DsaturatedFat=+nutrition.DsaturatedFat+parseInt((dataItem.totalDaily.FASAT) ? (dataItem.totalDaily.FASAT.quantity.toFixed(1)):0);
        nutrition.Dcholestrol=+nutrition.Dcholestrol+ parseInt((dataItem.totalDaily.CHOLE) ? (dataItem.totalDaily.CHOLE.quantity.toFixed(1)):0);
        nutrition.monoUnsaturatedFat= +nutrition.monoUnsaturatedFat +parseInt((dataItem.totalDaily.FAMS) ? (dataItem.totalDaily.FAMS.quantity.toFixed(1)):0);
        nutrition.polyUnsaturatedFat= +nutrition.polyUnsaturatedFat +parseInt((dataItem.totalDaily.FAPU) ? (dataItem.totalDaily.FAPU.quantity.toFixed(1)):0);
        nutrition.Dsodium=+nutrition.Dsodium+parseInt((dataItem.totalDaily.NA) ? (dataItem.totalDaily.NA.quantity.toFixed(1)):0);
        nutrition.Dcarbohydrate=+nutrition.Dcarbohydrate+parseInt((dataItem.totalDaily.CHOCDF) ? (dataItem.totalDaily.CHOCDF.quantity.toFixed(1)):0);
        nutrition.Dfibre= +nutrition.Dfibre+parseInt((dataItem.totalDaily.FIBTG) ? (dataItem.totalDaily.FIBTG.quantity.toFixed(1)):0);
        nutrition.Dsugar=+ nutrition.Dsugar+parseInt((dataItem.totalDaily.SUGAR) ? (dataItem.totalDaily.SUGAR.quantity.toFixed(1)):0);
        nutrition.Dprotein= +(nutrition.Dprotein) + parseInt((dataItem.totalDaily.PROCNT)?  (dataItem.totalDaily.PROCNT.quantity):0) ;
        nutrition.DvitaminD=+ nutrition.DvitaminD+parseInt((dataItem.totalDaily.VITD) ?(dataItem.totalDaily.VITD.quantity.toFixed(1)):0);
        nutrition.Dcalcium=+nutrition.Dcalcium+parseInt((dataItem.totalDaily.CA) ? (dataItem.totalDaily.CA.quantity.toFixed(1)):0);
        nutrition.Diron=+nutrition.Diron+parseInt((dataItem.totalDaily.FE) ? (dataItem.totalDaily.FE.quantity.toFixed(1)):0);
        nutrition.Dpotassium=+nutrition.Dpotassium+parseInt((dataItem.totalDaily.K) ? (dataItem.totalDaily.K.quantity.toFixed(1)):0);
        
        nutrition.Ucalories = (dataItem.totalNutrientsKCal.ENERC_KCAL)? dataItem.totalNutrientsKCal.ENERC_KCAL.unit: nutrition.Ucalories;
        nutrition.UtotalFat= (dataItem.totalNutrients.FAT) ? dataItem.totalNutrients.FAT.unit: nutrition.UtotalFat;
        nutrition.UsaturatedFat= (dataItem.totalNutrients.FASAT) ? dataItem.totalNutrients.FASAT.unit: nutrition.UsaturatedFat;
        nutrition.UmonoUnsaturatedFat =(dataItem.totalNutrients.FAMS) ? dataItem.totalNutrients.FAMS.unit: nutrition.UmonoUnsaturatedFat;
        nutrition.UpolyUnsaturatedFat =(dataItem.totalNutrients.FAPU) ? dataItem.totalNutrients.FAPU.unit: nutrition.UpolyUnsaturatedFat;
        nutrition.Ucholestrol= (dataItem.totalNutrients.CHOLE) ?dataItem.totalNutrients.CHOLE.unit: nutrition.Ucholestrol;
        nutrition.Usodium= (dataItem.totalNutrients.NA) ? dataItem.totalNutrients.NA.unit : nutrition.Usodium;
        nutrition.Ucarbohydrate=(dataItem.totalNutrients.CHOCDF)? dataItem.totalNutrients.CHOCDF.unit:nutrition.Ucarbohydrate;
        nutrition.Ufibre=(dataItem.totalNutrients.FIBTG) ? dataItem.totalNutrients.FIBTG.unit:nutrition.Ufibre;
        nutrition.Usugar=(dataItem.totalNutrients.SUGAR) ? dataItem.totalNutrients.SUGAR.unit :nutrition.Usugar;
        nutrition.Uprotein=(dataItem.totalNutrients.PROCNT) ? dataItem.totalNutrients.PROCNT.unit:nutrition.Uprotein;
        nutrition.UvitaminD=(dataItem.totalNutrients.VITD) ? dataItem.totalNutrients.VITD.unit:nutrition.UvitaminD;
        nutrition.Ucalcium=(dataItem.totalNutrients.CA) ? dataItem.totalNutrients.CA.unit:nutrition.ucalcium;
        nutrition.Uiron=(dataItem.totalNutrients.FE) ? dataItem.totalNutrients.FE.unit:nutrition.Uiron;
        nutrition.Upotassium=(dataItem.totalNutrients.K) ? dataItem.totalNutrients.K.unit:nutrition.Upotassium;
      }
      this.setState({totalNutrition:nutrition});
      return nutrition;

    }) 
  }
    
  render(){
      
  return (

    <div className="App">
      <div>
          <div className="row" style={{borderBottomColor:"#24b129", borderBottomWidth:"4px",borderBlockStyle:"solid"}} >
         
                    <img src={icon}className="icon" alt=""/>
                    <span className="text-center text-success navb" onClick={this.onClear}>Nutrition Analyzer</span>
                    
                    
          </div>
            {/* <nav className=" text-center fixed-top bg-light container-fluid ">
              <span className="text-center text-success " onClick={this.onClear}>Nutrition Analyzer</span> 
            </nav> */}
          <div className="bgImg" style={{background:`url(${background})`,backgroundRepeat:"repeat" ,backgroundSize: "cover",backgroundAttachment: "fixed",backgroundPosition: "center",backgroundColor: "#464646"}}>
            {
              (this.state.analyze === false) ? 
              
              <div className="container division" className="col-sm-5 col-9 col-md-7 col-lg-5 mainp" style={{marginLeft:0,marginTop:0}} >
              <div className="row"  style={{background:"rgb(200, 200,205)",height:"100vh"}}>
                <div className="col-sm-10 col-md-8 col-lg-8" style={{marginTop:"1em", margin:"auto"}}>
                  <h2 className="mainpage"> Eat &nbsp;<span className="sp">healthy</span><br></br>
                  
                    Stay &nbsp;<span className="sp">healthy</span>
                  </h2><br></br><br></br>
                  Try this recipe nutrition analyzer for your recipes and start making healthier choices!
                  <br></br><br></br>
                  <button className="button" style={{margin:"auto"}}onClick={this.onAnalyze}>Analyze now!</button>
                </div>
              </div>
              </div> : <span></span>
            }
      
        {
          (this.state.analyze === true) ? <div className="container division col-sm-11 col-lg-8 col-md-8" style={{margin:"auto",padding:"0",boxShadow: "0px 15px 15px 10px rgba(170, 180, 170, 0.8)"}} >
          <div className="row"  style={{background:"lightgray",height:"100vh",marginTop:"1em",margin:"auto"}}>
          <div className="col-sm-4 col-lg-6 col-md-6" style={{margin:"auto"}}>
          <Input input={this.onInput}  submit={this.onSubmit} clear={this.onClear} nutrition={this.state.dataAPI} ip={this.state.input}/>
          </div>
          <div className={(this.state.submitData) ? "col-sm-8 col-lg-6 col-md-6":"d-lg-none d-none d-sm-none d-md-none"} style={{height:"auto",background:"lightgray"}}>
          <Detail nutrition={this.state.totalNutrition} submitData={this.state.submitData}/>
          </div>
        </div>
        </div> : <span></span>
        }
        </div>
    </div>
    </div>
  );
}
}

export default App;
