import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './cssOfPages/Symptoms.css';
import $,{ event } from 'jquery';
import Input from '@material-ui/core/Input';

class Symptoms extends Component{
    constructor(){
        super()
        this.state={
            gen:"",
            age:"",
            sym1:"",
            sym2:"",
            sym3:"",
            sym4:"",
            sym5:"",
            sym6:"",
            sym7:"",
            sym8:"",
            disease1:"",

            data:[]
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    //onSubmit function to passing user input to server
    onSubmit=(e)=>{
        e.preventDefault()
        //console.log("Work")
        if(this.state.sym6 !== '' && this.state.sym7 === '' && this.state.sym8 === ''){
          var formData = [this.state.gen,this.state.age,this.state.sym1,this.state.sym2,this.state.sym3,this.state.sym4,this.state.sym5,this.state.sym6]
          }
          else if(this.state.sym6 !== '' && this.state.sym7 !== '' && this.state.sym8 === ''){
           formData = [this.state.gen,this.state.age,this.state.sym1,this.state.sym2,this.state.sym3,this.state.sym4,this.state.sym5,this.state.sym6,this.state.sym7]
            }
           else if(this.state.sym6 !== '' && this.state.sym7 !== '' && this.state.sym8 !== ''){
             formData = [this.state.gen,this.state.age,this.state.sym1,this.state.sym2,this.state.sym3,this.state.sym4,this.state.sym5,this.state.sym6,this.state.sym7,this.state.sym8]
            }
            else{
               formData = [this.state.gen,this.state.age,this.state.sym1,this.state.sym2,this.state.sym3,this.state.sym4,this.state.sym5]
            }
        //var formData = [this.state.gen,this.state.age,this.state.sym1,this.state.sym2,this.state.sym3,this.state.sym4,this.state.sym5,this.state.sym6,this.state.sym7,this.state.sym8]
        //var formData = ['female','five','Abdominal distention','Coughing','Cyanosis','Difficulty breathing','Muscle wasting',0,0,0,0,0,0,0];
        $.ajax({
          url: 'http://127.0.0.1:5000/api/get/data/disese',
          type: 'PUT', 
          dataType: 'json',
          contentType: 'application/json',
          data: JSON.stringify(formData),//predicted data assigned to the variable
          success: function(data, textStatus, xhr) {
              //alert("Your Dog have " + data +" Disease");
              $('#txt').text(data + "- this disease your dog have");
              this.setState({disease1:data}); //assign returning data from backend
          }.bind(this),//identify its a functon ti reactjs
          error: function(xhr, textStatus, errorThrown) {
              console.log('Error in Operation');
          }
      });
      }

    render(){
  return (
    <body className="my3">
    <form className="dsfill" onSubmit = {this.onSubmit}>
    <div class="Symptoms" >
      <br/>
      <h1>Diesease Prediction With Canine</h1>
    
    <Autocomplete
    value = {this.state.gen}
    onChange={(event, val) => {
      this.setState({gen:val})
    }}

      id="gender"
      options={gender}
      getOptionLabel={(option) => option.gender}
      style={{width:450,marginLeft:300}}
      renderInput={(params => <TextField {...params} label="Gender" variant="outlined" required={true}/>)}//validation
    /><br/>

    <Autocomplete
      value = {this.state.age}
      onChange={(event, val) => {
        this.setState({age:val})
      }}
      id="age"
      options={age}
      getOptionLabel={(option) => option.age}
      style={{width:450,marginLeft:300}}
      renderInput={(params => <TextField {...params} label="Age" variant="outlined" required={true} />)}
    /><br/>

    <Autocomplete
      id="symp1"
      value = {this.state.sym1}
      onChange={(event, val) => {
        this.setState({sym1:val})
      }}
      options={symptomsDiesease}
      getOptionLabel={(option) => option.Symptoms}
      style={{width:450,marginLeft:300}}
      renderInput={(params => <TextField {...params} label="Symptom : 1" variant="outlined" required={true}/>)}
    /><br/>

    <Autocomplete
      id="symp2"
      value = {this.state.sym2}
      onChange={(event, val) => {
        this.setState({sym2:val})
      }}
      options={symptomsDiesease}
      getOptionLabel={(option) => option.Symptoms}
      style={{width:450,marginLeft:300}}
      renderInput={(params => <TextField {...params} label="Symptom : 2" variant="outlined" required={true}/>)}
    /><br/>

    <Autocomplete
      id="symp3"
      options={symptomsDiesease}
      getOptionLabel={(option) => option.Symptoms}
      value = {this.state.sym3}
      onChange={(event, val) => {
        this.setState({sym3:val})
      }}
      style={{width:450,marginLeft:300}}
      renderInput={(params => <TextField {...params} label="Symptom : 3" variant="outlined" required={true}/>)}
    /><br/>

    <Autocomplete
      id="symp4"
      options={symptomsDiesease}
      value = {this.state.sym4}
      onChange={(event, val) => {
        this.setState({sym4:val})
      }}
      getOptionLabel={(option) => option.Symptoms}
      style={{width:450,marginLeft:300}}
      renderInput={(params => <TextField {...params} label="Symptom : 4" variant="outlined" required={true} />)}
    /><br/>

     <Autocomplete
      id="symp5"
      options={symptomsDiesease}
      value = {this.state.sym5}
      onChange={(event, val) => {
        this.setState({sym5:val})
      }}
      getOptionLabel={(option) => option.Symptoms}
      style={{width:450,marginLeft:300}}
      renderInput={(params => <TextField {...params} label="Symptom : 5" variant="outlined" required={true}/>)}
    /><br/>

<Autocomplete
      id="symp6"
      options={symptomsDiesease}
      value = {this.state.sym6}
      onChange={(event, val) => {
        this.setState({sym6:val})
      }}
      getOptionLabel={(option) => option.Symptoms}
      style={{width:450,marginLeft:300}}
      renderInput={(params => <TextField {...params} label="Symptom : 6" variant="outlined"/>)}
    /><br/>

<Autocomplete
      id="symp7"
      options={symptomsDiesease}
      value = {this.state.sym7}
      onChange={(event, val) => {
        this.setState({sym7:val})
      }}
      getOptionLabel={(option) => option.Symptoms}
      style={{width:450,marginLeft:300}}
      renderInput={(params => <TextField {...params} label="Symptom : 7" variant="outlined"/>)}
    /><br/>

<Autocomplete
      id="symp8"
      options={symptomsDiesease}
      value = {this.state.sym8}
      onChange={(event, val) => {
        this.setState({sym8:val})
      }}
      getOptionLabel={(option) => option.Symptoms}
      style={{width:450,marginLeft:300}}
      renderInput={(params => <TextField {...params} label="Symptom : 8" variant="outlined"/>)}
    /><br/>
    <br/>

    <button class="btn1" type = "submit"><b>Predict</b></button>
    <br/><br/>

    <p><b>Disease &nbsp;:- </b>&nbsp;<Input type="text"
    value= {this.state.disease1} //setting the value from the variable
    inputProps={{ 'aria-label': 'description' }}
    /></p>
    <br/>
    <br/>
    </div>
    </form>
    </body>
  )
    };
}
export default Symptoms

// gender option
const gender = [
    {gender:'Male'},
    {gender:'Female'},
    // {gender :'Both'},
  ];

// age option
const age = [
    {age: 'Below Five'},
    {age: 'Below Ten'},
    {age: 'Below Fifteen'},
    // {age:'common'},
  ];

// Symptoms for dog dieasese 
const symptomsDiesease = [
    {
      Symptoms: "Mouth pain"
    },
    {
      Symptoms: "Excessive licking of the affected area"
    },
    {
      Symptoms: "Infections usually localized"
    },
    {
      Symptoms: "Difficulty breathing"
    },
    {
      Symptoms: "Sneezing"
    },
    {
      Symptoms: "Fever"
    },
    {
      Symptoms: "Tenesmus"
    },
    {
      Symptoms: "Adenocarcinoma"
    },
    {
      Symptoms: "Unilateral"
    },
    {
      Symptoms: "Firm"
    },
    {
      Symptoms: "Vomiting"
    },
    {
      Symptoms: "movable mass in the neck"
    },
    {
      Symptoms: "Administration of loop diuretics"
    },
    {
      Symptoms: "Alopecia"
    },
    {
      Symptoms: "Listlessness"
    },
    {
      Symptoms: "Bloody saliva or blood from the nose"
    },
    {
      Symptoms: "Drooling"
    },
    {
      Symptoms: "A foul Odor"
    },
    {
      Symptoms: "Scooting"
    },
    {
      Symptoms: "Red or purple spots on the surface"
    },
    {
      Symptoms: "occasionally icteric mucous membranes"
    },
    {
      Symptoms: "Decreased growth rate"
    },
    {
      Symptoms: "Tachycardia"
    },
    {
      Symptoms: "Pallor"
    },
    {
      Symptoms: "Different sized pupils"
    },
    {
      Symptoms: "Stomatitis"
    },
    {
      Symptoms: "Agitation"
    },
    {
      Symptoms: "Arrhythmias may be ausculted"
    },
    {
      Symptoms: "Absent or diminished femoral pulse"
    },
    {
      Symptoms: "Lethargy"
    },
    {
      Symptoms: "Stiffness"
    },
    {
      Symptoms: "Depression"
    },
    {
      Symptoms: "kinetic dependent"
    },
    {
      Symptoms: "progressive ambulatory tetraparesis"
    },
    {
      Symptoms: "Lesions"
    },
    {
      Symptoms: "Galloping heart"
    },
    {
      Symptoms: "CHF"
    },
    //
    {
      Symptoms: "Abdominal distention"
    },
    {
      Symptoms: "Light-headedness"
    },
    {
      Symptoms: "Extreme sleepiness or tiredness"
    },
    {
      Symptoms: "Systolic click"
    },
    {
      Symptoms: "Exercise intolerance"
    },
    {
      Symptoms: "Collapse"
    },
    {
      Symptoms: "Solitary"
    },
    {
      Symptoms: "Abdominal pain"
    },
    {
      Symptoms: "Intestinal form-none"
    },
    {
      Symptoms: "Bloody urethral discharge"
    },
    {
      Symptoms: "Therapeutic use of drug"
    },
    {
      Symptoms: "Bradycardia"
    },
    {
      Symptoms: "Frothy yellow vomit"
    },
    {
      Symptoms: "Serous"
    },
    {
      Symptoms: "Bumping into things"
    },
    {
      Symptoms: "Restlessness"
    },
    {
      Symptoms: "Diarrhea"
    },
    {
      Symptoms: "Horner"
    },
    {
      Symptoms: "Snoring"
    },
    {
      Symptoms: "Seizures"
    },
    {
      Symptoms: "color during estrus"
    },
    {
      Symptoms: "Non healing ulcers in the oral"
    },
    {
      Symptoms: "Vary greatly"
    },
    {
      Symptoms: "Post-Infection"
    },
    {
      Symptoms: "Signs of fear and anxiety vary between individuals"
    },
    {
      Symptoms: "Drowsiness"
    },
    {
      Symptoms: "Anorexia"
    },
    {
      Symptoms: "Cardiac arrhythmias"
    },
    {
      Symptoms: "ventricular premature complexes"
    },
    //
    {
      Symptoms: "Lack of response to stimulation"
    },
    {
      Symptoms: "carnitine deficiency can be diverse"
    },
    {
      Symptoms: "White eye"
    },
    {
      Symptoms: "Hypermetria"
    },
    {
      Symptoms: "Symmetrical"
    },
    {
      Symptoms: "Ischemic stroke"
    },
    {
      Symptoms: "Chronic"
    },
    {
      Symptoms: "Red fundic reflex"
    },
    {
      Symptoms: "Scaling"
    },
    {
      Symptoms: "cacao hull Ingestion"
    },
    {
      Symptoms: "Choledochitis"
    },
    {
      Symptoms: "visible mass at the affected site"
    },
    {
      Symptoms: "Voice change"
    },
    {
      Symptoms: "Bilateral Epistaxis"
    },
    {
      Symptoms: "Visible mass involving the mandible"
    },
    {
      Symptoms: "Not usually painful"
    },
    {
      Symptoms: "Hematoma formation"
    },
    {
      Symptoms: "Often minor or no Bleeding"
    },
    {
      Symptoms: "Watery-to-mucoid"
    },
    {
      Symptoms: "acronym DISHA"
    },
    {
      Symptoms: "Often a history of cold exposure"
    },
    {
      Symptoms: "Neonates"
    },
    {
      Symptoms: "Fecal consistency"
    },
    {
      Symptoms: "Bloody"
    },
    {
      Symptoms: "behaviors may be repetitive or static"
    },
    {
      Symptoms: "Distortion of the spinal column"
    },
    {
      Symptoms: "Blepharospasm"
    },
    {
      Symptoms: "Straining to defecate with small or no fecal volume"
    },
    {
      Symptoms: "Appear 7?14 days after contact with raccoon saliva"
    },
    {
      Symptoms: "Varies with tissues affected"
    },
    {
      Symptoms: "associated ocular or systemic disorders"
    },
    {
      Symptoms: "Bilaterally cryptorchid animals are infertile"
    },
    {
      Symptoms: "Dermatologic"
    },
    {
      Symptoms: "Stridor"
    },
    {
      Symptoms: "Adjoining bone"
    },
    {
      Symptoms: "Conjunctival hyperemia"
    },
    {
      Symptoms: "Panting"
    },
    {
      Symptoms: "Relate to location in the gastrointestinal tract"
    },
    {
      Symptoms: "Related to gastrointestinal tract"
    },
    {
      Symptoms: "Lens instability and subluxation"
    },
    {
      Symptoms: "Vary with age"
    },
    {
      Symptoms: "Insidious"
    },
    {
      Symptoms: "multiple Lipomas"
    },
    {
      Symptoms: "Large and diffuse and soft tissue mass"
    },
    {
      Symptoms: "Sudden onset of pain"
    },
    {
      Symptoms: "Pollakiuria"
    },
    {
      Symptoms: "Lumbosacral pain"
    },
    {
      Symptoms: "Lymph node"
    },
    {
      Symptoms: "Multicentric"
    },
    //
    {
      Symptoms: "Caudal mammary glands"
    },
    {
      Symptoms: "Ingestion"
    },
    {
      Symptoms: "Lipomas"
    },
    {
      Symptoms: "Deficient Maternal Behavior"
    },
    {
      Symptoms: "underlying risk factors resulting in the injury"
    },
    {
      Symptoms: "Excessive salivation"
    },
    {
      Symptoms: "Skin mass with variable growth rates"
    },
    {
      Symptoms: "Vary with tumor location"
    },
    {
      Symptoms: "Pleural effusion"
    },
    {
      Symptoms: "toxicant"
    },
    {
      Symptoms: "MalOdorous"
    },
    {
      Symptoms: "Postpartum"
    },
    {
      Symptoms: "Severe bone disease"
    },
    {
      Symptoms: "Lameness"
    },
    {
      Symptoms: "Psychoactive species"
    },
    {
      Symptoms: "Regurgitation"
    },
    {
      Symptoms: "Tuberculosis"
    },
    {
      Symptoms: "Polyarthritis"
    },
    {
      Symptoms: "Pale mucous membranes"
    },
    {
      Symptoms: "myocardial involvement"
    },
    {
      Symptoms: "bout of gastrointestinal"
    },
    {
      Symptoms: "Masticatory"
    },
    {
      Symptoms: "Difficulty rising"
    },
    {
      Symptoms: "Normal at rest and on initial exercise"
    },
    {
      Symptoms: "Licking at the feet or ungual folds"
    },
    {
      Symptoms: "Fragmented sleep"
    },
    {
      Symptoms: "Depigmentation"
    },
    {
      Symptoms: "Progressive signs related to a forebrain lesion"
    },
    {
      Symptoms: "Low birth weight"
    },
    {
      Symptoms: "Imidacloprid"
    },
    {
      Symptoms: "Similar to those of toxoplasmosis"
    },
    {
      Symptoms: "None or Hematuria"
    },
    {
      Symptoms: "Pitting Subcutaneous edema"
    },
    {
      Symptoms: "Polyuria and Polydipsia"
    },
    {
      Symptoms: "Depends on the site of Infection"
    },
    {
      Symptoms: "Non-seasonal intense Pruritus"
    },
    {
      Symptoms: "History reflects the underlying cause"
    },
    {
      Symptoms: "multiple subcutaneous nodules"
    },
    {
      Symptoms: "No associated Trauma"
    },
    {
      Symptoms: "Coughing"
    },
    {
      Symptoms: "Cutaneous papillomas"
    },
    {
      Symptoms: "Weakness"
    },
    {
      Symptoms: "Muscle pain"
    },
    {
      Symptoms: "Swelling"
    },
    {
      Symptoms: "limbing"
    },
    {
      Symptoms: "Respiratory"
    },
    {
      Symptoms: "Thoracic defect"
    },
    {
      Symptoms: "PlayBiting"
    },
    {
      Symptoms: "Asymptomatic"
    },
    {
      Symptoms: "Scales"
    },
    {
      Symptoms: "Dyschezia"
    },
    {
      Symptoms: "Tamponade"
    },
    {
      Symptoms: "Allergic or other immunecardiac"
    },
    {
      Symptoms: "Pneumonitis"
    },
    {
      Symptoms: "local inflammation"
    },
    {
      Symptoms: "rust-colored urine"
    },
    {
      Symptoms: "Dyspnea"
    },
    {
      Symptoms: "Peracute"
    },
    {
      Symptoms: "Traumatic recent Trauma"
    },
    {
      Symptoms: "Environment and general husbandry"
    },
    {
      Symptoms: "Abdominal enlargement"
    },
    {
      Symptoms: "Transient excitement or vigorous exercise"
    },
    {
      Symptoms: "Eating more frequently or a greater"
    },
    {
      Symptoms: "Hematuria is the most common sign"
    },
    {
      Symptoms: "Early no signs"
    },
    {
      Symptoms: "Oval"
    },
    {
      Symptoms: "Subconjunctival or intraocular Hemorrhage"
    },
    {
      Symptoms: "severity of proteinuria"
    },
    {
      Symptoms: "Scratching"
    },
    {
      Symptoms: "History of blunt Trauma"
    },
    {
      Symptoms: "Predisposing causes airway obstruction"
    },
    {
      Symptoms: "Often reflect the primary disease process"
    },
    {
      Symptoms: "Abdominal distension"
    },
    {
      Symptoms: "Acutely Swollen face"
    },
    {
      Symptoms: "Superficial usually involves the trunk"
    },
    {
      Symptoms: "Papules"
    },
    {
      Symptoms: "Dogs present within 12 weeks after their last estrus"
    },
    {
      Symptoms: "Weight loss"
    },
    {
      Symptoms: "Discharge from the vulva"
    },
    {
      Symptoms: "Onset of proestrus or estrus"
    },
    {
      Symptoms: "Vulvar discharge"
    },
    {
      Symptoms: "Extraluminal slow-growing perineal mass"
    },
    {
      Symptoms: "Stunted growth"
    },
    {
      Symptoms: "Provocative drug given to sensitized animal"
    },
    {
      Symptoms: "Illness"
    },
    {
      Symptoms: "Syncope"
    },
    {
      Symptoms: "Ataxia"
    },
    {
      Symptoms: "macroscopic vesicourachal diverticula"
    },
    {
      Symptoms: "peripheral vestibular dysfunction"
    },
    {
      Symptoms: "Inactivity"
    },
    {
      Symptoms: "Hemorrhage from mucosal surfaces"
    },
    {
      Symptoms: "Incoordination"
    },
    {
      Symptoms: "exposure with sugar-free gums"
    },
    {
      Symptoms: "a bigger rounder face"
    },
    {
      Symptoms: "Decrease in development of urine"
    },
    {
      Symptoms: "Swollen eyelids"
    },
    {
      Symptoms: "Acute Blindness"
    },
    {
      Symptoms: "Halitosis"
    },
    {
      Symptoms: "Short legs"
    },
    {
      Symptoms: "Bone pain or tenderness"
    },
    {
      Symptoms: "headshaking"
    },
    {
      Symptoms: "Vocalization"
    },
    {
      Symptoms: "vulvar enlargement"
    },
    {
      Symptoms: "Difficulty getting pregnant"
    },
    //
    {
      Symptoms: "painful sitting"
    },
    {
      Symptoms: "The presence of bright red blood in the feces"
    },
    {
      Symptoms: "Pawing at or rubbing eye on floor"
    },
    {
      Symptoms: "Throwing up water or food or mucus"
    },
    {
      Symptoms: "Night Blindness"
    },
    {
      Symptoms: "Acute or progressive Vision loss"
    },
    {
      Symptoms: "Poor appetite"
    },
    {
      Symptoms: "Nausea"
    },
    {
      Symptoms: "Potbelly"
    },
    {
      Symptoms: "Bleeding of urination"
    },
    {
      Symptoms: "abnormalities of voiding dysfunction"
    },
    {
      Symptoms: "Number of uroliths"
    },
    {
      Symptoms: "failure of gestation"
    },
    {
      Symptoms: "discovered incidentally"
    },
    {
      Symptoms: "Pigmented scleral or corneal mass"
    },
    {
      Symptoms: "precede dermatologic"
    },
    {
      Symptoms: "Unable to open or close mouth"
    },
    {
      Symptoms: "Curled lips"
    },
    {
      Symptoms: "drooping of the upper eyelid"
    },
    {
      Symptoms: "Excessive bruising"
    },
    {
      Symptoms: "Urinating or defecating"
    },
    {
      Symptoms: "Difficulty swallowing"
    },
    {
      Symptoms: "Heavy breathing"
    },
    {
      Symptoms: "Chewing on one side"
    },
    {
      Symptoms: "Pockets of palpable air under the skin"
    },
    {
      Symptoms: "Fast heartbeat"
    },
    {
      Symptoms: "Upset stomach"
    },
    {
      Symptoms: "Difficulty localizing sound"
    },
    {
      Symptoms: "Bad breath"
    },
    {
      Symptoms: "Swaying in the hind end when standing"
    },
    {
      Symptoms: "Dark discoloration"
    },
    {
      Symptoms: "Leukotrichia or the whitening of the hair"
    },
    {
      Symptoms: "Erosions"
    },
    {
      Symptoms: "dandruff or in sheets"
    },
    {
      Symptoms: "Hair loss"
    },
    {
      Symptoms: "Occasionally painful"
    },
    {
      Symptoms: "Dry skin"
    },
    {
      Symptoms: "Areas of blistering skin"
    },
    {
      Symptoms: "runny eyes"
    },
    {
      Symptoms: "Excessive urination"
    },
    {
      Symptoms: "Increased urination"
    },
    {
      Symptoms: "Excessive thirst"
    },
    {
      Symptoms: "Breathing difficulties"
    },
    {
      Symptoms: "Back pain"
    },
    {
      Symptoms: "Excessive sleepiness"
    },
    {
      Symptoms: "Labored or open-mouthed breathing"
    },
    {
      Symptoms: "Gastrointestinal signs"
    },
    {
      Symptoms: "Crying and whimpering during defecation"
    },
    {
      Symptoms: "Urine leaking"
    },
    {
      Symptoms: "Protrusion of the bottom eyelid"
    },
    {
      Symptoms: "Limping"
    },
    {
      Symptoms: "Oral Ulcerations on the tongue"
    },
    {
      Symptoms: "Digestive problems"
    },
    {
      Symptoms: "Squinting"
    },
    {
      Symptoms: "Rapid onset"
    },
    {
      Symptoms: "Pain"
    },
    {
      Symptoms: "collapsing"
    },
    {
      Symptoms: "Dampness or wetness beneath the eyes"
    },
    {
      Symptoms: "Red eye"
    },
    {
      Symptoms: "continuous flow of blood from nose"
    },
    {
      Symptoms: "Bleeding from mass"
    },
    {
      Symptoms: "Retching"
    },
    {
      Symptoms: "Pain in the neck or throat"
    },
    {
      Symptoms: "stomach problems"
    },
    {
      Symptoms: "Change in iris pigmentation"
    },
    {
      Symptoms: "face can be affected"
    },
    {
      Symptoms: "Swollen"
    },
    {
      Symptoms: "Aggressive chewing"
    },
    {
      Symptoms: "Pacing"
    },
    {
      Symptoms: "Red eyes"
    },
    {
      Symptoms: "Hematochezia"
    },
    {
      Symptoms: "Oral Bleeding"
    },
    {
      Symptoms: "Mucus discharge"
    },
    {
      Symptoms: "Twitching"
    },
    {
      Symptoms: "Expulsion of gas from the anus with Odor"
    },
    {
      Symptoms: "Itching"
    },
    {
      Symptoms: "Loss of Appetite"
    },
    {
      Symptoms: "Stomach pain"
    },
    {
      Symptoms: "Dark"
    },
    {
      Symptoms: "Pupils of eyes different sizes"
    },
    {
      Symptoms: "Blood in urine"
    },
    {
      Symptoms: "head against stable objects"
    },
    {
      Symptoms: "Circling or Leaning"
    },
    {
      Symptoms: "Fainting"
    },
    {
      Symptoms: "Vomit containing specks of blood"
    },
    {
      Symptoms: "Lack of appetite"
    },
    {
      Symptoms: "Appetite loss"
    },
    {
      Symptoms: "Decreased appetite"
    },
    {
      Symptoms: "fluid accumulation in the abdomen"
    },
    {
      Symptoms: "Staggering"
    },
    {
      Symptoms: "Thick Nasal discharge"
    },
    {
      Symptoms: "Anemia"
    },
    {
      Symptoms: "Drooping of the eyelid"
    },
    {
      Symptoms: "Confusion"
    },
    {
      Symptoms: "Domed skull"
    },
    {
      Symptoms: "Dehydration"
    },
    {
      Symptoms: "Dizziness"
    },
    {
      Symptoms: "Gastrointestinal irritation"
    },
    {
      Symptoms: "Wounds not healing"
    },
    {
      Symptoms: "Head tilt"
    },
    {
      Symptoms: "Extreme thirst"
    },
    {
      Symptoms: "Yellow eyes"
    },
    {
      Symptoms: "Thickening of limbs"
    },
    {
      Symptoms: "Redness in the eye"
    },
    {
      Symptoms: "Muscle twitching and Trembling"
    },
    {
      Symptoms: "Inability to walk or stand"
    },
    {
      Symptoms: "Lack of energy"
    },
    {
      Symptoms: "Tingling sensation"
    },
    {
      Symptoms: "Shivering"
    },
    {
      Symptoms: "weight gain"
    },
    {
      Symptoms: "Shortness of breath"
    },
    {
      Symptoms: "Struggling to have a bowel"
    },
    {
      Symptoms: "Hyperactivity"
    },
    {
      Symptoms: "False pregnancy due to an ovarian cyst"
    },
    //
    {
      Symptoms: "Lack of coordination"
    },
    {
      Symptoms: "Blood in the peritoneal cavity"
    },
    {
      Symptoms: "Stiff neck with reluctance"
    },
    {
      Symptoms: "Anisocoria"
    },
    {
      Symptoms: "Biting at the skin"
    },
    {
      Symptoms: "Lack of muscle control"
    },
    {
      Symptoms: "Follicular casts or fronds"
    },
    {
      Symptoms: "jerking"
    },
    {
      Symptoms: "Urinating and Defecating"
    },
    {
      Symptoms: "Blood in the urine"
    },
    {
      Symptoms: "Enlarged clitoris"
    },
    {
      Symptoms: "Rapid breathing"
    },
    {
      Symptoms: "Shaking"
    },
    {
      Symptoms: "difficulty getting up"
    },
    {
      Symptoms: "Gas"
    },
    {
      Symptoms: "Excess salivation"
    },
    {
      Symptoms: "Visible bite marks"
    },
    {
      Symptoms: "Blood pressure changes"
    },
    {
      Symptoms: "Abnormal spinal reflexes"
    },
    {
      Symptoms: "Raised wart like lump"
    },
    {
      Symptoms: "crusty sores on the ears"
    },
    {
      Symptoms: "Bleeding from the mouth"
    },
    {
      Symptoms: "Runny nose that goes on for a long time"
    },
    {
      Symptoms: "peeling of skin"
    },
    {
      Symptoms: "foul doggy breath"
    },
    {
      Symptoms: "Fatigue or low energy"
    },
    {
      Symptoms: "Incompletely housetrained"
    },
    {
      Symptoms: "Neck Pain"
    },
    {
      Symptoms: "erythematous Papules"
    },
    {
      Symptoms: "may be disseminated"
    },
    {
      Symptoms: "Crackles heard bilaterally on auscultation"
    },
    {
      Symptoms: "raised"
    },
    {
      Symptoms: "accompanying potassium depletion"
    },
    {
      Symptoms: "Loss hair around eyes and mouth"
    },
    {
      Symptoms: "Hair coat"
    },
    {
      Symptoms: "associated exudates"
    },
    {
      Symptoms: "Licking or Biting their rear end"
    },
    {
      Symptoms: "skin that is due to tiny Hemorrhages"
    },
    {
      Symptoms: "Dark-colored blood"
    },
    {
      Symptoms: "White part of eye or sclera"
    },
    {
      Symptoms: "inflammation"
    },
    {
      Symptoms: "Pulse deficits"
    },
    {
      Symptoms: "Anxiety"
    },
   //
    {
      Symptoms: "Increased nasal airflow"
    },
    {
      Symptoms: "Head tilting"
    },
    {
      Symptoms: "Disoriented"
    },
    {
      Symptoms: "Systolic murmur best heard over"
    },
    {
      Symptoms: "well-circumscribed"
    },
    {
      Symptoms: "Black tarry feces"
    },
    {
      Symptoms: "Hematuria"
    },
    {
      Symptoms: "Hypotension"
    },
    {
      Symptoms: "tachyarrhythmias"
    },
    {
      Symptoms: "Severe Jaundice"
    },
    {
      Symptoms: "depressed appetite"
    },
    {
      Symptoms: "mucoid"
    },
    {
      Symptoms: "Unwillingness"
    },
    {
      Symptoms: "Syndrome"
    },
    //
    {
      Symptoms: "Abnormal behavior"
    },
    {
      Symptoms: "vulvar edema of proestrus decreases"
    },
    {
      Symptoms: "hemoptysis"
    },
    {
      Symptoms: "hallmark of tracheobronchial irritation"
    },
    {
      Symptoms: "Loss of libido"
    },
    {
      Symptoms: "AV dissociation"
    },
    {
      Symptoms: "bile streaked"
    },
    {
      Symptoms: "Rarely virulent isolates"
    },
    {
      Symptoms: "Clear Nasal discharge"
    },
    {
      Symptoms: "Can be subclinical"
    },
    {
      Symptoms: "Modest febrile response"
    },
    {
      Symptoms: "predominate"
    },
    {
      Symptoms: "Loss of consciousness"
    },
    {
      Symptoms: "produce energy from fatty acids"
    },
    {
      Symptoms: "Vision loss"
    },
    {
      Symptoms: "Broad-based stance"
    },
    {
      Symptoms: "head bobbing"
    },
    {
      Symptoms: "non-progressive focal brain"
    },
    {
      Symptoms: "recurrent otitis externa"
    },
    {
      Symptoms: "slowly progressive gait"
    },
    {
      Symptoms: "lack of choroidal pigment"
    },
    {
      Symptoms: "diffuse or plaque-like"
    },
    {
      Symptoms: "chewed containers"
    },
    {
      Symptoms: "vague signs"
    },
    {
      Symptoms: "causing intermittent"
    },
    {
      Symptoms: "breathing"
    },
    {
      Symptoms: "Vitreous abnormalities"
    },
    {
      Symptoms: "Poor body condition"
    },
    {
      Symptoms: "Intracavitary Hemorrhage"
    },
    {
      Symptoms: "Melena"
    },
  //
    {
      Symptoms: "sometimes blood-tinged"
    },
    {
      Symptoms: "Disorientation"
    },
    {
      Symptoms: "small fecal volume"
    },
    {
      Symptoms: "mucoid Diarrhea"
    },
    {
      Symptoms: "freezing"
    },
    {
      Symptoms: "Lordosis"
    },
    {
      Symptoms: "Hard or dry feces"
    },
    {
      Symptoms: "Location determined by antigen contact"
    },
    {
      Symptoms: "bite or scratch"
    },
    {
      Symptoms: "Dental Trauma"
    },
    {
      Symptoms: "corneal"
    },
    {
      Symptoms: "Lipid"
    },
    {
      Symptoms: "Difficulty in prehension"
    },
    {
      Symptoms: "the occurrence of meniscal injury"
    },
    {
      Symptoms: "Unilaterally cryptorchid"
    },
    {
      Symptoms: "warble containing bot"
    },
    {
      Symptoms: "Failure to thrive"
    },
    {
      Symptoms: "Hip luxation is commonly cranio-dorsal"
    },
    {
      Symptoms: "usually bilateral"
    },
    {
      Symptoms: "Tearing"
    },
    {
      Symptoms: "Mucoid to mucopurulent ocular discharge"
    },
    {
      Symptoms: "head and neck moves upward"
    },
    {
      Symptoms: "Exercise and heat intolerance"
    },
    {
      Symptoms: "weight-bearing occasionally leg is carried"
    },
    {
      Symptoms: "fibrils of liquefied vitreous"
    },
    {
      Symptoms: "immune status"
    },
    {
      Symptoms: "non-painful"
    },
    {
      Symptoms: "Variable size amd shape and growth rate"
    },
    {
      Symptoms: "Bite usually on the face"
    },
    {
      Symptoms: "Dysuria"
    },
    {
      Symptoms: "reluctance to jump"
    },
    {
      Symptoms: "Ulcerations"
    },
    //
    {
      Symptoms: "one or more joints may be Swollen and Warmn"
    },
    {
      Symptoms: "organ dysfunction"
    },
    //
    {
      Symptoms: "inflammatory dermatoses"
    },
    {
      Symptoms: "Vary with severity of the enzyme deficiency"
    },
    {
      Symptoms: "Discrete"
    },
    {
      Symptoms: "May begin in minutes following inhalation"
    },
    {
      Symptoms: "Regional edema"
    },
    {
      Symptoms: "LethargyNeglect of puppies or kittens"
    },
    {
      Symptoms: "Absent maternal behavior"
    },
    {
      Symptoms: "Facial deformity"
    },
    {
      Symptoms: "Dysphagia"
    },
    {
      Symptoms: "Inappetence"
    },
    {
      Symptoms: "Typically chronic"
    },
    {
      Symptoms: "purulent"
    },
    {
      Symptoms: "hip subluxation"
    },
    {
      Symptoms: "dried product remains toxic"
    },
    {
      Symptoms: "Correlated with the route of exposure"
    },
    {
      Symptoms: "hyperresponsive to external stimuli"
    },
    //
    //
    {
      Symptoms: "bunny-hopping pelvic limb gait"
    },
    {
      Symptoms: "stilted gait"
    },
    {
      Symptoms: "abduction of the thoracic limbs"
    },
    {
      Symptoms: "Noisy breathing"
    },
    {
      Symptoms: "Hyperpigmentation"
    },
    {
      Symptoms: "Reverse Sneezing"
    },
    {
      Symptoms: "loss of weight and appetite"
    },
    {
      Symptoms: "muscular abnormalities predominate"
    },
    {
      Symptoms: "Infectious"
    },
    {
      Symptoms: "sometimes Oliguria"
    },
    {
      Symptoms: "progressive dysmetria"
    },
    {
      Symptoms: "Pleural"
    },
    {
      Symptoms: "initial Pruritus"
    },
    {
      Symptoms: "hyperadrenocorticism"
    },
    {
      Symptoms: "pedunculated fronds of epithelium"
    },
    {
      Symptoms: "unless the disease is systemic"
    },
    {
      Symptoms: "severe defects in urination"
    },
    {
      Symptoms: "Occasional skipping"
    },
    {
      Symptoms: "The pet bites hands or legs and clothing"
    },
    {
      Symptoms: "Incontinence can be intermittent"
    },
    {
      Symptoms: "crust"
    },
    {
      Symptoms: "hepatic"
    },
    {
      Symptoms: "occasionally find worms in vomitus"
    },
    {
      Symptoms: "smooth"
    },
    {
      Symptoms: "Labored breathing"
    },
    {
      Symptoms: "OculoNasal discharge"
    },
    {
      Symptoms: "thoracocentesis"
    },
    {
      Symptoms: "unsanitary conditions"
    },
    {
      Symptoms: "Trauma"
    },
    {
      Symptoms: "cyst formation"
    },
    {
      Symptoms: "quantity than normal"
    },
    {
      Symptoms: "Gross Hematuria"
    },
    {
      Symptoms: "fetal resorption evident"
    },
    {
      Symptoms: "Nasal discharge"
    },
    {
      Symptoms: "hyperemic mass"
    },
    {
      Symptoms: "dilated pupil"
    },
    {
      Symptoms: "glomerular proteinuria"
    },
    //
    //
    {
      Symptoms: "electric cord bite"
    },
    {
      Symptoms: "Submandibular lymphadenopathy"
    },
    {
      Symptoms: "Polyuria or Polydipsia"
    },
    {
      Symptoms: "obscured by hair coat"
    },
    {
      Symptoms: "Pustules"
    },
    {
      Symptoms: "exogenous hormones"
    },
    {
      Symptoms: "parturition"
    },
    {
      Symptoms: "Excessive licking of vulva"
    },
    {
      Symptoms: "Malnourishment in many animals"
    },
    {
      Symptoms: "Recent vaccination history"
    },
    {
      Symptoms: "cardiac arrhythmias"
    },
    {
      Symptoms: "Clinical signs suggestive of hyperesthesia"
    },
    {
      Symptoms: "If vestibular signs are severe"
    },
    {
      Symptoms: "Epistaxis"
    },
    {
      Symptoms: "Incubation"
    },
    {
      Symptoms: "Intermittent large bowel Diarrhea"
    },
    {
      Symptoms: "Hypoglycemia"
    },
    {
      Symptoms: "abdominal sagging"
    },
    {
      Symptoms: "ocular symtoms"
    },
    {
      Symptoms: "behavior changes"
    },
    {
      Symptoms: "Gingivitis"
    },
    {
      Symptoms: "Large head"
    },
    {
      Symptoms: "joint effusion"
    },
    {
      Symptoms: "A mass that can be felt through the skin"
    },
    {
      Symptoms: "Odor"
    },
    {
      Symptoms: "vaginal discharge"
    },
    {
      Symptoms: "Hot flashes"
    },
    {
      Symptoms: "Struggling with bowel movements"
    },
    {
      Symptoms: "Straining when defecating"
    },
    {
      Symptoms: "Squinting in light"
    },
    {
      Symptoms: "Wheezing"
    },
    {
      Symptoms: "Blindness in light"
    },
    {
      Symptoms: "Bleeding"
    },
    {
      Symptoms: "non-specific muscle"
    },
    {
      Symptoms: "decreased consciousness"
    },
    {
      Symptoms: "Mucus in the feces"
    },
    {
      Symptoms: "ureteral obstruction"
    },
    {
      Symptoms: "persistent licking of the penis"
    },
    {
      Symptoms: "Frequent attempts to urinate"
    },
    {
      Symptoms: "Stranguria"
    },
    {
      Symptoms: "Pigmented mass visible"
    },
    {
      Symptoms: "Sudden onset Uveitis"
    },
    {
      Symptoms: "Collapsing or fainting"
    },
    {
      Symptoms: "Clicking noise"
    },
    {
      Symptoms: "Clenched jaw"
    },
    {
      Symptoms: "Dyspnea or shortness of breath"
    },
    {
      Symptoms: "pupil eye"
    },
    {
      Symptoms: "Severe or prolonged blood loss"
    },
    {
      Symptoms: "Hiding"
    },
    {
      Symptoms: "Dropping food"
    },
    {
      Symptoms: "Slow heartbeat"
    },
    {
      Symptoms: "Anal Bleeding"
    },
    {
      Symptoms: "change in attentiveness"
    },
    {
      Symptoms: "Abnormally-positioned permanent teeth"
    },
    {
      Symptoms: "Easily falls over if pushed"
    },
    {
      Symptoms: "Rubbing their face or head"
    },
    {
      Symptoms: "Bad Odor and softened enamel and dentin"
    },
    {
      Symptoms: "Weeping sores"
    },
    {
      Symptoms: "skin pigment disappearing"
    },
    {
      Symptoms: "dry accumulation"
    },
    {
      Symptoms: "Bleeding from the mouth or nose"
    },
    {
      Symptoms: "Reddened skin"
    },
    {
      Symptoms: "Fibrosis"
    },
    {
      Symptoms: "resembling pimples"
    },
    {
      Symptoms: "Excessive drinking"
    },
    {
      Symptoms: "Thirst"
    },
    {
      Symptoms: "Rapid or shallow breathing"
    },
    {
      Symptoms: "Inflammation"
    },
    {
      Symptoms: "Apnea"
    },
    {
      Symptoms: "Dilated pupils"
    },
    {
      Symptoms: "Straining to defecate"
    },
    {
      Symptoms: "Gagging"
    },
    {
      Symptoms: "Difficulty walking"
    },
    {
      Symptoms: "Discolored fur around the vulva"
    },
    {
      Symptoms: "exposing tissue below the eyeball"
    },
    {
      Symptoms: "Singeing of the fur"
    },
    {
      Symptoms: "Excessive tearing"
    },
    {
      Symptoms: "Reddish-brown staining"
    },
    {
      Symptoms: "Irritated eye"
    },
    {
      Symptoms: "Continuous pawing at nose"
    },
    {
      Symptoms: "Difficulty chewing"
    },
    {
      Symptoms: "Sedation"
    },
    {
      Symptoms: "Excessive tears"
    },
    {
      Symptoms: "Inability to blink"
    },
    {
      Symptoms: "painful muzzle"
    },
    {
      Symptoms: "Biting"
    },
    {
      Symptoms: "Posturing with flattened ears"
    },
    {
      Symptoms: "Excess fecal mucus"
    },
    {
      Symptoms: "Trouble getting up"
    },
    {
      Symptoms: "Traces of blood in saliva"
    },
    {
      Symptoms: "Abnormal tear development"
    },
    {
      Symptoms: "Nodding"
    },
    {
      Symptoms: "Mild abdominal discomfort"
    },
    {
      Symptoms: "Anxious behavior"
    },
    {
      Symptoms: "indigestion"
    },
    {
      Symptoms: "tarry stools"
    },
    {
      Symptoms: "Sudden onset of diarrhoea"
    },
    {
      Symptoms: "Mild to severe eye pain"
    },
    {
      Symptoms: "ExhiBiting reduced reflexes"
    },
    {
      Symptoms: "Eyeball moving around"
    },
    {
      Symptoms: "Reluctance to exercise"
    },
    {
      Symptoms: "Thick saliva"
    },
    {
      Symptoms: "Vomit with dark grains"
    },
    {
      Symptoms: "Bruises and pain"
    },
    {
      Symptoms: "Swollen hocks"
    },
    {
      Symptoms: "Hysteria"
    },
    {
      Symptoms: "Frequent bowel movements"
    },
    {
      Symptoms: "Visible or palpable mass"
    },
    {
      Symptoms: "Pale gums"
    },
    {
      Symptoms: "Constricted pupil of the affected eye"
    },
    {
      Symptoms: "Wide set eyes"
    },
    {
      Symptoms: "Excess thirst"
    },
    {
      Symptoms: "Irregular heartbeat"
    },
    {
      Symptoms: "Infections worsening"
    },
    {
      Symptoms: "Body swaying"
    },
    {
      Symptoms: "Fluid retention"
    },
   //
    {
      Symptoms: "Cloudiness of the eye"
    },
    {
      Symptoms: "Uncoordinated or stiff gait"
    },
    {
      Symptoms: "Muscle Trembling"
    },
    {
      Symptoms: "Twitching facial muscles"
    },
    {
      Symptoms: "Uneven heart rate"
    },
    {
      Symptoms: "No permanent teeth"
    },
    {
      Symptoms: "Eye rubbing"
    },
    {
      Symptoms: "Gagging or gasping"
    },
    {
      Symptoms: "Reluctant to have a bowel movement"
    },
    {
      Symptoms: "Defecating while walking or sleeping"
    },
    {
      Symptoms: "Metabolic hypothyroidism"
    },
    {
      Symptoms: "Uneasiness or discomfort"
    },
    {
      Symptoms: "Oral pain"
    },
    {
      Symptoms: "Dull appearance in the color of the eye"
    },
    {
      Symptoms: "Constipation"
    },
    {
      Symptoms: "reluctance to walk or jump"
    },
    {
      Symptoms: "Red and inflamed skin"
    },
    {
      Symptoms: "Atrophy"
    },
    {
      Symptoms: "stiffening"
    },
    {
      Symptoms: "Barking and Howling"
    },
    {
      Symptoms: "shrinkage"
    },
    {
      Symptoms: "Smaller or abnormally shaped penis"
    },
    {
      Symptoms: "Severe shortness of breath"
    },
    {
      Symptoms: "Cool feet"
    },
    {
      Symptoms: "difficulty walking without a limp"
    },
    {
      Symptoms: "Getting too exhausted during exercise"
    },
    {
      Symptoms: "Dizziness or feeling lightheaded"
    },
    {
      Symptoms: "Crust formation around the eye"
    },
    {
      Symptoms: "Bloating"
    },
    {
      Symptoms: "Red and irritated eyes"
    },
    {
      Symptoms: "Cramping"
    },
    {
      Symptoms: "itchy"
    },
    {
      Symptoms: "crust over"
    },
    {
      Symptoms: "Inflamed sores"
    },
    {
      Symptoms: "Redness may come and go"
    },
    {
      Symptoms: "Blood in saliva"
    },
    {
      Symptoms: "Occasional bloody nose"
    },
    {
      Symptoms: "More tired than usual"
    },
    {
      Symptoms: "Bleeding gums"
    },
    {
      Symptoms: "Lack of interest in food or exercise"
    },
    {
      Symptoms: "Dogs with separation anxiety"
    },
    {
      Symptoms: "no urination"
    },
    {
      Symptoms: "Headache"
    },
    {
      Symptoms: "cervicofacial area commonly involved."
    },
    {
      Symptoms: "Extreme tiredness"
    },
    {
      Symptoms: "Stranguria and Dysuria"
    },
    {
      Symptoms: "Inappetance"
    },
    {
      Symptoms: "Muscle twitching"
    },
    {
      Symptoms: "Patches of baldness"
    },
    {
      Symptoms: "Secondary seborrhea"
    },
    {
      Symptoms: "Tooth pain"
    },
    {
      Symptoms: "Discolored tissue especially when black"
    },
    {
      Symptoms: "A bad smell"
    },
    {
      Symptoms: "Recurrent Infections"
    },
    {
      Symptoms: "Abnormal peripheral pulses"
    },
    {
      Symptoms: "Eye discharge"
    },
    {
      Symptoms: "Loose teeth"
    },
    {
      Symptoms: "Mydriasis"
    },
    {
      Symptoms: "Weak pulses"
    },
    {
      Symptoms: "difficulty getting up"
    },
    {
      Symptoms: "Abdominal fullness"
    },
    //
    {
      Symptoms: "Behavioural changes"
    },
    {
      Symptoms: "Deafness or loss of hearing"
    },
    {
      Symptoms: "Neurologic signs"
    },
    {
      Symptoms: "Eating less than normal"
    },
    {
      Symptoms: "dysplasia"
    },
    {
      Symptoms: "loud holosystolic"
    },
    {
      Symptoms: "Reduced activity"
    },
    {
      Symptoms: "pale mucous"
    },
    {
      Symptoms: "AV block"
    },
    {
      Symptoms: "Hepatomegaly unless biliary cirrhosis"
    },
    {
      Symptoms: "Jaundice"
    },
    {
      Symptoms: "mucopurulent ocular discharge"
    },
    {
      Symptoms: "Unresponsive to movements"
    },
    {
      Symptoms: "shock"
    },
    {
      Symptoms: "Paralysis of a limb"
    },
    {
      Symptoms: "stertorous breathing"
    },
    {
      Symptoms: "Vision Loss"
    },
    {
      Symptoms: "receptive to male during estrus"
    },
    {
      Symptoms: "harsh and dry"
    },
    {
      Symptoms: "urogenital mucosa"
    },
    {
      Symptoms: "most Infections inapparent"
    },
    {
      Symptoms: "Purulent Eye discharge"
    },
    {
      Symptoms: "mild or severe with pneumonia"
    },
    {
      Symptoms: "Clear nasal"
    },
    {
      Symptoms: "Red lips and ears and gums"
    },
    {
      Symptoms: "Decreased heart rate"
    },
    {
      Symptoms: "Signs of left heart failure"
    },
    {
      Symptoms: "Agonal gasping or absence of ventilation"
    },
    //
    {
      Symptoms: "Cataracts that have a rapid"
    },
    {
      Symptoms: "Swaying of body"
    },
    {
      Symptoms: "limb Tremors"
    },
    {
      Symptoms: "Hemorrhagic stroke"
    },
    {
      Symptoms: "discharge"
    },
    {
      Symptoms: "yellow-green irises"
    },
    {
      Symptoms: "walking dandruff"
    },
    {
      Symptoms: "variable Icterus"
    },
    {
      Symptoms: "visible body wall anomaly"
    },
    {
      Symptoms: "Hemorrhage"
    },
    {
      Symptoms: "coat"
    },
    {
      Symptoms: "Prolonged Hemorrhage post-surgery"
    },
    {
      Symptoms: "Hematemesis"
    },
    {
      Symptoms: "anxiety or concurrent behavioral diagnoses"
    },
    {
      Symptoms: "edema"
    },
    {
      Symptoms: "kyphosis"
    },
    {
      Symptoms: "Ocular discharge"
    },
    {
      Symptoms: "Infrequent defecation"
    },
    {
      Symptoms: "commonly limited to glabrous skin"
    },
    {
      Symptoms: "receipt of a vaccination"
    },
    {
      Symptoms: "scleral"
    },
    {
      Symptoms: "gray white or crystalline"
    },
    {
      Symptoms: "Temporal and masseter Muscle atrophy"
    },
    {
      Symptoms: "the severity of inflammation and DJD"
    },
    {
      Symptoms: "Neurologic"
    },
    {
      Symptoms: "Rarely associated with pain or other signs of disease"
    },
    {
      Symptoms: "Conjunctivitis"
    },
    {
      Symptoms: "Shoulder luxation is commonly medial"
    },
    {
      Symptoms: "cornea vascularization ranging from superficial"
    },
    {
      Symptoms: "intermittent to persistent depending on severity"
    },
    {
      Symptoms: "dark mucous membranes"
    },
    {
      Symptoms: "Noisy respiration"
    },
    {
      Symptoms: "Pain on manipulation of the hip"
    },
    {
      Symptoms: "abnormally shallow or deep anterior chamberm"
    },
    {
      Symptoms: "virulence of infecting serovar"
    },
    {
      Symptoms: "progressive onset"
    },
    {
      Symptoms: "Infiltration of pelvic and lateral cervical musculature"
    },
    {
      Symptoms: "lizard may still be attached"
    },
    {
      Symptoms: "Pain on pressure"
    },
    {
      Symptoms: "Loss of normal cobblestone architecture of the nasal planum"
    },
    {
      Symptoms: "a pain response is elicited by palpation"
    },
    {
      Symptoms: "intermittent or continuous watery to semisolid consistency"
    },
    {
      Symptoms: "Pruritus"
    },
    {
      Symptoms: "predominate"
    },
    {
      Symptoms: "ventral neck"
    },
    {
      Symptoms: "well-circumscribed mass in systemically healthy patient"
    },
    {
      Symptoms: "lymphadenopathy"
    },
    {
      Symptoms: "Failure of puppies or kittens to thrive"
    },
    {
      Symptoms: "Abnormal Maternal Behavior"
    },
    //
    {
      Symptoms: "Edema of head or neck and forelimbs"
    },
    {
      Symptoms: "focal ischemia"
    },
    {
      Symptoms: "Hyperthermia"
    },
    {
      Symptoms: "sanguinopurulent"
    },
    {
      Symptoms: "Ill-thrift"
    },
    {
      Symptoms: "Corneal clouding"
    },
    {
      Symptoms: "heat and pain"
    },
    {
      Symptoms: "Reluctance to move"
    },
    {
      Symptoms: "persists at rest and even during sleep or light anesthesia"
    },
    {
      Symptoms: "inability to pick up a ball or get food into the mouth"
    },
    {
      Symptoms: "Elevated serum creatine kinase activity"
    },
    {
      Symptoms: "ventroflexion of the head and neck"
    },
    {
      Symptoms: "May note dyspnea"
    },
    {
      Symptoms: "arching of the thoracolumbar vertebral column"
    },
    {
      Symptoms: "Narcolepsy eye movements"
    },
    {
      Symptoms: "Nasal congestion or discharge"
    },
    //
    {
      Symptoms: "concentration is excessively high"
    },
    {
      Symptoms: "ascending lower motor neuron rigid paralysis"
    },
    {
      Symptoms: "inflammatory"
    },
    {
      Symptoms: "Strength and proprioception normal in most cases"
    },
    {
      Symptoms: "febrile but normothermia does not rule out Infection"
    },
    {
      Symptoms: "pyothorax"
    },
    {
      Symptoms: "Change from mild Pruritus"
    },
    {
      Symptoms: "mucosal Bleeding"
    },
    {
      Symptoms: "Nodules few millimeters to several centimeters in diameter"
    },
    {
      Symptoms: "varying intensity"
    },
    {
      Symptoms: "intermittent"
    },
    {
      Symptoms: "Canine papillomavirus most often oral mucosa"
    },
    {
      Symptoms: "pain"
    },
    {
      Symptoms: "may cause pooling of urine in preputial cavity"
    },
    {
      Symptoms: "paresis"
    },
    {
      Symptoms: "Bites are usually inhibited"
    },
    {
      Symptoms: "Conscious voiding patterns often present"
    },
    {
      Symptoms: "central nervous and gastrointestinal"
    },
    {
      Symptoms: "raised pink nodules ypically 1?2 cm in diameter"
    },
    {
      Symptoms: "Orthopnea"
    },
    {
      Symptoms: "jugular venipuncture"
    },
    {
      Symptoms: "May detect bosselated kidneys by abdominal palpation"
    },
    {
      Symptoms: "Excessive food-seeking and food-stealing"
    },
    {
      Symptoms: "Later Vulvar discharge"
    },
    {
      Symptoms: "Intraocular inflammation"
    },
    {
      Symptoms: "dogs with PLE have normal stools."
    },
    {
      Symptoms: "Acute onset Blindness"
    },
    {
      Symptoms: "Eating behavior changes"
    },
    {
      Symptoms: "peracute dyspnea"
    },
    {
      Symptoms: "Purulent otitis externa"
    },
    {
      Symptoms: "Abdominal or lumbar pain"
    },
    {
      Symptoms: "affects the chin or bridge of the nose"
    },
    //
    {
      Symptoms: "Uterus with closed cervix palpably enlarged"
    },
    {
      Symptoms: "Diminished activity"
    },
    {
      Symptoms: "Often Splenomegaly"
    },
    {
      Symptoms: "Licking of vulvar area"
    },
    {
      Symptoms: "Frequent or inappropriate urination"
    },
    {
      Symptoms: "Exposure to ticks"
    },
    {
      Symptoms: "No ventricular pulse can be palpated"
    },
    {
      Symptoms: "gastrointestinal Hemorrhage"
    },
    {
      Symptoms: "Febrile response"
    },
    {
      Symptoms: "missing teeth"
    },
    {
      Symptoms: "outward bulge"
    },
    {
      Symptoms: "absent menace"
    },
    {
      Symptoms: "Dysphagia- dysorexia"
    },
    {
      Symptoms: "Can eat only soft food"
    },
    {
      Symptoms: "Pharyngitis"
    },
    {
      Symptoms: "Long body"
    },
    {
      Symptoms: "reduced range of motion in affected joints"
    },
    {
      Symptoms: "redness of the skin"
    },
    {
      Symptoms: "persistent estrus (menstruation and heat)"
    },
    {
      Symptoms: "Night sweats"
    },
    {
      Symptoms: "hydrocephalus"
    },
    {
      Symptoms: "staggering may occur"
    },
    {
      Symptoms: "Hematochezia Abnormally small or ribbon like feces"
    },
    {
      Symptoms: "Itchy anus"
    },
    {
      Symptoms: "Keeping eye closed"
    },
    {
      Symptoms: "Bleeding inside the eyes"
    },
    {
      Symptoms: "Rubbing or pawing at the face"
    },
    {
      Symptoms: "Joint pain"
    },
    {
      Symptoms: "hydronephrosis"
    },
    {
      Symptoms: "straining to urinate or not voiding"
    },
    {
      Symptoms: "Diminished to absent urine stream"
    },
    {
      Symptoms: "persistent Hematuria"
    },
    {
      Symptoms: "fetal heart rates decline with delay in intervention"
    },
    {
      Symptoms: "pyometra"
    },
    {
      Symptoms: "Irregular pupil"
    },
    {
      Symptoms: "Secondary changes include glauComa"
    },
    {
      Symptoms: "Distended abdomen"
    },
    {
      Symptoms: "Trouble swallowing"
    },
    {
      Symptoms: "the eye on the affected side often appears sunken"
    },
    {
      Symptoms: "Chewing"
    },
    {
      Symptoms: "Heart murmur"
    },
    {
      Symptoms: "Coma"
    },
    {
      Symptoms: "Appear unresponsive to everyday sounds"
    },
    {
      Symptoms: "Wobbling"
    },
    {
      Symptoms: "Redness or inflammation of the skin"
    },
    {
      Symptoms: "painful underlying tooth"
    },
    {
      Symptoms: "Scabby abrasions"
    },
    {
      Symptoms: "Lightening of the skin color"
    },
    {
      Symptoms: "Excessive scaling due to shedding of skin cells"
    },
    {
      Symptoms: "Folliculitis"
    },
    {
      Symptoms: "Severe sores and Ulceration"
    },
    {
      Symptoms: "snotty nose"
    },
    {
      Symptoms: "polyphagia"
    },
    {
      Symptoms: "Abnormally large volume of feces"
    },
    {
      Symptoms: "reluctance to walk"
    },
    {
      Symptoms: "red spots from Bleeding into the skin"
    },
    {
      Symptoms: "Irregular breathing"
    },
    {
      Symptoms: "Abdominal effusion"
    },
    {
      Symptoms: "Low or absent anal tone"
    },
    {
      Symptoms: "Inability to defecate"
    },
    {
      Symptoms: "Ravenous appetite"
    },
    {
      Symptoms: "Poor mothering"
    },
    {
      Symptoms: "Licking of the genital area"
    },
    {
      Symptoms: "below the eyes stained a brownish color by tear"
    },
    {
      Symptoms: "Less enthusiasm to go for walks or play"
    },
    {
      Symptoms: "Infection"
    },
    {
      Symptoms: "Tremors"
    },
    {
      Symptoms: "Walking around in circles"
    },
    {
      Symptoms: "Inflammation in eye"
    },
    {
      Symptoms: "Unusual dark color Vomit"
    },
    {
      Symptoms: "Displaced teeth"
    },
    {
      Symptoms: "Abnormal ticking or twitching of the eyelid"
    },
    {
      Symptoms: "a drooping ear"
    },
    {
      Symptoms: "Lack of interest in eating"
    },
    {
      Symptoms: "Cowering"
    },
    {
      Symptoms: "Cowering and hiding"
    },
    {
      Symptoms: "Warm ears"
    },
    {
      Symptoms: "Slower movements"
    },
    {
      Symptoms: "Difficulty chewing and eating"
    },
    {
      Symptoms: "Pain in or around the nasal cavity"
    },
    {
      Symptoms: "Aggression"
    },
    {
      Symptoms: "Mild stomach distention or Bloating"
    },
    {
      Symptoms: "Diarrhoea"
    },
    {
      Symptoms: "Lots of blood in dog stool"
    },
    {
      Symptoms: "Appearance of vessels in the white of the eye"
    },
    {
      Symptoms: "Grapes or raisins in vomit or stool"
    },
    {
      Symptoms: "Compulsive Pacing"
    },
    {
      Symptoms: "Not being able to focus"
    },
    {
      Symptoms: "Fatigue after moderate activity"
    },
    {
      Symptoms: "Bright red tongue and gums"
    },
    {
      Symptoms: "Joint inflammation"
    },
    {
      Symptoms: "Frequent urination"
    },
    {
      Symptoms: "Increased thirst"
    },
    {
      Symptoms: "Behavioral changes"
    },
    {
      Symptoms: "Inflammation or edema"
    },
    {
      Symptoms: "Sunken appearance of the affected eye"
    },
    {
      Symptoms: "Urinary tract disorders"
    },
    {
      Symptoms: "Increased appetite"
    },
    {
      Symptoms: "Rapid heart rate"
    },
    {
      Symptoms: "Blood in urine and stool"
    },
    {
      Symptoms: "Abdominal discomfort or pain"
    },
    {
      Symptoms: "Body Tremors"
    },
    {
      Symptoms: "Muscle Tremors"
    },
    {
      Symptoms: "Warm"
    },
    {
      Symptoms: "Pain with palpation and movement"
    },
    {
      Symptoms: "Pool of blood in the iris or cornea"
    },
    {
      Symptoms: "Frequent urination and thirst"
    },
    //
    {
      Symptoms: "Small penis and testicles"
    },
    {
      Symptoms: "Whining"
    },
    {
      Symptoms: "stiff muscles"
    },
    {
      Symptoms: "lack of desire to exercise"
    },
    {
      Symptoms: "Difficult and rapid breathing"
    },
    {
      Symptoms: "Dragging hind end on the rug or floor"
    },
    {
      Symptoms: "Uterine Infections"
    },
    {
      Symptoms: "Bloody discharge from penis"
    },
    {
      Symptoms: "Fatigue"
    },
    {
      Symptoms: "Hoarse barking"
    },
    {
      Symptoms: "Lack of alertness"
    },
    {
      Symptoms: "Enlarged scrotum"
    },
    {
      Symptoms: "Altered gait"
    },
    {
      Symptoms: "Change in shape of the pupil"
    },
    {
      Symptoms: "pain when touching or moving the joint"
    },
    {
      Symptoms: "Difficult swallowing"
    },
    {
      Symptoms: "scabs and crusty skin"
    },
    {
      Symptoms: "Chewing"
    },
    {
      Symptoms: "lose weight"
    },
    {
      Symptoms: "Penis in female dogs"
    },
    {
      Symptoms: "Sudden and rapid heartbeat"
    },
    {
      Symptoms: "Poor pulse"
    },
    {
      Symptoms: "avoid walking altogether"
    },
    {
      Symptoms: "Slow breathing"
    },
    {
      Symptoms: "Lack of moisture in the eye"
    },
    {
      Symptoms: "Loss of control of bodily movements"
    },
    {
      Symptoms: "Death"
    },
    {
      Symptoms: "Skin lesion with a bulls eye effect"
    },
    {
      Symptoms: "Wide legged stance"
    },
    {
      Symptoms: "Bleeding sores"
    },
    {
      Symptoms: "Bleeding from sores on the ears"
    },
    {
      Symptoms: "Excessive tear"
    },
    {
      Symptoms: "Arthritis"
    },
    {
      Symptoms: "Disorientation Unable to recognize known objects"
    },
    {
      Symptoms: "Urinates during greetings"
    },
    {
      Symptoms: "Dog is unresponsive during the episode"
    },
    {
      Symptoms: "Blurry vision"
    },
    {
      Symptoms: "Not eating"
    },
    //
    {
      Symptoms: "Dehydration in volume-depleted patients"
    },
    {
      Symptoms: "hair loss"
    },
    {
      Symptoms: "Difficulty eating and drinking"
    },
    {
      Symptoms: "Peritonitis"
    },
    {
      Symptoms: "Constipation or pain when pooping"
    },
    {
      Symptoms: "Cold limbs"
    },
    {
      Symptoms: "Lack of stamina"
    },
    {
      Symptoms: "Droopy eyelid"
    },
    {
      Symptoms: "An abscess behind the eye"
    },
    {
      Symptoms: "Hypothermia"
    },
    {
      Symptoms: "May report previous Trauma"
    },
    {
      Symptoms: "Abdominal discomfort"
    },
    {
      Symptoms: "planum"
    },
    {
      Symptoms: "vomitus may be blood tinged"
    },
    {
      Symptoms: "societal interactions"
    },
    {
      Symptoms: "tetraplegia depending"
    },
    {
      Symptoms: "Difficult breathing"
    },
    {
      Symptoms: "Acting weak or sleepy"
    },
    {
      Symptoms: "Labored respiration"
    },
    {
      Symptoms: "louder and radiates more widely"
    },
    {
      Symptoms: "membranes"
    },
    {
      Symptoms: "often hairless"
    },
    {
      Symptoms: "Blood in ejaculate"
    },
    {
      Symptoms: "Decreased mentation"
    },
    {
      Symptoms: "Cranial mass effect structures"
    },
    {
      Symptoms: "Eye inflammation and discharge"
    },
    {
      Symptoms: "around the house"
    },
    {
      Symptoms: "Difficulty controlling a limb"
    },
    {
      Symptoms: "Food and Water Intake Changes"
    },
    {
      Symptoms: "ulva less turgid"
    },
    {
      Symptoms: "post-tussive Gagging common"
    },
    {
      Symptoms: "Gastrointestinal"
    },
    {
      Symptoms: "Urinary bladder involvement cystitis"
    },
    {
      Symptoms: "occasionally fatal enteritis"
    },
    {
      Symptoms: "Most viral"
    },
    {
      Symptoms: "higher temperatures"
    },
    {
      Symptoms: "generally during activity or exercise"
    },
    {
      Symptoms: "Absence of peripheral pulses"
    },
    {
      Symptoms: "bilateral onset"
    },
    {
      Symptoms: "Intention Tremors"
    },
    {
      Symptoms: "aggravated disappear during sleep"
    },
    {
      Symptoms: "acute to subacute focal"
    },
    {
      Symptoms: "acute worsening"
    },
    {
      Symptoms: "epiphora in bright light"
    },
    {
      Symptoms: "revalence varies by geographic region owing"
    },
    {
      Symptoms: "increased activity"
    },
    {
      Symptoms: "Sudden onset"
    },
    {
      Symptoms: "meal-related discomfort"
    },
    {
      Symptoms: "blood vessels"
    },
    {
      Symptoms: "Variable Jaundice"
    },
    //
    {
      Symptoms: "Skin Ulceration with secondary crusting"
    },
    {
      Symptoms: "Increased fecal mucus"
    },
    {
      Symptoms: "separation anxiety"
    },
    {
      Symptoms: "nephrotic syndrome"
    },
    //
    {
      Symptoms: "Small amount of liquid and mucoid"
    },
    {
      Symptoms: "Thick hair coat"
    },
    {
      Symptoms: "gastrointestinal Infection"
    },
    {
      Symptoms: "Poor body condition"
    },
    {
      Symptoms: "eyelid deformity"
    },
    {
      Symptoms: "can be band-shaped or irregular or circular"
    },
    {
      Symptoms: "Intermittent Pyrexia"
    },
    {
      Symptoms: "Elbow luxation"
    },
    {
      Symptoms: "lateral or ventrolateral cornea"
    },
    {
      Symptoms: "Rubbing at eyes"
    },
    {
      Symptoms: "increased skin turgor"
    },
    {
      Symptoms: "pelvis drops"
    },
    {
      Symptoms: "Change of voice"
    },
    {
      Symptoms: "Crepitation of the joint"
    },
    {
      Symptoms: "borborygmus"
    },
    {
      Symptoms: "abnormal iris curvature"
    },
    {
      Symptoms: "Primary reservoir host"
    },
    {
      Symptoms: "HepatoSplenomegaly"
    },
    {
      Symptoms: "Cervical spinal cord"
    },
    {
      Symptoms: "both persist throughout the syndrome"
    },
    {
      Symptoms: "Bleeding from bite site"
    },
    {
      Symptoms: "induced during extension of hip joints"
    },
    {
      Symptoms: "Tissue loss and scarring can occur"
    },
    {
      Symptoms: "responds well to antibiotic treatment"
    },
    {
      Symptoms: "Bacterial"
    },
    {
      Symptoms: "Ascites"
    },
    {
      Symptoms: "Pitting"
    },
    {
      Symptoms: "Affected animals are normal at birth"
    },
    {
      Symptoms: "malOdor"
    },
    {
      Symptoms: "Inflammatory carcinoma"
    },
    {
      Symptoms: "intermittent"
    },
    {
      Symptoms: "Maternal Aggression"
    },
    {
      Symptoms: "fractured teeth"
    },
    {
      Symptoms: "Polypnea"
    },
    {
      Symptoms: "Bloody oral discharge"
    },
    {
      Symptoms: "Lateralizing deficits predominate"
    },
    {
      Symptoms: "dark green Vulvar discharge"
    },
    {
      Symptoms: "Bleeding diathesis"
    },
    {
      Symptoms: "Animals may experience re-injury"
    },
    {
      Symptoms: "cutaneous tissues"
    },
    {
      Symptoms: "consistent frequency in a given patient"
    },
    {
      Symptoms: "acutely Swollen muscles"
    },
    {
      Symptoms: "creatine kinase activity normal"
    },
    {
      Symptoms: "Worsen with exercise"
    },
    {
      Symptoms: "plantigrade stance"
    },
    {
      Symptoms: "stiffening or overflexion of the pelvic limbs"
    },
    {
      Symptoms: "Muscular twitching"
    },
    {
      Symptoms: "Erosion or Ulceration vHemorrhage"
    },
    {
      Symptoms: "Stertor"
    },
    {
      Symptoms: "Circling"
    },
    {
      Symptoms: "Poor suckling"
    },
    {
      Symptoms: "distinguished"
    },
    {
      Symptoms: "renal failure"
    },
    {
      Symptoms: "seeking"
    },
    {
      Symptoms: "exhibit proprioceptive deficits"
    },
    {
      Symptoms: "resulting in dyspnea"
    },
    {
      Symptoms: "not develop severe Pruritus"
    },
    {
      Symptoms: "Repeated febrile"
    },
    {
      Symptoms: "Involved fat may necrose"
    },
    {
      Symptoms: "usually involves the forelimbs initially"
    },
    {
      Symptoms: "Brachycephalic syndrome may be observed"
    },
    {
      Symptoms: "hard palate"
    },
    {
      Symptoms: "areflexic"
    },
    {
      Symptoms: "Cachexia"
    },
    {
      Symptoms: "can lead to balanoposthitis and even septicemia"
    },
    {
      Symptoms: "Epistaxis or gingival Bleeding"
    },
    {
      Symptoms: "patella"
    },
    {
      Symptoms: "Growling"
    },
    {
      Symptoms: "Urgency with small volume elimination"
    },
    {
      Symptoms: "Epidermal collarettes"
    },
    {
      Symptoms: "Exposure to toxic"
    },
    {
      Symptoms: "occurs simultaneously"
    },
    {
      Symptoms: "heat"
    },
    {
      Symptoms: "Hemoglobinuria less"
    },
    {
      Symptoms: "occur without egg production"
    },
    {
      Symptoms: "Open-mouth breathing"
    },
    {
      Symptoms: "Tachypnea"
    },
    {
      Symptoms: "lung aspirate"
    },
    {
      Symptoms: "contact irritants"
    },
    {
      Symptoms: "renal capsule and pain"
    },
    {
      Symptoms: "Polydipsia and polyuria"
    },
    {
      Symptoms: "behaviors possible"
    },
    {
      Symptoms: "Urethral obstruction"
    },
    {
      Symptoms: "hemorrhagic or lochial"
    },
    {
      Symptoms: "May see accompanying epiphora"
    },
    {
      Symptoms: "Globe deviation or strabismus or rupture"
    },
    {
      Symptoms: "acute dyspnea"
    },
    {
      Symptoms: "Neurologic disease"
    },
    {
      Symptoms: "rubbing or chewing"
    },
    {
      Symptoms: "refuse to eat hard food"
    },
    {
      Symptoms: "head Trauma"
    },
    {
      Symptoms: "Signs associated with lower urinary tract"
    },
    {
      Symptoms: "Crusted Papules"
    },
    {
      Symptoms: "palpate carefully to avoid rupture"
    },
    {
      Symptoms: "nodules that ulcerate and drain"
    },
    {
      Symptoms: "Parturition with Postpartum discharge"
    },
    {
      Symptoms: "Failure to allow copulation"
    },
    {
      Symptoms: "Signs of aspiration pneumonia"
    },
    {
      Symptoms: "Poor dirofilariasis prophylaxis"
    },
    {
      Symptoms: "Cardiac arrest"
    },
    {
      Symptoms: "Sudden death"
    },
    {
      Symptoms: "Pulmonary contusions and rib fractures"
    },
    {
      Symptoms: "lower urinary"
    },
    {
      Symptoms: "Sudden onset of imbalance"
    },
    {
      Symptoms: "tiredness"
    },
    {
      Symptoms: "a reluctance to eat"
    },
    {
      Symptoms: "lost vision"
    },
    {
      Symptoms: "absent dazzle"
    },
    {
      Symptoms: "Reluctance or pain to chew"
    },
    {
      Symptoms: "Buccitis-buccal mucosal Ulceration"
    },
    {
      Symptoms: "Smaller nose"
    },
    {
      Symptoms: "include the head of the humerus"
    },
    {
      Symptoms: "Increased pain with lifting"
    },
    {
      Symptoms: "Head rubbing"
    },
    {
      Symptoms: "pyometra (pus in the uterus)"
    },
    {
      Symptoms: "Vaginal dryness"
    },
    {
      Symptoms: "caused by paralysis of the hind legs"
    },
    {
      Symptoms: "Scouting on the floor"
    },
    {
      Symptoms: "Cloudy cornea"
    },
    {
      Symptoms: "frequent swallowing"
    },
    {
      Symptoms: "Oral ulcers"
    },
    {
      Symptoms: "Increased breathing rate"
    },
    {
      Symptoms: "Inability to see clearly in bright light"
    },
    {
      Symptoms: "Bleeding from the eyes"
    },
    {
      Symptoms: "hind limb paralysis"
    },
    {
      Symptoms: "doughnut-shaped mass protruding"
    },
    {
      Symptoms: "Attenuated"
    },
    {
      Symptoms: "Vocalizing"
    },
    {
      Symptoms: "contralateral microrenale"
    },
    {
      Symptoms: "Dysuria and Hematuria"
    },
    {
      Symptoms: "voiding of small"
    },
    {
      Symptoms: "contractions cease despite"
    },
    {
      Symptoms: "infertility"
    },
    {
      Symptoms: "Uveitis"
    },
    {
      Symptoms: "Cataracts"
    },
    {
      Symptoms: "Pain during urination"
    },
    {
      Symptoms: "Slower rate of growth than littermates"
    },
    {
      Symptoms: "third eyelid"
    },
    {
      Symptoms: "Heavy salivation"
    },
    {
      Symptoms: "Grinding of teeth"
    },
    {
      Symptoms: "external Trauma"
    },
    {
      Symptoms: "Convulsions"
    },
    {
      Symptoms: "Appear unresponsive to his or her name"
    },
    {
      Symptoms: "Bleeding gums around baby teeth"
    },
    {
      Symptoms: "Knuckling of the paws when trying to walk"
    },
    {
      Symptoms: "Excessive oil on the skin"
    },
    {
      Symptoms: "lined by dark and soft necrotic dentin"
    },
    {
      Symptoms: "tip of tail or pressure points"
    },
    {
      Symptoms: "Groups of hairs under the bumps"
    },
    {
      Symptoms: "Itchiness"
    },
    {
      Symptoms: "Difficulty eating"
    },
    {
      Symptoms: "Small solid masses of the skin"
    },
    {
      Symptoms: "Scabs"
    },
    {
      Symptoms: "Hepatomegaly"
    },
    {
      Symptoms: "yellowish tone most visible in the eyes"
    },
    {
      Symptoms: "Frequency of defecation increases"
    },
    {
      Symptoms: "Bruising"
    },
    {
      Symptoms: "Posture changes"
    },
    {
      Symptoms: "Mucosal"
    },
    {
      Symptoms: "swallowing"
    },
    {
      Symptoms: "Irritation from urine"
    },
    {
      Symptoms: "Redness and other signs of irritation"
    },
    {
      Symptoms: "elbows held at a strange angle"
    },
    {
      Symptoms: "Abnormal rapid breathing"
    },
    {
      Symptoms: "Morbillivirus species Infections"
    },
    {
      Symptoms: "Blindness"
    },
    {
      Symptoms: "Exudation"
    },
    {
      Symptoms: "Skin irritation"
    },
    {
      Symptoms: "Alteration in clarity of eye"
    },
    {
      Symptoms: "Increasing attempts to swallow"
    },
    {
      Symptoms: "Corneal ulcers"
    },
    {
      Symptoms: "Ears held back"
    },
    {
      Symptoms: "Hair raised on the back of the neck"
    },
    {
      Symptoms: "Warm and dry nose"
    },
    {
      Symptoms: "Arthritic type symptoms"
    },
    {
      Symptoms: "Sweating"
    },
    {
      Symptoms: "rumbling from the abdomen"
    },
    {
      Symptoms: "Scabs on the dog skin"
    },
    {
      Symptoms: "Belching"
    },
    {
      Symptoms: "An increase in thirst"
    },
    {
      Symptoms: "Redness of the eye"
    },
    {
      Symptoms: "Low energy"
    },
    {
      Symptoms: "Excessive Pacing"
    },
    {
      Symptoms: "Decreased urine output"
    },
    {
      Symptoms: "Bowel sounds"
    },
    {
      Symptoms: "Dark urine"
    },
    {
      Symptoms: "Coma in severe cases"
    },
    {
      Symptoms: "Muscle atrophy"
    },
    {
      Symptoms: "Loss of body weight"
    },
    {
      Symptoms: "Difficulty climbing stairs"
    },
    {
      Symptoms: "Bladder disorders"
    },
    {
      Symptoms: "Erratic or restless behavior"
    },
    {
      Symptoms: "High blood pressure"
    },
    {
      Symptoms: "Blood in vomit"
    },
    {
      Symptoms: "Enlarged liver"
    },
    {
      Symptoms: "Lowered heart rate"
    },
    {
      Symptoms: "Wide leg stance"
    },
    {
      Symptoms: "Sleepiness"
    },
    {
      Symptoms: "Muscle wasting"
    },
    {
      Symptoms: "Exhaustion"
    },
    {
      Symptoms: "Swollen metaphyses"
    },
    {
      Symptoms: "Face rubbing against objects"
    },
    {
      Symptoms: "Trembling"
    },
    {
      Symptoms: "Tremors that worsen with activity"
    },
    {
      Symptoms: "Less alert"
    },
    {
      Symptoms: "Irregular or no heat cycles"
    },
    {
      Symptoms: "Eye discoloration"
    },
    {
      Symptoms: "pale or gray gums"
    },
    {
      Symptoms: "cold intolerance"
    },
    {
      Symptoms: "Thin ribbon like stool"
    },
    {
      Symptoms: "Painful ejaculation"
    },
    {
      Symptoms: "Changes in behavior"
    },
    {
      Symptoms: "muscle spasms"
    },
    {
      Symptoms: "Bloody stool"
    },
    {
      Symptoms: "Mild sensitivity to bright light"
    },
    {
      Symptoms: "open sores"
    },
    {
      Symptoms: "Drooping eye"
    },
    {
      Symptoms: "loss of consciousness"
    },
    {
      Symptoms: "Digging and Destruction"
    },
    {
      Symptoms: "appear pale"
    },
    {
      Symptoms: "Lack of normal sexual organs"
    },
    {
      Symptoms: "Very low blood pressure"
    },
    {
      Symptoms: "Breathing trouble"
    },
    {
      Symptoms: "Loss of muscle coordination"
    },
    {
      Symptoms: "Lack of tears"
    },
    {
      Symptoms: "Alteration of mental state"
    },
    {
      Symptoms: "Overextended pelvic limbs"
    },
    {
      Symptoms: "Malaise"
    },
    {
      Symptoms: "Limping or signs of pain when walking"
    },
    {
      Symptoms: "Sores on the ear that slowly get bigger"
    },
    {
      Symptoms: "Foul breath"
    },
    {
      Symptoms: "Excessive itching or chewing or licking"
    },
    {
      Symptoms: "sometimes containing blood"
    },
    {
      Symptoms: "Reduced growth in puppies"
    },
    {
      Symptoms: "Stumbling or running into objects"
    },
    {
      Symptoms: "Dog appears unaware of urination"
    },
    {
      Symptoms: "Abrupt and complete recovery"
    },
    {
      Symptoms: "Ulcerated sore in affected area"
    },
    {
      Symptoms: "Crying out while moving"
    },
    {
      Symptoms: "Icterus"
    },
    {
      Symptoms: "Hematuria pale mucous membranes"
    },
    {
      Symptoms: "Apocrine sweat gland"
    },
    {
      Symptoms: "change in bark"
    },
    {
      Symptoms: "Muscle twitching"
    },
    {
      Symptoms: "Crusting and inflammation of the skin"
    },
    {
      Symptoms: "pyoderma"
    },
    {
      Symptoms: "Refusing food"
    },
    {
      Symptoms: "Perianal Pruritus"
    },
    {
      Symptoms: "Nosebleeds from no known cause"
    },
    {
      Symptoms: "Exposure to oxidant"
    },
    {
      Symptoms: "Possible heart murmur"
    },
    {
      Symptoms: "Pain in the mastication muscles"
    },
    {
      Symptoms: "Hypertension"
    },
    {
      Symptoms: "Reluctance to run or jump or play"
    },
    {
      Symptoms: "Facial pain"
    },
    {
      Symptoms: "fungal discospondylitis causing paraparesis"
    },
    {
      Symptoms: "Stumbling or swaying"
    },
    {
      Symptoms: "Irregular heart rhythm"
    },
    {
      Symptoms: "Muscle wasting"
    },
    {
      Symptoms: "Increased heart rate"
    },
    {
      Symptoms: "holosystolic murmur"
    },
    {
      Symptoms: "echocardiographic changes"
    },
    {
      Symptoms: "intradermal raised mass"
    },
    {
      Symptoms: "Vague cranial abdominal discomfort"
    },
    {
      Symptoms: "Eyelid hyperemia"
    },
    {
      Symptoms: "Bumping into objects"
    },
    {
      Symptoms: "Limbs dragging"
    },
    {
      Symptoms: "Neck or Head Pain"
    },
    {
      Symptoms: "Vaginal discharge-less color and amount"
    },
    {
      Symptoms: "Abortion"
    },
    {
      Symptoms: "mycoplasmal"
    },
    {
      Symptoms: "shock-like state"
    },
    {
      Symptoms: "vigilance"
    },
    {
      Symptoms: "Polyuria"
    },
    {
      Symptoms: "Lack of menace responses with normal"
    },
    {
      Symptoms: "underlie hemorrhagic"
    },
    {
      Symptoms: "Neck Pain"
    },
    {
      Symptoms: "low or no incidence of the mit"
    },
    {
      Symptoms: "Bloody oral discharge and oral pain"
    },
    {
      Symptoms: "Ascites"
    },
    {
      Symptoms: "4?6 weeks that may persist for months to years"
    },
    {
      Symptoms: "Blood loss anemia"
    },
    {
      Symptoms: "abdominal discomfort"
    },
    {
      Symptoms: "Interactions with humans"
    },
    {
      Symptoms: "Dry"
    },
    {
      Symptoms: "fears"
    },
    {
      Symptoms: "Signs vary with spinal cord segment involved"
    },
    {
      Symptoms: "relieved by assuming a standing"
    },
    {
      Symptoms: "stool"
    },
    {
      Symptoms: "Extreme erythroderma stops abruptly at the hairline"
    },
    {
      Symptoms: "Initial signs"
    },
    {
      Symptoms: "Neurologic signs if caused by neurologic disease"
    },
    {
      Symptoms: "Calcium dense white to crystalline regular"
    },
    {
      Symptoms: "Bilateral exophthalmos"
    },
    {
      Symptoms: "spermatic cord"
    },
    {
      Symptoms: "Carpal and tarsal"
    },
    {
      Symptoms: "thickened and depigmented third eyelids"
    },
    {
      Symptoms: "Owners may report the appearance of a film"
    },
    {
      Symptoms: "Corneal changes"
    },
    {
      Symptoms: "Severely acidotic"
    },
    {
      Symptoms: "Bilateral hindlimb"
    },
    {
      Symptoms: "Atrophy of the thigh muscles"
    },
    {
      Symptoms: "Flatulence"
    },
    {
      Symptoms: "phacodenesis"
    },
    {
      Symptoms: "may spread particular serovar via urine"
    },
    {
      Symptoms: "Mild to moderate Lymphadenomegaly"
    },
    {
      Symptoms: "Lymphadenomegaly"
    },
    {
      Symptoms: "Polyuria and Dehydration"
    },
    {
      Symptoms: "abdominal cavity"
    },
    {
      Symptoms: "urgent need to urinate"
    },
    {
      Symptoms: "walk stiffly"
    },
    {
      Symptoms: "Subcutaneous edema"
    },
    {
      Symptoms: "temperature of affected area is normal"
    },
    {
      Symptoms: "mucopolysaccharidoses"
    },
    {
      Symptoms: "Hyperpigmentation and Lichenification"
    },
    {
      Symptoms: "arising in subcutaneous tissue"
    },
    {
      Symptoms: "diffuse edematous"
    },
    {
      Symptoms: "Excessive Maternal Behavior"
    },
    {
      Symptoms: "oral or nasal Bleeding"
    },
    {
      Symptoms: "diffuse pulmonary metastasis"
    },
    {
      Symptoms: "Elevated ICP"
    },
    {
      Symptoms: "Salivation"
    },
    //
    {
      Symptoms: "Large tongue"
    },
    {
      Symptoms: "gingiva and Epistaxis"
    },
    {
      Symptoms: "Progressive"
    },
    {
      Symptoms: "combined mushroom"
    },
    {
      Symptoms: "pulmonary system"
    },
    {
      Symptoms: "HepatoSplenomegaly"
    },
    {
      Symptoms: "distemper diagnosis"
    },
    {
      Symptoms: "progressive Muscle atrophy"
    },
    {
      Symptoms: "Muscle biopsy needed to conFirm the diagnosis"
    },
    {
      Symptoms: "Dysphonia"
    },
    {
      Symptoms: "partial trismus"
    },
    {
      Symptoms: "pelvic limbs flexed tightly against the body"
    },
    {
      Symptoms: "usually aroused by loud noises"
    },
    {
      Symptoms: "Vesicles or Pustules"
    },
    {
      Symptoms: "noisy breathing especially when animal is sleeping"
    },
    {
      Symptoms: "failure to receive response"
    },
    {
      Symptoms: "Decreased activity"
    },
    {
      Symptoms: "lower urinary tract"
    },
    {
      Symptoms: "diagnostic imaging"
    },
    {
      Symptoms: "Loss of menace responses"
    },
    {
      Symptoms: "Injected mucous membranes"
    },
    {
      Symptoms: "Papules and crusts develop on pinnae"
    },
    {
      Symptoms: "Exudate usually a small amount of oily discharge"
    },
    {
      Symptoms: "may affect the hind limbs"
    },
    {
      Symptoms: "femoral pulses absent"
    },
    {
      Symptoms: "Cutaneous flushing"
    },
    {
      Symptoms: "Paraphimosis"
    },
    {
      Symptoms: "Petechiae or ecchymoses"
    },
    {
      Symptoms: "patella can be manually displaced"
    },
    {
      Symptoms: "Spontaneous"
    },
    {
      Symptoms: "Perineum stained or soaked with urine"
    },
    //
    {
      Symptoms: "high central venous pressure"
    },
    {
      Symptoms: "Infectious agents such as ticks or other arachnids"
    },
    {
      Symptoms: "Mild Lethargy"
    },
    {
      Symptoms: "single worm"
    },
    {
      Symptoms: "Open mouth breathing"
    },
    {
      Symptoms: "thoracotomy"
    },
    {
      Symptoms: "hookworms"
    },
    {
      Symptoms: "Polyps originating"
    },
    {
      Symptoms: "History of unexplained loss of pregnancy"
    },
    {
      Symptoms: "Dramatic initial response"
    },
    {
      Symptoms: "Corneal Ulceration or desiccatio"
    },
    {
      Symptoms: "Dysuria if the cyst compresses the urethra"
    },
    {
      Symptoms: "Pyrexia"
    },
    //
    {
      Symptoms: "deafnes"
    },
    {
      Symptoms: "Self-Trauma and cutaneous inflammation"
    },
    {
      Symptoms: "chew only on the unaffected side"
    },
    {
      Symptoms: "near drowning"
    },
    {
      Symptoms: "Affected skin is usually painful"
    },
    {
      Symptoms: "staphylococcal Infection itself"
    },
    {
      Symptoms: "with open cervix may not be palpably enlarged"
    },
    {
      Symptoms: "Systolic heart murmurs reported in dogs"
    },
    {
      Symptoms: "GI Pythiosis"
    },
    {
      Symptoms: "Recent estrus with pyometra"
    },
    {
      Symptoms: "Urinary"
    },
    {
      Symptoms: "vulvar licking"
    },
    {
      Symptoms: "Irregular rhythm associated with pulse deficits"
    },
    {
      Symptoms: "right hemithorax"
    },
    //
    {
      Symptoms: "Pelvic and appendicular bone fractures"
    },
    {
      Symptoms: "vaginal Hemorrhage"
    },
    {
      Symptoms: "In the rarely affected dogs"
    },
    {
      Symptoms: "eggs detectable in feces"
    },
    {
      Symptoms: "Pale or icteric mucous membranes"
    },
    {
      Symptoms: "refusal to move"
    },
    {
      Symptoms: "lethary"
    },
    {
      Symptoms: "mydriatic and nonresponsive pupil"
    },
    {
      Symptoms: "Chews only on one side"
    },
    {
      Symptoms: "Ptyalism"
    },
    {
      Symptoms: "Bulging eyes"
    },
    {
      Symptoms: "the medial aspect of the humeral condyle"
    },
    {
      Symptoms: "Rolling"
    },
    {
      Symptoms: "Dry eyes"
    },
    {
      Symptoms: "Feces may have mucus"
    },
    {
      Symptoms: "Watery tearing eyes"
    },
    {
      Symptoms: "Nocturia"
    },
    {
      Symptoms: "Neglect of Offspring"
    },
    {
      Symptoms: "only central vision may be lost"
    },
    {
      Symptoms: "Lack of scent ability"
    },
    {
      Symptoms: "an Infection of the nostrils with a cauliflower-like growth"
    },
    {
      Symptoms: "Unwillingness to eat"
    },
    {
      Symptoms: "Belly pain"
    },
    {
      Symptoms: "interrupted or prolonged urine stream"
    },
    {
      Symptoms: "frequent trips to the litter box"
    },
    {
      Symptoms: "urocystoliths"
    },
    {
      Symptoms: "sometimes small or smooth uroliths are voided"
    },
    {
      Symptoms: "Complete outflow obstruction may result in azotemia"
    },
    {
      Symptoms: "may deliver part of litter and then stop"
    },
    {
      Symptoms: "abdominal organ compression"
    },
    {
      Symptoms: "GlauComa"
    },
    {
      Symptoms: "Deformed mouth or face"
    },
    {
      Symptoms: "Wobbly legs"
    },
    {
      Symptoms: "Pawing at the mout"
    },
    {
      Symptoms: "Be difficult to rouse from sleep"
    },
    {
      Symptoms: "teeth overcrowding"
    },
    {
      Symptoms: "Feet scraping on the ground when walking"
    },
    {
      Symptoms: "Crusting on the skin"
    },
    {
      Symptoms: "Rash is usually on the head or neck"
    },
    {
      Symptoms: "Ulceration of the skin or loss of some of the skin"
    },
    {
      Symptoms: "Accumulations hair coat"
    },
    {
      Symptoms: "Lumps"
    },
    {
      Symptoms: "Multiple lesions"
    },
    {
      Symptoms: "Flaking skin"
    },
    {
      Symptoms: "Incontinence?occasional"
    },
    {
      Symptoms: "Muffled lung sounds"
    },
    {
      Symptoms: "Straining when having bowel movement"
    },
    {
      Symptoms: "Gaseous sounds from the gut"
    },
    //
    {
      Symptoms: "Pale gums and other mucous membranes"
    },
    {
      Symptoms: "Weak pulse"
    },
    {
      Symptoms: "Straining"
    },
    {
      Symptoms: "Swallowing"
    },
    {
      Symptoms: "Nervousness"
    },
    {
      Symptoms: "Recurrent urinary tract Infections"
    },
    {
      Symptoms: "Pink eye"
    },
    {
      Symptoms: "Abnormal Bleeding"
    },
    {
      Symptoms: "Swollen and puffy elbows"
    },
    {
      Symptoms: "Open mouthed breathing"
    },
    {
      Symptoms: "Nutritional deficiencies"
    },
    {
      Symptoms: "Loss of coordination"
    },
    {
      Symptoms: "Head pressing"
    },
    {
      Symptoms: "High systolic blood pressure"
    },
    {
      Symptoms: "Large and Swollen erythematous lesions"
    },
    //
    {
      Symptoms: "The appearance of the skin around the nose"
    },
    {
      Symptoms: "Signs of pain while swallowing food"
    },
    {
      Symptoms: "Pawing at eye"
    },
    {
      Symptoms: "food fall out of the mouth"
    },
    {
      Symptoms: "Pain in the abdomen"
    },
    {
      Symptoms: "Escape behaviors"
    },
    {
      Symptoms: "Pain in a specific area"
    },
    {
      Symptoms: "Pawing at the muzzle"
    },
    {
      Symptoms: "Poor skin"
    },
    {
      Symptoms: "Excess gas or Flatulence"
    },
    {
      Symptoms: "Compulsive eating"
    },
    {
      Symptoms: "Appearing lethargic"
    },
    {
      Symptoms: "Black stool"
    },
    {
      Symptoms: "Blood in the stool"
    },
    {
      Symptoms: "Low appetite"
    },
    {
      Symptoms: "Mass can be felt in the stomach"
    },
    {
      Symptoms: "Increased water consumption"
    },
    {
      Symptoms: "Lesions-red or purple spots on the skin"
    },
    {
      Symptoms: "Soreness"
    },
    {
      Symptoms: "Shallow breathing"
    },
    {
      Symptoms: "Abnormal gait"
    },
    {
      Symptoms: "Muscle spasms"
    },
    {
      Symptoms: "General tiredness"
    },
    {
      Symptoms: "Vision may be impaired"
    },
    {
      Symptoms: "Stomach disorders"
    },
    {
      Symptoms: "Signs of uremia"
    },
    {
      Symptoms: "Altered level of consciousness"
    },
    {
      Symptoms: "Persistent Hyperventilation"
    },
    {
      Symptoms: "Urinary tract or kidney Infection"
    },
    {
      Symptoms: "Pancreatitis"
    },
    {
      Symptoms: "Paralysis"
    },
    {
      Symptoms: "Loss of the menace response"
    },
    {
      Symptoms: "Confused and disoriented"
    },
    {
      Symptoms: "Breathing difficulty"
    },
    {
      Symptoms: "Spitting up blood from the lungs"
    },
    {
      Symptoms: "Fever-as high as 106� F"
    },
    {
      Symptoms: "Failure to gain weight"
    },
    {
      Symptoms: "Eye pain"
    },
    {
      Symptoms: "Swollen limbs"
    },
    {
      Symptoms: "Stiff gait"
    },
    {
      Symptoms: "Hyperreflexia"
    },
    {
      Symptoms: "Difficulty running or jumping"
    },
    {
      Symptoms: "Dry and rough skin"
    },
    {
      Symptoms: "stumbling or lack of coordination"
    },
    {
      Symptoms: "dry and dull hair with excessive shedding"
    },
    {
      Symptoms: "Blue or purple tint to the skin"
    },
    {
      Symptoms: "Lack of stability when walking"
    },
    {
      Symptoms: "Absence of intestinal noise"
    },
    {
      Symptoms: "Decreased Bleeding"
    },
    {
      Symptoms: "Spermatic cord torsion"
    },
    {
      Symptoms: "Partially paralyzed in all four limbs"
    },
    {
      Symptoms: "Hunched back"
    },
    {
      Symptoms: "Holes in the iris"
    },
    {
      Symptoms: "persistent licking at the joint"
    },
    {
      Symptoms: "Secondary bacterial Infections"
    },
    {
      Symptoms: "Escaping"
    },
    {
      Symptoms: "Genital irritation"
    },
    {
      Symptoms: "Chest pain from angina"
    },
    {
      Symptoms: "Lack of saliva"
    },
    {
      Symptoms: "Blister"
    },
    {
      Symptoms: "Depressed proprioception"
    },
    {
      Symptoms: "Licking at the site"
    },
    {
      Symptoms: "ear tips may disappear"
    },
    {
      Symptoms: "extra tissue growth in legs"
    },
    {
      Symptoms: "reddened or Swollen gums"
    },
    {
      Symptoms: "Pneumonia in puppies"
    },
    {
      Symptoms: "Tendency or desire to sleep"
    },
    {
      Symptoms: "Urinates when excited"
    },
    {
      Symptoms: "Pale mucus membranes"
    },
    {
      Symptoms: "Pain in the nose"
    },
    {
      Symptoms: "malabsorption syndrome"
    },
    {
      Symptoms: "Sebaceous gland"
    },
    {
      Symptoms: "Scaly skin"
    },
    {
      Symptoms: "comedones"
    },
    {
      Symptoms: "Dry spots or sores on the nose and legs"
    },
    {
      Symptoms: "Pawing at the mouth or face"
    },
    {
      Symptoms: "Hesitancy to defecate"
    },
    {
      Symptoms: "Dark red urine"
    },
    {
      Symptoms: "Growths near the eye"
    },
    {
      Symptoms: "Pain in the temporomandibular joint"
    },
    {
      Symptoms: "Systolic left basilar ejection murmur"
    },
    {
      Symptoms: "Polydipsia"
    },
    {
      Symptoms: "Weight gain"
    },
    {
      Symptoms: "Localized joint heat"
    },
    {
      Symptoms: "Ipsilateral mandibular lymphadenopathy"
    },
    {
      Symptoms: "paraplegia"
    },
    {
      Symptoms: "Loss of conscious proprioception"
    },
    {
      Symptoms: "increased muscle tone"
    },
    {
      Symptoms: "Lichenification"
    },
    {
      Symptoms: "Cardiac murmur"
    },
    {
      Symptoms: "Soft systolic murmur over the pulmonic valve"
    },
    {
      Symptoms: "Weakened pulse"
    },
    {
      Symptoms: "Pale or blue tint to gums and tongue from low oxygen levels"
    },
    {
      Symptoms: "thrill or gallop heart sounds"
    },
    {
      Symptoms: "loud heart murmur"
    },
    {
      Symptoms: "Splenomegaly"
    },
    {
      Symptoms: "Heart murmurs or arrhythmias"
    },
    {
      Symptoms: "Increase in white blood cells"
    },
    {
      Symptoms: "recumbency"
    },
    {
      Symptoms: "Ribbon-like stools"
    },
    {
      Symptoms: "Acholic feces unless enteric Bleeding"
    },
    {
      Symptoms: "Endotoxic shock"
    },
    {
      Symptoms: "Licking his lips"
    },
    {
      Symptoms: "Clumsy behavior"
    },
    {
      Symptoms: "Not putting weight on a limb"
    },
    {
      Symptoms: "Restless"
    },
    {
      Symptoms: "Flagging"
    },
    {
      Symptoms: "the infecting agents"
    },
    {
      Symptoms: "In breeding kennels"
    },
    {
      Symptoms: "excitability"
    },
    {
      Symptoms: "biventricular failure with VPCs"
    },
    {
      Symptoms: "Systolic heart murmur"
    },
    {
      Symptoms: "Absence of audible heart sounds"
    },
    {
      Symptoms: "vision and pupillary light reflexes"
    },
    {
      Symptoms: "wide-base stance"
    },
    {
      Symptoms: "Inactive (scars) discrete margin"
    },
    {
      Symptoms: "precipitated during or shortly"
    },
    {
      Symptoms: "Prolonged Bleeding if provoked"
    },
    {
      Symptoms: "Sleep-wake cycle alterations"
    },
    {
      Symptoms: "gangrenous necrosis of ear tipsor and tail tip and nose and feet"
    },
    {
      Symptoms: "cold skin"
    },
    {
      Symptoms: "sternal"
    },
    {
      Symptoms: "mucopurulent"
    },
    {
      Symptoms: "stiff"
    },
    {
      Symptoms: "Hemorrhage"
    },
    {
      Symptoms: "superficial stroma"
    },
    {
      Symptoms: "Feminizing paraneoplastic syndrome"
    },
    {
      Symptoms: "Pneumonia"
    },
    {
      Symptoms: "hyperextension when stressed"
    },
    {
      Symptoms: "leading edge of corneal lesion"
    },
    {
      Symptoms: "over the eye"
    },
    {
      Symptoms: "dryness"
    },
    {
      Symptoms: "forequarters carried lower to shift weight forward"
    },
    {
      Symptoms: "iridonesis"
    },
    {
      Symptoms: "may have no clinical signs or less severe disease"
    },
    {
      Symptoms: "Petechial or ecchymotic Hemorrhages"
    },
    {
      Symptoms: "Front limbs are more severely affected than hind limbs"
    },
    {
      Symptoms: "leads to anuric renal failure"
    },
    {
      Symptoms: "Extremely painful bite site"
    },
    {
      Symptoms: "urinating in inappropriate locations"
    },
    {
      Symptoms: "Abnormal tail carriage"
    },
    {
      Symptoms: "rarely severe Hemorrhage from arteriole damage"
    },
    {
      Symptoms: "Pitting quality lost with chronicity as Fibrosis occurs"
    },
    {
      Symptoms: "Neurologic"
    },
    {
      Symptoms: "Concurrent black waxy to seborrheic otitis"
    },
    {
      Symptoms: "underlying skeletal muscle"
    },
    {
      Symptoms: "glazed eyes"
    },
    {
      Symptoms: "Warm and painful"
    },
    {
      Symptoms: "inability to properly close the jaw"
    },
    {
      Symptoms: "Nasal discharge with aspiration pneumonia"
    },
    {
      Symptoms: "Oral mass often friable"
    },
    {
      Symptoms: "demonstrate Epistaxis"
    },
    {
      Symptoms: "cerebral edema or brain herniation"
    },
    {
      Symptoms: "Nephritis progressing to renal failure"
    },
    {
      Symptoms: "Thickening of the heart valves"
    },
    {
      Symptoms: "Funduscopic abnormalities"
    },
    {
      Symptoms: "Painless"
    },
    {
      Symptoms: "gastrointestinal system"
    },
    {
      Symptoms: "Extraocular Bilateral exophthalmos"
    },
    {
      Symptoms: "Some improvement with rest."
    },
    {
      Symptoms: "Facial muscles may be contracted"
    },
    {
      Symptoms: "Esophageal and pharyngeal abnormalities"
    },
    {
      Symptoms: "exudate of ungual fold"
    },
    {
      Symptoms: "petting or other external stimuli"
    },
    {
      Symptoms: "Generally non-responsive to antibiotics"
    },
    {
      Symptoms: "Response to previous antibiotic therapy"
    },
    {
      Symptoms: "Constantly vocal or restless or quiet and inactive later"
    },
    {
      Symptoms: "progresses to rigid contracture of limbs"
    },
    {
      Symptoms: "dogs may develop acute dyspnea"
    },
    {
      Symptoms: "brainstem involvement"
    },
    {
      Symptoms: "weak pulses"
    },
    {
      Symptoms: "Cutaneous"
    },
    {
      Symptoms: "Progresses to the legs and feet and perineum"
    },
    {
      Symptoms: "yellow-brown to bloody"
    },
    {
      Symptoms: "Lower airway disease"
    },
    {
      Symptoms: "may interfere with prehension"
    },
    {
      Symptoms: "limbs often cold"
    },
    {
      Symptoms: "Diencephalic syndrome"
    },
    {
      Symptoms: "urethral obstruction"
    },
    {
      Symptoms: "Blindness or retinal Hemorrhage"
    },
    {
      Symptoms: "extends the stifle joint"
    },
    {
      Symptoms: "Signs usually precipitated by or worsened by exercise"
    },
    {
      Symptoms: "Getting on Counters or Furniture"
    },
    {
      Symptoms: "urine scalding"
    },
    {
      Symptoms: "MalOdorous mucopurulent anal discharge"
    },
    {
      Symptoms: "noticeable weakening"
    },
    {
      Symptoms: "Unexplained weight gain may be noted initially"
    },
    {
      Symptoms: "Gagging and varying degrees of dyspnea"
    },
    {
      Symptoms: "concurrent lymphedema"
    },
    {
      Symptoms: "female-only Infections"
    },
  //
    {
      Symptoms: "Papules and cutaneous nodules"
    },
    {
      Symptoms: "end inspiratory and early expiratory crackles"
    },
    {
      Symptoms: "mechanical ventilation"
    },
    {
      Symptoms: "atopic dermatitis"
    },
    {
      Symptoms: "hyperemia of mucous membranes"
    },
    {
      Symptoms: "Dilated and tortuous retinal blood vessels"
    },
    {
      Symptoms: "exocrine pancreatic insufficiency"
    },
    {
      Symptoms: "surround the ureteral orifice"
    },
    {
      Symptoms: "pica"
    },
    {
      Symptoms: "Bilateral mucopurulent Nasal discharge"
    },
    {
      Symptoms: "Periocular bite wounds"
    },
    {
      Symptoms: "Sanguineous urethral discharge in the presence of BPH"
    },
    {
      Symptoms: "Pain at prostatic or caudal abdominal palpation"
    },
    {
      Symptoms: "dependent edema"
    },
    {
      Symptoms: "maintain an unusual head or neck position"
    },
    {
      Symptoms: "Auscultation of harsh bronchovesicular sounds or crackles"
    },
    {
      Symptoms: "smoke exposure"
    },
    {
      Symptoms: "Systolic murmur loudest over the left heart base"
    },
    {
      Symptoms: "may not be pruritic if associated with hypercortisolemia"
    },
    {
      Symptoms: "Furunculosis"
    },
    {
      Symptoms: "Temporary improvement with antibiotic therapy"
    },
    {
      Symptoms: "Icterus is occasionally seen in cats but rarely seen in dogs"
    },
    {
      Symptoms: "Emaciation"
    },
    {
      Symptoms: "Hemorrhagic discharge"
    },
    {
      Symptoms: "Previous occurrence"
    },
    //
    {
      Symptoms: "dystocia"
    },
    {
      Symptoms: "Ulceration"
    },
    {
      Symptoms: "may auscult splitting of the first or second heart sound"
    },
    {
      Symptoms: "pulmonic stenosis heard over the left heart base"
    },
    {
      Symptoms: "arrhythmia is paroxysmal"
    },
    {
      Symptoms: "Cutaneous wounds"
    },
    {
      Symptoms: "irregular eye movements"
    },
    {
      Symptoms: "gingival Hemorrhage"
    },
    {
      Symptoms: "Hemoglobinemia"
    },
    {
      Symptoms: "feel dog ribs"
    },
    //
    {
      Symptoms: "corneal adhesions"
    },
    {
      Symptoms: "anisocoria if Unilaterally affected"
    },
    {
      Symptoms: "Oral mass"
    },
    {
      Symptoms: "Underbite and crooked teeth due to shorter jaw"
    },
    {
      Symptoms: "the femoral condyles"
    },
    {
      Symptoms: "Limited movement"
    },
    {
      Symptoms: "increased discharge"
    },
    {
      Symptoms: "Tail deviation and treading the hind limbs"
    },
    {
      Symptoms: "Irritability or difficulty concentrating"
    },
    {
      Symptoms: "cortical Blindness"
    },
    {
      Symptoms: "Dog whimpers"
    },
    {
      Symptoms: "Red mass appearing from under the eyelid"
    },
    {
      Symptoms: "abnormal reactions to light"
    },
    {
      Symptoms: "Enlarged eyes"
    },
    {
      Symptoms: "a polyp or other growth located near or on the nostril"
    },
    {
      Symptoms: "Fluid in the abdomen"
    },
    {
      Symptoms: "Low energy"
    },
    {
      Symptoms: "Dull coat"
    },
    {
      Symptoms: "Ureteral rupture"
    },
    {
      Symptoms: "self-induced Trauma from licking"
    },
    {
      Symptoms: "Urinary leakage"
    },
    {
      Symptoms: "Excessive or inappropriate"
    },
    {
      Symptoms: "voiding of small smooth uroliths"
    },
    {
      Symptoms: "fetal heart rates decline with delay in intervention"
    },
    {
      Symptoms: "Hyphema"
    },
    {
      Symptoms: "nose and lips and eyelids"
    },
    {
      Symptoms: "Moderate to severe Blindness"
    },
    {
      Symptoms: "Whining when eating"
    },
    {
      Symptoms: "Urinary Bleeding"
    },
    {
      Symptoms: "Digging"
    },
    {
      Symptoms: "Muscle inflammation"
    },
    {
      Symptoms: "Often they are easily startled"
    },
    {
      Symptoms: "passageway mouth and nasal cavity"
    },
    {
      Symptoms: "Abnormally worn toenails"
    },
    {
      Symptoms: "Dried discharge on the surface of a skin lesion"
    },
    {
      Symptoms: "Filling of hair follicles with oil and skin cells"
    },
    {
      Symptoms: "discolored skin"
    },
    {
      Symptoms: "Redness"
    },
    {
      Symptoms: "Scaling skin"
    },
    {
      Symptoms: "Muffled heart sounds"
    },
    {
      Symptoms: "Intestinal sounds"
    },
    {
      Symptoms: "Black and tarry stool"
    },
    {
      Symptoms: "Choledochal cyst"
    },
    {
      Symptoms: "Hard feces"
    },
    {
      Symptoms: "Pawing at the eye"
    },
    {
      Symptoms: "Blue tinged mucus membranes"
    },
    {
      Symptoms: "One or more discolored teeth"
    },
    {
      Symptoms: "Loss of muscle movement in the face"
    },
    {
      Symptoms: "General malaise"
    },
    {
      Symptoms: "Eye redness"
    },
    {
      Symptoms: "Bumps and nodules on the body"
    },
    {
      Symptoms: "Abnormal masses in the scrotum"
    },
    {
      Symptoms: "translucent inner eyelid"
    },
    {
      Symptoms: "Increased whining or crying"
    },
    {
      Symptoms: "Pink and raised growth"
    },
    {
      Symptoms: "Unable to finish eating"
    },
    {
      Symptoms: "Loud rumbling sounds from the stomach"
    },
    {
      Symptoms: "Exaggerated yawning"
    },
    {
      Symptoms: "Stops using affected limb altogether"
    },
    {
      Symptoms: "Straining when passing stools"
    },
    {
      Symptoms: "Disinterest in food"
    },
    {
      Symptoms: "Fluttering eye lid"
    },
    {
      Symptoms: "Lack of appetite"
    },
    {
      Symptoms: "Strong changes in behavior"
    },
    {
      Symptoms: "Swollen belly"
    },
    {
      Symptoms: "Irregular heart rate"
    },
    {
      Symptoms: "Lumps on or directly under the skin"
    },
    {
      Symptoms: "Partial loss of muscle control"
    },
    {
      Symptoms: "Yellowing of the skin and eyes"
    },
    {
      Symptoms: "Low tolerance to exercise"
    },
    {
      Symptoms: "Gastrointestinal Bleeding"
    },
    {
      Symptoms: "Limping on one or both hind limbs"
    },
    {
      Symptoms: "Blood in stool"
    },
    {
      Symptoms: "Itchy paws"
    },
    {
      Symptoms: "Licking the genital areas"
    },
    {
      Symptoms: "Thin or fragile skin"
    },
    {
      Symptoms: "Formation of bladder or kidney stones"
    },
    {
      Symptoms: "Complete loss of consciousness"
    },
    //
    {
      Symptoms: "Bloodshot eyes"
    },
    {
      Symptoms: "Creamy appearance of blood vessels"
    },
    {
      Symptoms: "Unequal pupil size"
    },
    {
      Symptoms: "Decreased bone density"
    },
    {
      Symptoms: "unsteadiness"
    },
    {
      Symptoms: "Plantigrade"
    },
    {
      Symptoms: "Severe Muscle pain"
    },
    {
      Symptoms: "Coarse hair that breaks easily and can fall out"
    },
    {
      Symptoms: "Mental deterioration"
    },
    {
      Symptoms: "Excessive Squinting"
    },
    {
      Symptoms: "fixed and Dilated pupils"
    },
    {
      Symptoms: "very thin to nearly bald hair coat"
    },
    {
      Symptoms: "Fast heart rate"
    },
    {
      Symptoms: "More frequent urination"
    },
    {
      Symptoms: "Heart failure"
    },
    {
      Symptoms: "Agitated state"
    },
    {
      Symptoms: "Pain within the joints"
    },
    {
      Symptoms: "Loss of muscle tone in the anal area"
    },
    {
      Symptoms: "Irregular ovarian cycles"
    },
   //
    {
      Symptoms: "Disturbance of vision"
    },
    {
      Symptoms: "Crying"
    },
    {
      Symptoms: "Fixed and dilated pupil"
    },
    {
      Symptoms: "chomping"
    },
    {
      Symptoms: "hyperpigmentation of the skin"
    },
    {
      Symptoms: "Infertility"
    },
    {
      Symptoms: "Low blood pressure"
    },
    {
      Symptoms: "Hyperventilation"
    },
    {
      Symptoms: "Bounding pulses"
    },
    {
      Symptoms: "Sudden death"
    },
    {
      Symptoms: "Fainting"
    },
    {
      Symptoms: "Foaming at the math"
    },
    {
      Symptoms: "Changes in spinal reflexes Muscle twitches"
    },
    {
      Symptoms: "Drunken gait"
    },
    {
      Symptoms: "Bruised"
    },
    {
      Symptoms: "Scoliosis"
    },
    {
      Symptoms: "Weight loss"
    },
    {
      Symptoms: "Loss of Appetite"
    },
    {
      Symptoms: "ear may become malformed"
    },
    {
      Symptoms: "Loss of Appetite"
    },
    {
      Symptoms: "Blood tinged saliva"
    },
    {
      Symptoms: "Infections of the eyes"
    },
    {
      Symptoms: "reluctance or difficulty eating"
    },
    {
      Symptoms: "Difficult to rouse from sleep"
    },
    {
      Symptoms: "Submissive Urination"
    },
    {
      Symptoms: "Hearing loss"
    },
    {
      Symptoms: "most are non-painful and non-pruritic"
    },
    {
      Symptoms: "Obstructive masses in the animal's nose"
    },
    {
      Symptoms: "Exercise intolerance"
    },
    {
      Symptoms: "dysphagia exophthalmus"
    },
    //
    {
      Symptoms: "Increased amount or frequency of urination"
    },
    {
      Symptoms: "Enlargement of nipples"
    },
    {
      Symptoms: "Oral mucus membranes"
    },
    {
      Symptoms: "Hyperglycemia"
    },
    {
      Symptoms: "Severe dental disease"
    },
    {
      Symptoms: "Increased heart rate or a weak pulse"
    },
    {
      Symptoms: "Increased susceptibility to disease"
    },
    {
      Symptoms: "Excessive rubbing of eye or face"
    },
    {
      Symptoms: "Hypothyroidism"
    },
    {
      Symptoms: "Dementia"
    },
    {
      Symptoms: "Bounding pulses"
    },
    {
      Symptoms: "Irritability or changes in behavior"
    },
    {
      Symptoms: "Decreased range of motion"
    },
    {
      Symptoms: "spinal pain"
    },
    {
      Symptoms: "Cranial nerve abnormalities"
    },
    {
      Symptoms: "dry seborrhea and hyperhidrotic"
    },
    {
      Symptoms: "Gallop rhythm"
    },
    {
      Symptoms: "Rarely a diastolic murmur"
    },
    {
      Symptoms: "Heart murmurs"
    },
    {
      Symptoms: "Breathing troubles (too fast or too slow)"
    },
    {
      Symptoms: "Slower heart rate"
    },
    {
      Symptoms: "soft diastolic murmur"
    },
    {
      Symptoms: "arterial thromboembolism"
    },
    {
      Symptoms: "membranes around the heart and brain"
    },
    {
      Symptoms: "frequently heavily pigmented"
    },
    {
      Symptoms: "Prostatic pain"
    },
    {
      Symptoms: "apprehension"
    },
    {
      Symptoms: "yellowing of skin eyes"
    },
    {
      Symptoms: "Bleeding tendencies"
    },
    {
      Symptoms: "thickening"
    },
    {
      Symptoms: "Lack of pain"
    },
    {
      Symptoms: "Difficulty eating and swallowing"
    },
    {
      Symptoms: "Unsteady"
    },
    {
      Symptoms: "Fully cornified and crenulated"
    },
    {
      Symptoms: "particularly with primary ciliary dyskinesia"
    },
    {
      Symptoms: "ileus"
    },
    {
      Symptoms: "Inflammation around catheters tubes"
    },
    {
      Symptoms: "several littermate pups"
    },
    {
      Symptoms: "more rarely Melena and borborygmus"
    },
    {
      Symptoms: "Hyperkalemia"
    },
    {
      Symptoms: "Cardiac gallop rhythm"
    },
    {
      Symptoms: "Head tilt and episodes"
    },
    {
      Symptoms: "Dysmetria and disequilibrium"
    },
    {
      Symptoms: "pale pink"
    },
    {
      Symptoms: "Mild to severe CNS dysfunction"
    },
    {
      Symptoms: "Underlying skin irritation may be minimal"
    },
    {
      Symptoms: "behavior changes"
    },
    {
      Symptoms: "shyperreflective in the tapetum"
    },
    {
      Symptoms: "Vary with cause of effusion"
    },
    {
      Symptoms: "acute hemorrhagic gastroenteritis"
    },
    {
      Symptoms: "venipuncture"
    },
    {
      Symptoms: "loose stools"
    },
    {
      Symptoms: "paraparesis"
    },
    {
      Symptoms: "Weak puppies and kittens"
    },
    {
      Symptoms: "including night waking"
    },
    {
      Symptoms: "Affected areas may be painful"
    },
    {
      Symptoms: "one or more animals affected in a litter"
    },
    {
      Symptoms: "history of stress"
    },
    {
      Symptoms: "Chemosis"
    },
    {
      Symptoms: "vesicles uncommon"
    },
    {
      Symptoms: "stilted gait in all limbs"
    },
    {
      Symptoms: "May see a retained foreign body"
    },
    {
      Symptoms: "keratitis or Uveitis"
    },
    {
      Symptoms: "crepitus"
    },
    {
      Symptoms: "gyneComastia"
    },
    {
      Symptoms: "exposure to oxidizing substances"
    },
    //
    {
      Symptoms: "may lead to Blindness"
    },
    {
      Symptoms: "prolapsed third eyelid"
    },
    {
      Symptoms: "superficial vascularization"
    },
    {
      Symptoms: "proximal lesion"
    },
    {
      Symptoms: "aphakic crescent"
    },
    {
      Symptoms: "Incidental host"
    },
    {
      Symptoms: "Mild asymmetry"
    },
    {
      Symptoms: "intermuscular Lipomas"
    },
    {
      Symptoms: "May also involve pinnae and periocular region"
    },
    {
      Symptoms: "sequential rather than concurrent"
    },
    {
      Symptoms: "may persist despite antimicrobial therapy"
    },
    {
      Symptoms: "Frenzied facial Pruritus"
    },
    {
      Symptoms: "induce bone destruction and proliferation"
    },
    {
      Symptoms: "painful mammary chains"
    },
    {
      Symptoms: "ravenous appetite or Inappetence"
    },
    {
      Symptoms: "Neglect of puppies and kittens"
    },
    {
      Symptoms: "Neurologic abnormalities"
    },
    {
      Symptoms: "Excess urinary excretion of GAG"
    },
    {
      Symptoms: "scar tissue that impedes normal function"
    },
    {
      Symptoms: "Sleep with eyes open"
    },
    {
      Symptoms: "Heart murmur due to anemia"
    },
   //
    {
      Symptoms: "Familial reflex myoclonus observed"
    },
    {
      Symptoms: "marked jaw pain with manipulation and trismus"
    },
    {
      Symptoms: "cramping and myalgia"
    },
    {
      Symptoms: "Generalized Muscle atrophy mild to severe"
    },
    {
      Symptoms: "hypertrophy of some muscles especially the tongue"
    },
    {
      Symptoms: "May improve with exercise"
    },
    {
      Symptoms: "No loss of consciousness"
    },
    {
      Symptoms: "Deformity"
    },
    {
      Symptoms: "Nasopharyngeal or Aural Polyps"
    },
    {
      Symptoms: "Scarring"
    },
    {
      Symptoms: "Secretions or dried"
    },
    {
      Symptoms: "multifocal lesion"
    },
    {
      Symptoms: "Tendency to remain"
    },
    {
      Symptoms: "Mydriasis or miosis and incoordinated gait"
    },
    {
      Symptoms: "including loss of swallowing reflex"
    },
    {
      Symptoms: "Gray collies"
    },
    {
      Symptoms: "Petechial Hemorrhages"
    },
    {
      Symptoms: "may be non-weight-bearing"
    },
    {
      Symptoms: "nail beds often blue"
    },
    {
      Symptoms: "Disseminated"
    },
    {
      Symptoms: "Patient intermittently carries"
    },
    {
      Symptoms: "machinery-type murmur loudest"
    },
    {
      Symptoms: "The pet gets on furniture and counters"
    },
    {
      Symptoms: "wet vulva or prepuce"
    },
    {
      Symptoms: "Ulceration of the perianal skin with sinus tract formation"
    },
    {
      Symptoms: "muffled or distant heart sounds"
    },
    {
      Symptoms: "Non-inflammatory Subcutaneous edema"
    },
    {
      Symptoms: "Abdominal discomfort or pain ocalized or generalized"
    },
    {
      Symptoms: "Direct damage of airway components"
    },
    {
      Symptoms: "Infection or abscess"
    },
    {
      Symptoms: "Possible Melena"
    },
    {
      Symptoms: "rectal prolapse if colorectal form"
    },
    {
      Symptoms: "neck surgery"
    },
    {
      Symptoms: "allergic contact dermatitis or irritant contact dermatitis"
    },
    {
      Symptoms: "polyuria"
    },
    {
      Symptoms: "diabetes mellitus"
    },
    {
      Symptoms: "Urinary tract Infection"
    },
    {
      Symptoms: "most dramatic predominate signs"
    },
    {
      Symptoms: "Fractures of the bony orbit or skull"
    },
    {
      Symptoms: "Sanguineous urethral discharge"
    },
    {
      Symptoms: "Abdominal palpation may reveal thickened bowel loops"
    },
    {
      Symptoms: "May have oral Ulceration"
    },
    {
      Symptoms: "irritability"
    },
    {
      Symptoms: "Expectoration of blood or blood-tinged fluid"
    },
    {
      Symptoms: "adverse drug effects"
    },
    {
      Symptoms: "may radiate widely but particularly dorsally on left"
    },
    {
      Symptoms: "cellulitis if deep"
    },
    {
      Symptoms: "Open cervix blood-stained"
    },
    {
      Symptoms: "ConFirm history of fights or puncture wounds"
    },
    {
      Symptoms: "An abdominal mass is often palpable"
    },
    {
      Symptoms: "Protrusion of round"
    },
    {
      Symptoms: "Attractive to males"
    },
    {
      Symptoms: "Intraluminal mass protruding from the vulva"
    },
    //
    {
      Symptoms: "Necrosis of affected skin especially mucous membranes"
    },
    {
      Symptoms: "murmur depending"
    },
    {
      Symptoms: "A diastolic decrescendo murmur results if the VSD undermines anatomic support of the aortic valve"
    },
    {
      Symptoms: "Prolonged Bleeding after surgery or Trauma"
    },
    {
      Symptoms: "Hemoglobinuria"
    },
    {
      Symptoms: "feel spine"
    },
    {
      Symptoms: "uicerated cornea"
    },
    {
      Symptoms: "usuallynormal anterior segment"
    },
    {
      Symptoms: "Tooth displacement"
    },
    {
      Symptoms: "Feet turned outward"
    },
    {
      Symptoms: "the trochlear ridges of the talus"
    },
    {
      Symptoms: "Broken bone"
    },
    {
      Symptoms: "Attraction of male dogs"
    },
    {
      Symptoms: "Decreased sexual desire"
    },
    {
      Symptoms: "Miscarriage"
    },
    {
      Symptoms: "compulsive Circling"
    },
    {
      Symptoms: "Behavioral distress"
    },
    //
    {
      Symptoms: "Red spot on the white of the eye"
    },
    {
      Symptoms: "Lumps in the throat"
    },
    {
      Symptoms: "The liver may also be affected"
    },
    {
      Symptoms: "Greenish"
    },
    {
      Symptoms: "Uroliths may be palpable"
    },
    {
      Symptoms: "palpable distension of the urinary bladder"
    },
    {
      Symptoms: "Some may present for urethral obstruction"
    },
    {
      Symptoms: "Complete outflow obstruction"
    },
    {
      Symptoms: "Sometimes small or smooth uroliths are voided"
    },
    {
      Symptoms: "hydronephrosis and renal insufficiency"
    },
    {
      Symptoms: "No vision loss unless mass"
    },
    {
      Symptoms: "Depigmented nasal planum"
    },
    {
      Symptoms: "Visual evidence of tapeworms"
    },
    {
      Symptoms: "Inability to eat"
    },
    {
      Symptoms: "Muscle Tremors or spasms"
    },
    {
      Symptoms: "Cyanosis"
    },
    {
      Symptoms: "Trying to jump out of window"
    },
    {
      Symptoms: "Bark excessively"
    },
    {
      Symptoms: "Difficulty walking"
    },
    {
      Symptoms: "Mega-esophagus"
    },
    {
      Symptoms: "Loss of pigment in skin and hair"
    },
    {
      Symptoms: "Accumulation of debris around the hair shaft"
    },
    {
      Symptoms: "Non-healing wounds"
    },
    {
      Symptoms: "Skin lesions"
    },
    {
      Symptoms: "Crusty"
    },
    {
      Symptoms: "Loss of pigment in the nose"
    },
    {
      Symptoms: "Abnormal heart rhythm"
    },
    {
      Symptoms: "Gas"
    },
    {
      Symptoms: "Very hearty appetite"
    },
    {
      Symptoms: "Lack of appetitie"
    },
    {
      Symptoms: "yellowing of skin"
    },
    {
      Symptoms: "Distended bladder"
    },
    {
      Symptoms: "Discomfort"
    },
    {
      Symptoms: "Enlarged spleen"
    },
    {
      Symptoms: "Crackling sound when breathing"
    },
    {
      Symptoms: "Parasites"
    },
    {
      Symptoms: "Scrotal dermatitis"
    },
    {
      Symptoms: "Pink eye"
    },
    {
      Symptoms: "Reduced activity level"
    },
    {
      Symptoms: "Low body temperature"
    },
    {
      Symptoms: "Excessive Vocalizations"
    },
    {
      Symptoms: "Immobilization"
    },
    {
      Symptoms: "Licking"
    },
    {
      Symptoms: "Foot Infections"
    },
    {
      Symptoms: "Blood or mucus in the stools"
    },
    {
      Symptoms: "Loss of weight"
    },
    {
      Symptoms: "Thin skin"
    },
    {
      Symptoms: "Visual problems"
    },
    {
      Symptoms: "Cardiopulmonary arrest"
    },
    {
      Symptoms: "Bluish skin and gums"
    },
    {
      Symptoms: "Walking in circles"
    },
    {
      Symptoms: "Ulcers"
    },
    {
      Symptoms: "Increase in fluid intake"
    },
    {
      Symptoms: "yellowing of the skin or whites of the eyes"
    },
    {
      Symptoms: "Difficulty defecating"
    },
    {
      Symptoms: "Poor growth"
    },
    {
      Symptoms: "Overexcitement"
    },
    {
      Symptoms: "Mouth sores"
    },
    {
      Symptoms: "Thinning hair"
    },
    {
      Symptoms: "Yellowish plaques near the eyelids"
    },
    {
      Symptoms: "Poor reflexes"
    },
    {
      Symptoms: "Abnormal movements"
    },
    {
      Symptoms: "Urolithiasis"
    },
    {
      Symptoms: "Blood in urine"
    },
    {
      Symptoms: "Bloody stools"
    },
    {
      Symptoms: "Lowered muscle strength"
    },
    {
      Symptoms: "Fingernails that break easily"
    },
    {
      Symptoms: "Weak bones"
    },
    {
      Symptoms: "Excessive blinking"
    },
    {
      Symptoms: "low heart and breathing rates"
    },
    {
      Symptoms: "increased dark pigmentation in the skin"
    },
    {
      Symptoms: "Pain when breathing"
    },
    {
      Symptoms: "Rapid heartbeat"
    },
    {
      Symptoms: "Aggravation"
    },
    {
      Symptoms: "Split heats"
    },
    {
      Symptoms: "Pain in lumbar region"
    },
    {
      Symptoms: "Muscle degeneration"
    },
    {
      Symptoms: "Unexplained growth or tumor on testicles"
    },
    {
      Symptoms: "Iris thinning"
    },
    //
    {
      Symptoms: "Blood in saliva"
    },
    {
      Symptoms: "tongue chewing"
    },
    {
      Symptoms: "Unexplained growth"
    },
    {
      Symptoms: "Coprophagia"
    },
    {
      Symptoms: "Chills"
    },
    {
      Symptoms: "a mass in the abdomen"
    },
    {
      Symptoms: "Rapid rise in temperature"
    },
    {
      Symptoms: "Bladder Infections"
    },
    {
      Symptoms: "inflamed area spreading"
    },
    {
      Symptoms: "Abnormal hair streams"
    },
    {
      Symptoms: "Increased drinking and urination"
    },
    {
      Symptoms: "Difficulty chewing or swallowing"
    },
    {
      Symptoms: "sores on the face"
    },
    {
      Symptoms: "Blood in urine or stool"
    },
    {
      Symptoms: "Significant loss of weight"
    },
    {
      Symptoms: "Abscess"
    },
    {
      Symptoms: "Unable to rouse from sleep"
    },
    {
      Symptoms: "Puppies and fearful or shy adults"
    },
    {
      Symptoms: "Losing weight"
    },
    {
      Symptoms: "Exudative pleural or peritoneal effusions"
    },
    ///
    {
      Symptoms: "Discolored dark or grey patches of skin"
    },
    {
      Symptoms: "mammary glands"
    },
    {
      Symptoms: "Wounds or deep abscesses"
    },
    {
      Symptoms: "Tail chasing"
    },
    {
      Symptoms: "Paleness of mucus membranes"
    },
    {
      Symptoms: "Dark-colored tarry stools"
    },
    {
      Symptoms: "Possible Jaundice and Hemoglobinuria"
    },
    {
      Symptoms: "Dried blood in the stool (Melena)"
    },
    {
      Symptoms: "Continuous murmur"
    },
    {
      Symptoms: "Pain when petted or touched"
    },
    {
      Symptoms: "Local lymphadenopathy"
    },
    {
      Symptoms: "Scrotal or penile edema"
    },
    {
      Symptoms: "apocrine sweating"
    },
    {
      Symptoms: "Signs of CHF"
    },
    {
      Symptoms: "arrhythmia or common"
    },
    {
      Symptoms: "Inability to exercise"
    },
    {
      Symptoms: "Arrhythmia and pulse deficit"
    },
    {
      Symptoms: "pigmenturia"
    },
    {
      Symptoms: "Ascites or fluid accumulation"
    },
    {
      Symptoms: "severe bilirubinuria"
    },
    {
      Symptoms: "Concentrated urine"
    },
    {
      Symptoms: "lung aspirates"
    },
    {
      Symptoms: "Impaired vision in dim light"
    },
    {
      Symptoms: "Disorientation/Confusion"
    },
    {
      Symptoms: "pale vaginal epithelium"
    },
    {
      Symptoms: "Moist"
    },
    {
      Symptoms: "Ulcerative"
    },
    {
      Symptoms: "dry and hacking"
    },
    {
      Symptoms: "minimal"
    },
    {
      Symptoms: "Distress Vocalization"
    },
    {
      Symptoms: "Signs of hepatic failure"
    },
    {
      Symptoms: "Diffuse tapetal hyperreflectivity"
    },
    {
      Symptoms: "friable"
    },
    {
      Symptoms: "Episodic vague peri- or postprandial"
    },
    {
      Symptoms: "sometimes with hyperpigmented central areas"
    },
    {
      Symptoms: "Muffled heart and lung sounds ventrally"
    },
    {
      Symptoms: "reduced body condition"
    },
    {
      Symptoms: "cystocentesis"
    },
    {
      Symptoms: "steatorrhea"
    },
    {
      Symptoms: "Back and Neck Pain"
    },
    {
      Symptoms: "Immunocompromised animals"
    },
    {
      Symptoms: "Anemia may or may not be an important feature"
    },
    {
      Symptoms: "colonic lymphoma"
    },
    {
      Symptoms: "situations of high arousal or stress"
    },
    {
      Symptoms: "frequently Asymptomatic"
    },
    {
      Symptoms: "Follicle formation on posterior third eyelid surface"
    },
    {
      Symptoms: "Inappetence and Lethargy"
    },
    //
    {
      Symptoms: "typically starting in the pelvic limbs"
    },
    {
      Symptoms: "Often rapidly seals"
    },
    {
      Symptoms: "Corneal vascularization"
    },
    {
      Symptoms: "the affected limb"
    },
    {
      Symptoms: "recumbency"
    },
    {
      Symptoms: "Peripheral"
    },
    {
      Symptoms: "Carpal Joint pain"
    },
    {
      Symptoms: "Pigmentary keratitis"
    },
    {
      Symptoms: "pigmentation"
    },
    {
      Symptoms: "Blindness"
    },
    {
      Symptoms: "may feel mid-abdominal mass"
    },
    {
      Symptoms: "may lead to rectal prolapse"
    },
    {
      Symptoms: "Lens luxation"
    },
    {
      Symptoms: "Peracute to Subacute Disease"
    },
    {
      Symptoms: "Polydipsia and polyuria"
    },
    {
      Symptoms: "Nail scuffing in all limbs"
    },
    {
      Symptoms: "Recumbency by 2 to 4 days"
    },
    {
      Symptoms: "edema slower to develop than rattlesnake bite"
    },
    {
      Symptoms: "Bladder wall thickening or crepitus"
    },
    {
      Symptoms: "results from dysfunction of caudal nerves"
    },
    {
      Symptoms: "rarely feet and genitalia"
    },
    {
      Symptoms: "glucocorticoid tachyphylaxis"
    },
    {
      Symptoms: "dorsal thoracic and scapular area and pelvic region"
    },
    {
      Symptoms: "Inflammatory carcinoma"
    },
    {
      Symptoms: "Dehydration and septic shock"
    },
    {
      Symptoms: "Pericardial effusion"
    },
    {
      Symptoms: "Reduced milk production"
    },
    {
      Symptoms: "Metachromatic granules in blood leukocytes"
    },
    {
      Symptoms: "may look normal at rest"
    },
    {
      Symptoms: "Acute death"
    },
    {
      Symptoms: "Concurrent systemic manifestations"
    },
    {
      Symptoms: "limbs and neck and head"
    },
    {
      Symptoms: "Variable Muscle pain"
    },
    {
      Symptoms: "Muscle hypertrophy or atrophy"
    },
    {
      Symptoms: "Atrophy of proximal limb"
    },
    {
      Symptoms: "May be exacerbated by cold"
    },
    {
      Symptoms: "Severity varies"
    },
    {
      Symptoms: "myoglobinuria"
    },
    {
      Symptoms: "sloughing of nail"
    },
    {
      Symptoms: "Concurrent dental"
    },
    {
      Symptoms: "separate from the dam and the rest of the litter"
    },
    {
      Symptoms: "hypothermia was observed at higher doses"
    },
    {
      Symptoms: "trismus"
    },
    {
      Symptoms: "tetraplegia may develop in the final stages"
    },
    {
      Symptoms: "secondary to a perforated gastric ulcer"
    },
    {
      Symptoms: "Skin becomes thickened"
    },
    {
      Symptoms: "abdominal palpation"
    },
    {
      Symptoms: "Mucosal Hemorrhage"
    },
    {
      Symptoms: "expiratory wheezes on auscultation"
    },
    {
      Symptoms: "intravascular coagulation"
    },
    {
      Symptoms: "Priapism persistent penile erection"
    },
    //
    {
      Symptoms: "patella remains luxated most of the time"
    },
    {
      Symptoms: "murmur can be loud near the manubrium sterni"
    },
    {
      Symptoms: "furniture during play to get attention or to rest"
    },
    {
      Symptoms: "Occasional vesicles are transient"
    },
    {
      Symptoms: "Licking and self-mutilation"
    },
    {
      Symptoms: "Ascites prominent among them"
    },
    {
      Symptoms: "Inflammatory edema"
    },
    {
      Symptoms: "Displaced or attenuated apical cardiac impulse"
    },
    {
      Symptoms: "patient usually resents palpation"
    },
    {
      Symptoms: "Vague nonspecific signs if gastrointestinal EMP"
    },
    {
      Symptoms: "Difficult or rapid breathing"
    },
    {
      Symptoms: "Recent anesthesia"
    },
    {
      Symptoms: "polydypsia"
    },
    {
      Symptoms: "hyperthyroidism"
    },
    {
      Symptoms: "transiently improve with fluids"
    },
    {
      Symptoms: "Systemic injuries"
    },
    {
      Symptoms: "Stiff hindlimb gait"
    },
    {
      Symptoms: "edema or cavitary effusion or changes in pulse quality"
    },
    {
      Symptoms: "aggressiveness and reclusiveness are common"
    },
    {
      Symptoms: "Concurrent signs of shock can be present"
    },
    {
      Symptoms: "Acute onset of dyspnea"
    },
    {
      Symptoms: "Murmur midsystolic"
    },
    {
      Symptoms: "Pyrexia and sterile suppurative arthritis"
    },
    {
      Symptoms: "periuria Stranguria"
    },
    {
      Symptoms: "Circular erythematous or hyperpigmented spots"
    },
    {
      Symptoms: "purulent vaginal discharge often only presentation"
    },
    {
      Symptoms: "Vaginal discharge that may be serosanguinous"
    },
    {
      Symptoms: "tongue-shaped or donut-shaped tissue mass"
    },
    {
      Symptoms: "Refuses mating"
    },
    {
      Symptoms: "mucocutaneous junctions"
    },
    {
      Symptoms: "Femoral pulses"
    },
    {
      Symptoms: "Abdominal organ injury"
    },
    {
      Symptoms: "Head tilt mild to marked"
    },
    {
      Symptoms: "Blood loss anemia if prolonged Hemorrhage"
    },
    {
      Symptoms: "Orange-tinged feces"
    },
    {
      Symptoms: "weak pulse"
    },
    {
      Symptoms: "perforated cornea"
    },
    {
      Symptoms: "hyperemia"
    },
    {
      Symptoms: "Mucosal Ulceration"
    },
    {
      Symptoms: "Sticking out tongue"
    },
    {
      Symptoms: "ear canal painful"
    },
    {
      Symptoms: "thinning of the haircoat"
    },
    {
      Symptoms: "head pressing"
    },
    {
      Symptoms: "White or pale gums"
    },
    {
      Symptoms: "Discolored urine"
    },
    {
      Symptoms: "Sudden Blindness"
    },
    {
      Symptoms: "shiny reflection of the eyes"
    },
    {
      Symptoms: "Malnourishment"
    },
    {
      Symptoms: "Nephroureteroliths"
    },
    {
      Symptoms: "Nephroliths"
    },
    {
      Symptoms: "striking leukotrichia"
    },
    {
      Symptoms: "Visible pain when opening mouth"
    },
    {
      Symptoms: "Unable to bend legs"
    },
    {
      Symptoms: "Excessive nasal mucus"
    },
    {
      Symptoms: "Shying away when the face is petted"
    },
    {
      Symptoms: "Fail to respond to familiar verbal commands"
    },
    {
      Symptoms: "Difficulty getting up from a sitting"
    },
    {
      Symptoms: "Patches of reddened skin"
    },
    //
    {
      Symptoms: "Abnormally smaller volume of feces"
    },
    {
      Symptoms: "Bloody urine or stool"
    },
    {
      Symptoms: "Decreased tear production"
    },
    {
      Symptoms: "Decreased tear production"
    },
    {
      Symptoms: "Lumps around the anus"
    },
    {
      Symptoms: "Behaviour changes"
    },
    {
      Symptoms: "tongue chewing or foaming at the mouth"
    },
    {
      Symptoms: "Frequent gas"
    },
    {
      Symptoms: "Discharge from eye"
    },
    {
      Symptoms: "Holding head lower than back"
    },
    {
      Symptoms: "Whining or whimpering"
    },
    {
      Symptoms: "Growth or growths in mouth"
    },
    {
      Symptoms: "Erythema"
    },
    {
      Symptoms: "Renal failure"
    },
    {
      Symptoms: "Urinary tract Infections"
    },
    {
      Symptoms: "Breathing distress"
    },
    {
      Symptoms: "Runny eyes and nose"
    },
    {
      Symptoms: "Increase in urination"
    },
    {
      Symptoms: "Acting fearful"
    },
    {
      Symptoms: "Compulsive Circling"
    },
    {
      Symptoms: "Recurrent skin Infections"
    },
    //
    {
      Symptoms: "Extreme fluctuation in weight gaining"
    },
    {
      Symptoms: "Yellow or creamy fat deposits in the cornea"
    },
    {
      Symptoms: "Stupor and Coma"
    },
    {
      Symptoms: "Aspiration pneumonia"
    },
    {
      Symptoms: "Unusual behavior"
    },
    {
      Symptoms: "Loss of muscle mass"
    },
    {
      Symptoms: "Eye twitching"
    },
    {
      Symptoms: "increased susceptibility"
    },
    {
      Symptoms: "Frothy discharge from nose and mouth"
    },
    {
      Symptoms: "yellow discoloration of various tissues"
    },
    {
      Symptoms: "Elevated blood pressure"
    },
    {
      Symptoms: "Fluid in abdomen"
    },
    {
      Symptoms: "Inability to wag tail"
    },
    {
      Symptoms: "Hypoluteoidism"
    },
    {
      Symptoms: "Retrograde ejaculation"
    },
    {
      Symptoms: "Rumbling and gurgling abdominal sounds"
    },
    {
      Symptoms: "Decrease in reflex of appendages"
    },
    {
      Symptoms: "Discharge from the eyes or nose"
    },
    {
      Symptoms: "Excess scaling and follicular casts"
    },
    {
      Symptoms: "foaming at the mouth"
    },
    {
      Symptoms: "Change in Schedule"
    },
    {
      Symptoms: "Pale skin"
    },
    {
      Symptoms: "Blood clots"
    },
    {
      Symptoms: "Burns to the skin and eyes"
    },
    {
      Symptoms: "Necrotic tissue around the bite"
    },
    {
      Symptoms: "Urine color changes may look like port wine"
    },
    {
      Symptoms: "Small white growth on the tongue"
    },
    {
      Symptoms: "Trouble eating and drinking"
    },
    {
      Symptoms: "Intestinal inflammation"
    },
    {
      Symptoms: "Previously Traumatized dogs"
    },
    {
      Symptoms: "Abdominal effusion"
    },
    {
      Symptoms: "Oozing or Bleeding around areas of hair loss"
    },
    {
      Symptoms: "Macular melanosis and linear preputial dermatitis"
    },
    {
      Symptoms: "brittle hair shafts and hardened skin on the neck"
    },
    {
      Symptoms: "Foul-smelling"
    },
    {
      Symptoms: "Reddish-brown urine"
    },
    {
      Symptoms: "Petechiae"
    },
    {
      Symptoms: "Lessened activity"
    },
    {
      Symptoms: "Arrhythmias"
    },
    {
      Symptoms: "Lowered body temperature"
    },
    {
      Symptoms: "Fresh blood in the stool"
    },
    {
      Symptoms: "uroliths causing obstructive uropathy"
    },
    {
      Symptoms: "Cautious compression"
    },
    {
      Symptoms: "Difficulty posturing to urinate"
    },
    {
      Symptoms: "Groaning when lying down"
    },
    {
      Symptoms: "hemiparesismental dullness"
    },
    {
      Symptoms: "Strange eye movements"
    },
    {
      Symptoms: "Secondary bacterial and yeast skin Infections"
    },
    {
      Symptoms: "Very slow heart rate"
    },
    {
      Symptoms: "Weak femoral pulse"
    },
    {
      Symptoms: "Hemoptysis from rupture"
    },
    {
      Symptoms: "tracheal wash fluid"
    },
    {
      Symptoms: "Excoriation"
    },
    {
      Symptoms: "harsh inspiratory crackles"
    },
    {
      Symptoms: "Nervous"
    },
    {
      Symptoms: "Pustular dermatitis"
    },
    {
      Symptoms: "moist and hacking"
    },
    {
      Symptoms: "carcinoid syndrome that occurs"
    },
    {
      Symptoms: "Decerebellate posture"
    },
    {
      Symptoms: "Increased bronchovesicular sounds"
    },
    {
      Symptoms: "biopsy"
    },
    {
      Symptoms: "Visual changes"
    },
    {
      Symptoms: "behaviors might deteriorate"
    },
    {
      Symptoms: "histoplasmosis"
    },
    {
      Symptoms: "identifiable triggers"
    },
    {
      Symptoms: "Enophthalmos and third eyelid elevation"
    },
    {
      Symptoms: "Rapid progression (2?4 days) to a flaccid"
    },
    {
      Symptoms: "subconjunctival hematoma"
    },
    {
      Symptoms: "edema and pigmentation often present"
    },
    {
      Symptoms: "Skin Ulceration"
    },
    {
      Symptoms: "hyperpigmentation of inguinal skin"
    },
    {
      Symptoms: "limb paresis or paralysis"
    },
    {
      Symptoms: "non-use of the limb"
    },
    {
      Symptoms: "appears as focal to diffuse"
    },
    {
      Symptoms: "Polyneuropathy"
    },
    {
      Symptoms: "painful loops of small bowel"
    },
    {
      Symptoms: "anterior"
    },
    {
      Symptoms: "Proprioceptive positioning"
    },
    {
      Symptoms: "Stimulation of micturition"
    },
    {
      Symptoms: "Self-inflicted lesions"
    },
    {
      Symptoms: "painful joints"
    },
    {
      Symptoms: "erosion"
    },
    {
      Symptoms: "Concurrent bacterial folliculitis"
    },
    {
      Symptoms: "Abscessation or gangrene of glands"
    },
    {
      Symptoms: "Regional Lymphadenomegaly"
    },
    {
      Symptoms: "viciousness"
    },
    {
      Symptoms: "locomotor difficulty is progressive"
    },
    {
      Symptoms: "Pain in legs"
    },
    {
      Symptoms: "pharyngeal and cervical lymphadenopathy"
    },
    {
      Symptoms: "diffuse limb edema"
    },
    {
      Symptoms: "antineoplastic"
    },
    {
      Symptoms: "patient unable to rise without assistance"
    },
    {
      Symptoms: "Muscle atrophy with enophthalmos"
    },
    {
      Symptoms: "Tendon reflexes"
    },
    {
      Symptoms: "Discoloration of the nail"
    },
    {
      Symptoms: "Nodules or plaques"
    },
    {
      Symptoms: "nasopharyngeal or lower airway disease"
    },
    {
      Symptoms: "Low Agpar scores at birth"
    },
    {
      Symptoms: "glossal paralysis"
    },
    {
      Symptoms: "Mild intention tremor"
    },
    {
      Symptoms: "often accompanied by fistulous tracts"
    },
    {
      Symptoms: "gray-yellow crust"
    },
    {
      Symptoms: "abdominal effort"
    },
    {
      Symptoms: "may be confined to genital or eyelid regions"
    },
    {
      Symptoms: "Eosinophilia"
    },
    {
      Symptoms: "reluxation of the patella"
    },
    {
      Symptoms: "systolic murmur"
    },
    {
      Symptoms: "Reluctance to sit"
    },
    {
      Symptoms: "Jugular vein distension"
    },
    {
      Symptoms: "chronically elevated central venous pressures"
    },
    {
      Symptoms: "cranial abdominal hernia"
    },
    {
      Symptoms: "Compensatory shock"
    },
    {
      Symptoms: "hydrocarbons sensitize the myocardium"
    },
    {
      Symptoms: "mild hepatoSplenomegaly"
    },
    {
      Symptoms: "Abnormal breath sounds"
    },
    {
      Symptoms: "Harsh"
    },
    {
      Symptoms: "low exercise tolerance"
    },
    {
      Symptoms: "Splenomegaly and hepatomegaly"
    },
    {
      Symptoms: "underlying medical problem"
    },
    {
      Symptoms: "broad-spectrum antibiotics and lactulose"
    },
    {
      Symptoms: "Trauma to the contralateral eye"
    },
    {
      Symptoms: "Septic shock"
    },
    {
      Symptoms: "especially in patients with a painful conditions"
    },
    {
      Symptoms: "blunt force Trauma"
    },
    {
      Symptoms: "Mild to severe dyspnea"
    },
    {
      Symptoms: "Louder murmurs"
    },
    {
      Symptoms: "Sterile pyogranulomatous panniculitis over the trunk"
    },
    {
      Symptoms: "Closed cervix"
    },
    {
      Symptoms: "Vaginal examination ocate lumen and urethral orifice"
    },
    {
      Symptoms: "Mass at vulvar labia"
    },
    //
    {
      Symptoms: "pinnae edges and footpads"
    },
    {
      Symptoms: "right-to-left shunts"
    },
    {
      Symptoms: "arrhythmia"
    },
    {
      Symptoms: "directed toward the side of the lesion"
    },
  //
    {
      Symptoms: "mucoid discharge from eyelids"
    },
    {
      Symptoms: "congestion"
    },
    {
      Symptoms: "exophthalmia"
    },
    {
      Symptoms: "Oral Hemorrhage"
    },
    {
      Symptoms: "Plaque"
    },
    {
      Symptoms: "Deformed bones"
    },
    {
      Symptoms: "itchy"
    },
    {
      Symptoms: "Mucoid to sanguineous vaginal discharge"
    },
    {
      Symptoms: "Pale mucous membrane"
    },
    {
      Symptoms: "Red eyes"
    },
    {
      Symptoms: "Bilateral Nasal discharge"
    },
    {
      Symptoms: "Painful abdomen"
    },
    {
      Symptoms: "Uroliths are often palpable"
    },
    {
      Symptoms: "abdominal or urethral palpation"
    },
    {
      Symptoms: "Obstruction to urine outflow"
    },
    {
      Symptoms: "Neurologic symptoms"
    },
    {
      Symptoms: "Sudden collapse"
    },
    {
      Symptoms: "Seeking out the owner"
    },
    {
      Symptoms: "Unusual salivation"
    },
    {
      Symptoms: "Falling down when walking or standing"
    },
    {
      Symptoms: "Sudden changes in weight"
    },
    {
      Symptoms: "Tumors"
    },
    {
      Symptoms: "stupor"
    },
    {
      Symptoms: "Abdomen that feels empty"
    },
    {
      Symptoms: "Draining tracts"
    },
    {
      Symptoms: "changes in the color of mucous membranes"
    },
    {
      Symptoms: "Protrusion of third eyelid"
    },
    {
      Symptoms: "Draining pus tracts around the anus"
    },
    {
      Symptoms: "Painful swallowing"
    },
    {
      Symptoms: "Painful or Swollen joints"
    },
    //
    {
      Symptoms: "Tooth loss"
    },
    {
      Symptoms: "obvious discomfort"
    },
    {
      Symptoms: "Licking nose or face"
    },
    {
      Symptoms: "Yawning"
    },
    {
      Symptoms: "Mass like growth"
    },
    {
      Symptoms: "Losing weight"
    },
    {
      Symptoms: "Lack of urine production"
    },
    {
      Symptoms: "Ulcerated sores on skin"
    },
    {
      Symptoms: "Buildup of abdominal fluid"
    },
    {
      Symptoms: "Yellowish discoloration of the skin"
    },
    {
      Symptoms: "Grayish or white and soft feces"
    },
    {
      Symptoms: "Ulcerated throat"
    },
    {
      Symptoms: "Open fontanel or soft spot on the head"
    },
    {
      Symptoms: "Enlargement of the abdomen"
    },
    {
      Symptoms: "males exhiBiting female characteristics"
    },
    {
      Symptoms: "Obesity"
    },
    {
      Symptoms: "Nerve paralysis"
    },
    {
      Symptoms: "Twitching or Trembling muscles"
    },
    {
      Symptoms: "Distended jugular veins in the neck"
    },
    {
      Symptoms: "Ventroflexion of the head"
    },
    {
      Symptoms: "Thin and hypotonic skin"
    },
    {
      Symptoms: "Excessive tear production"
    },
    {
      Symptoms: "failure to re-grow hair after clipping or shaving"
    },
    {
      Symptoms: "Sleeping more often than usual"
    },
    {
      Symptoms: "Failure to cycle"
    },
    {
      Symptoms: "Changes in libido"
    },
    {
      Symptoms: "Bright red blood in stool"
    },
    //
    {
      Symptoms: "Hairs may be brittle"
    },
    {
      Symptoms: "Brittle hair"
    },
    {
      Symptoms: "Rapid pulse"
    },
    {
      Symptoms: "Cold hands or feet"
    },
    {
      Symptoms: "Decrease in urinary output"
    },
    {
      Symptoms: "Heart attack"
    },
    {
      Symptoms: "Gum disease"
    },
    {
      Symptoms: "Singed or burnt hair"
    },
    {
      Symptoms: "Loss of sensation in all limbs"
    },
    {
      Symptoms: "Extreme sleepiness"
    },
    {
      Symptoms: "wound after the damaged tissue"
    },
    {
      Symptoms: "Swollen or inflamed areas in the mouth"
    },
    {
      Symptoms: "Not exercising"
    },
    {
      Symptoms: "Nose seems deformed"
    },
    {
      Symptoms: "resembling warts"
    },
    {
      Symptoms: "Having a hard time swallowing"
    },
    {
      Symptoms: "pawing at the mouth"
    },
    {
      Symptoms: "Previously abused dogs"
    },
    {
      Symptoms: "Dizziness or fainting"
    },
    //
    {
      Symptoms: "Tail gland hyperplasia"
    },
    {
      Symptoms: "Gastrointestinal stasis"
    },
    {
      Symptoms: "non-feces anal discharge"
    },
    {
      Symptoms: "Excessive drinking and urination"
    },
    {
      Symptoms: "Acid reflux"
    },
    {
      Symptoms: "Loss of muscle mass"
    },
    {
      Symptoms: "prolonged capillary refill"
    },
    {
      Symptoms: "Edema (pulmonary)"
    },
    {
      Symptoms: "Ulcers in the mouth"
    },
    {
      Symptoms: "enucleated blind eyes"
    },
    {
      Symptoms: "Oliguria"
    },
    {
      Symptoms: "loud expiratory lung sounds"
    },
    {
      Symptoms: "Inflammation of the brain and spinal cord"
    },
    {
      Symptoms: "retching and expectoration of mucus"
    },
    {
      Symptoms: "opisthotonos"
    },
    {
      Symptoms: "Bleeding nodular mass"
    },
    {
      Symptoms: "Pale mucous membranes"
    },
    {
      Symptoms: "surgical wounds"
    },
    {
      Symptoms: "even pica"
    },
    {
      Symptoms: "exploration self-care or even eating"
    },
    {
      Symptoms: "pythiosis"
    },
    {
      Symptoms: "Certain repetitive behaviors are expressed"
    },
    {
      Symptoms: "ower motor neuron tetraparesis to tetraplegia"
    },
    {
      Symptoms: "May also see iris defects"
    },
    {
      Symptoms: "With progression the cornea"
    },
    {
      Symptoms: "pendulous preputial sheath"
    },
    {
      Symptoms: "larva in conjunctiva"
    },
    {
      Symptoms: "Partial weight-bearing"
    },
    {
      Symptoms: "brown discoloration of the cornea"
    },
    {
      Symptoms: "polymyopathy"
    },
    {
      Symptoms: "may feel palpable mass per rectum"
    },
    {
      Symptoms: "neuralgia"
    },
    {
      Symptoms: "posterior"
    },
    {
      Symptoms: "Sore muscles"
    },
    {
      Symptoms: "Spinal reflexes normal to exaggerated"
    },
    {
      Symptoms: "Excessive lacrimation"
    },
    {
      Symptoms: "regardless of bladder urine volume"
    },
    {
      Symptoms: "Swollen but not deformed"
    },
    {
      Symptoms: "malabsorption"
    },
    {
      Symptoms: "Ulceration affecting mucocutaneous"
    },
    {
      Symptoms: "hypersensitivity"
    },
    {
      Symptoms: "Pain or discomfort"
    },
    {
      Symptoms: "head or neck usually painful"
    },
    {
      Symptoms: "Pain in lower back"
    },
    {
      Symptoms: "repeated attempts at swallowing"
    },
    {
      Symptoms: "rigidity"
    },
    {
      Symptoms: "Gallop rhythm or murmur"
    },
    {
      Symptoms: "With spongy degeneration"
    },
    {
      Symptoms: "anesthesia"
    },
    {
      Symptoms: "continuous Ataxia"
    },
    {
      Symptoms: "Encephalopathy"
    },
    {
      Symptoms: "loss of a nail"
    },
    {
      Symptoms: "fourth premolar abscess"
    },
    {
      Symptoms: "bluish ventral abdominal skin"
    },
    {
      Symptoms: "gradually develop"
    },
    {
      Symptoms: "Pulmonary edema"
    },
    {
      Symptoms: "may result in lymphadenopathy"
    },
    {
      Symptoms: "Polydipsia and Oliguria"
    },
    {
      Symptoms: "Large patches of lesions"
    },
    {
      Symptoms: "crackles on auscultation"
    },
    {
      Symptoms: "Cutaneous inverted papillomas less"
    },
    {
      Symptoms: "Gastroduodenal Ulceration"
    },
    {
      Symptoms: "patella is permanently luxated"
    },
    {
      Symptoms: "resemble arlong systolic and early diastolic murmur"
    },
    {
      Symptoms: "Cardiac murmurs"
    },
    {
      Symptoms: "posturing difficulties"
    },
    {
      Symptoms: "hemolytic anemia"
    },
    {
      Symptoms: "respirations often shallow and rapid"
    },
    {
      Symptoms: "altered consciousness"
    },
    {
      Symptoms: "crackles and wheezes"
    },
    {
      Symptoms: "behavior change if CNS affected"
    },
    {
      Symptoms: "neoplastic disease"
    },
    {
      Symptoms: "behavioral change"
    },
    {
      Symptoms: "Diffuse increase in lung sounds"
    },
    {
      Symptoms: "ocular or neurologic"
    },
    {
      Symptoms: "Arrhythmias may occur"
    },
    {
      Symptoms: "preputial or perianal area"
    },
    {
      Symptoms: "Pain upon palpation of kidneys"
    },
    {
      Symptoms: "moth-eaten hair coat"
    },
    {
      Symptoms: "infarction or perforation"
    },
    {
      Symptoms: "lochial"
    },
    {
      Symptoms: "Tissue may be dry or necrotic."
    },
    {
      Symptoms: "Evidence of vaginal discharge"
    },
    {
      Symptoms: "reflecting organ involvement"
    },
    {
      Symptoms: "Split-second heart sound"
    },
    {
      Symptoms: "erratic side-to-side head"
    },
    {
      Symptoms: "conscious proprioceptive deficits"
    },
    {
      Symptoms: "abdominal Bleeding"
    },
    {
      Symptoms: "dazzle present"
    },
    {
      Symptoms: "Dysphasia"
    },
    {
      Symptoms: "Slow growth"
    },
    {
      Symptoms: "Passive interaction with male dogs"
    },
    {
      Symptoms: "Increased body temperature"
    },
    {
      Symptoms: "Foul-smelling breath"
    },
    //
    {
      Symptoms: "Signs of severe uremia"
    },
    {
      Symptoms: "failure to palpate uroliths"
    },
    {
      Symptoms: "Uroliths"
    },
    {
      Symptoms: "Extreme loss of weight"
    },
    {
      Symptoms: "Ruffled or coarse fur"
    },
    {
      Symptoms: "Be less active"
    },
    {
      Symptoms: "Inability to walk"
    },
    {
      Symptoms: "Skin Infections characterized"
    },
    {
      Symptoms: "Wrinkles"
    },
    {
      Symptoms: "Blistering"
    },
    {
      Symptoms: "unkempt haircoat"
    },
    {
      Symptoms: "Bright and red blood"
    },
    {
      Symptoms: "Bloody nose"
    },
    {
      Symptoms: "The anus is blocked"
    },
    {
      Symptoms: "Discharge from the eyes and nose"
    },
    {
      Symptoms: "Not wanting to lie down"
    },
    {
      Symptoms: "Head tilt"
    },
    {
      Symptoms: "Urinary or vaginal Infection"
    },
    {
      Symptoms: "Corneal ulcers"
    },
    {
      Symptoms: "Abnormal posture or movements"
    },
    {
      Symptoms: "Lip tension"
    },
    {
      Symptoms: "Light avoidance"
    },
    //
    {
      Symptoms: "Visible Bleeding"
    },
    {
      Symptoms: "internal Bleeding"
    },
    {
      Symptoms: "blackish tar-like feces"
    },
    {
      Symptoms: "Excessively thirsty"
    },
    {
      Symptoms: "Reduced appetite"
    },
    {
      Symptoms: "Stomach Bloating"
    },
    {
      Symptoms: "Generalized pain"
    },
    {
      Symptoms: "Moist sores"
    },
    {
      Symptoms: "Standing with legs crossed"
    },
    {
      Symptoms: "Fluid buildup under the skin"
    },
    {
      Symptoms: "Possible pneumonia"
    },
    {
      Symptoms: "Nosebleed"
    },
    {
      Symptoms: "Stupor or Coma"
    },
    {
      Symptoms: "Cardiac arrhythmia"
    },
    {
      Symptoms: "Odd gait"
    },
    {
      Symptoms: "high blood cholesterol"
    },
    {
      Symptoms: "Refusing to exercise or walk"
    },
    {
      Symptoms: "Blood present in excrement or urine"
    },
    {
      Symptoms: "Debilitation"
    },
    {
      Symptoms: "Refusal to breed"
    },
    {
      Symptoms: "Failure to ejaculate"
    },
    {
      Symptoms: "Distressed coat hair"
    },
    {
      Symptoms: "Seizure"
    },
    {
      Symptoms: "Fluid accumulation in the abdomen"
    },
    {
      Symptoms: "Matted hair or Straighter hair or loss"
    },
    {
      Symptoms: "Thinning of the skin"
    },
    {
      Symptoms: "Urinating less"
    },
    {
      Symptoms: "Glucose deficiency in bloodstream"
    },
    {
      Symptoms: "Immune system disorders"
    },
    {
      Symptoms: "Loss of vocal ability"
    },
    {
      Symptoms: "Trouble walking"
    },
    {
      Symptoms: "Muscle rigidity"
    },
    {
      Symptoms: "Scab that may take months to heal"
    },
    {
      Symptoms: "Shallow rapid breathing"
    },
    {
      Symptoms: "Urinates during greetings and scoldings"
    },
    {
      Symptoms: "Rapid involuntary movement"
    },
    {
      Symptoms: "decreased ventral lung sounds"
    },
    {
      Symptoms: "Systemic signs"
    },
    {
      Symptoms: "Elevated heart rate"
    },
    {
      Symptoms: "Refusal to sit or lift tail"
    },
    {
      Symptoms: "Urinary retention"
    },
    {
      Symptoms: "Sudden paralysis and pain"
    },
    {
      Symptoms: "vision impairment"
    },
    {
      Symptoms: "discolored stool"
    },
    {
      Symptoms: "Nasal discharge and Bleeding"
    },
    {
      Symptoms: "Ulcers on tongue"
    },
    {
      Symptoms: "Organisms"
    },
    {
      Symptoms: "Loss of transfusion efficacy"
    },
    {
      Symptoms: "Tracheal hypersensitivity"
    },
    {
      Symptoms: "cardiac or neurologic"
    },
    {
      Symptoms: "Often there is severe hemorrhagic Diarrhean"
    },
    {
      Symptoms: "large masses filling the canal"
    },
    {
      Symptoms: "shock due to endotoxemia"
    },
    {
      Symptoms: "Arrhythmia"
    },
    {
      Symptoms: "pontaneous bruising or hematomas"
    },
    {
      Symptoms: "Behavior may interfere with normal functioning"
    },
    {
      Symptoms: "loss or change of voice"
    },
    {
      Symptoms: "pupil distortion"
    },
    {
      Symptoms: "prostatic squamous metaplasia"
    },
    //
    {
      Symptoms: "corneal vascularization or scarring"
    },
    {
      Symptoms: "Blepharitis due to ocular exudates"
    },
    {
      Symptoms: "myasthenia gravis"
    },
    {
      Symptoms: "painful loops of small bowel on abdominal palpation"
    },
    {
      Symptoms: "Can have same signs as lens subluxation"
    },
    {
      Symptoms: "Frequent urination and defecation"
    },
    {
      Symptoms: "Pain reactions"
    },
    {
      Symptoms: "infecting tick bite may be Swollen"
    },
    {
      Symptoms: "Mediastinal"
    },
    {
      Symptoms: "erythematous"
    },
    {
      Symptoms: "endocrine and seborrheic dermatitis"
    },
    {
      Symptoms: "urinary incontinence"
    },
    {
      Symptoms: "Other signs depend upon underlying etiology"
    },
    {
      Symptoms: "bnormal coagulation"
    },
    {
      Symptoms: "leading to DIC and multi-organ failure if uncontrolled"
    },
    {
      Symptoms: "Large uterus on abdominal palpation"
    },
    {
      Symptoms: "Muscle fatigue"
    },
    {
      Symptoms: "Ptyalism or tonsillar abscess"
    },
    {
      Symptoms: "Tongue may protrude from the mouth"
    },
    {
      Symptoms: "Swollen red or purulentrumbilical"
    },
    {
      Symptoms: "pulmonary thromboembolism"
    },
    {
      Symptoms: "Peripheral lymphadenopathy"
    },
    {
      Symptoms: "Less common systemic abnormalities"
    },
    {
      Symptoms: "Pain on deep palpation"
    },
    {
      Symptoms: "harsh or moist lung sounds"
    },
    {
      Symptoms: "Hypercalcemia"
    },
    {
      Symptoms: "shallow or missing femoral trochlea"
    },
    {
      Symptoms: "Loud murmurs"
    },
    {
      Symptoms: "personality changes"
    },
    {
      Symptoms: "hydrocarbon intoxication"
    },
    {
      Symptoms: "Intravascular hemolysis"
    },
    {
      Symptoms: "lung sounds ventrally"
    },
    {
      Symptoms: "stertor or Stridor"
    },
    {
      Symptoms: "Shallow"
    },
    {
      Symptoms: "Response to previous therapy"
    },
    {
      Symptoms: "brick red or cyanotic mucous membranes"
    },
    {
      Symptoms: "Heart sounds can be inaudible"
    },
    {
      Symptoms: "open-mouthed breathing"
    },
    {
      Symptoms: "Hemorrhagic bullae"
    },
    {
      Symptoms: "Cutaneous Pythiosis"
    },
    {
      Symptoms: "hemorrhagic"
    },
    {
      Symptoms: "Recessed or hypoplastic vulva occasionally"
    },
    {
      Symptoms: "Femoral pulses usually normal"
    },
    {
      Symptoms: "Abnormal nystagmus common in early stages"
    },
    {
      Symptoms: "Loss in body weight"
    },
   //
    {
      Symptoms: "normal pupillary light reflexes"
    },
    {
      Symptoms: "Abnormal salivation"
    },
    {
      Symptoms: "Shorter bones than normal"
    },
    {
      Symptoms: "Tiredness"
    },
    {
      Symptoms: "Aspiration of food or stomach contents"
    },
    {
      Symptoms: "Urocystoliths with irregular"
    },
    {
      Symptoms: "Obstruction of the urethra"
    },
    {
      Symptoms: "Barking"
    },
    {
      Symptoms: "Shock"
    },
    {
      Symptoms: "Paralysis of the hind limbs"
    },
    {
      Symptoms: "Rancid fat Odor"
    },
    {
      Symptoms: "Blistering in the junction around the mouth"
    },
    {
      Symptoms: "Dandruf"
    },
    {
      Symptoms: "Straining to defecate and urgency to defecate"
    },
    {
      Symptoms: "Irritation"
    },
    {
      Symptoms: "Rapid heart rate and respirations"
    },
    {
      Symptoms: "fluid in the lungs"
    },
    {
      Symptoms: "Blood or pus in the urine"
    },
    {
      Symptoms: "Refusing to lie down"
    },
    {
      Symptoms: "Nipping"
    },
    {
      Symptoms: "Excessive grooming"
    },
    {
      Symptoms: "Fluid retention"
    },
    {
      Symptoms: "Weak blink response"
    },
    {
      Symptoms: "Change in mood"
    },
    {
      Symptoms: "Acute blood loss"
    },
    {
      Symptoms: "Eye Infections"
    },
    {
      Symptoms: "Weak back legs"
    },
    //
    {
      Symptoms: "Prolonged estrus in females"
    },
    {
      Symptoms: "Not wanting to play or exercise"
    },
    {
      Symptoms: "Partial paralysis"
    },
    {
      Symptoms: "Conjunctivitis"
    },
    {
      Symptoms: "Bloating in the belly"
    },
    {
      Symptoms: "Palpable lump"
    },
    {
      Symptoms: "Twitches and Tremors"
    },
    {
      Symptoms: "Darkening of the skin"
    },
    {
      Symptoms: "Low blood glucose"
    },
    {
      Symptoms: "Red mucous membranes"
    },
    {
      Symptoms: "Oral Bleeding"
    },
    {
      Symptoms: "reluctance to groom himself"
    },
    {
      Symptoms: "Urinates in response"
    },
    {
      Symptoms: "Eyes looking in two different directions"
    },
    {
      Symptoms: "Retroperitonitis lumbar pain"
    },
    {
      Symptoms: "Constipation"
    },
    {
      Symptoms: "Toe wounds"
    },
    {
      Symptoms: "Gastritis"
    },
    {
      Symptoms: "bruit auscultated"
    },
    {
      Symptoms: "blepharitis"
    },
    {
      Symptoms: "Changes in urine volume"
    },
    {
      Symptoms: "Fluid-filled intestinal"
    },
    {
      Symptoms: "node enlargement"
    },
    {
      Symptoms: "bacteremia"
    },
    {
      Symptoms: "Heart murmur"
    },
    {
      Symptoms: "develop APSS"
    },
    {
      Symptoms: "water consumption"
    },
    {
      Symptoms: "Pigmentary keratopathy"
    },
    {
      Symptoms: "feel palpable"
    },
    {
      Symptoms: "polymyositisn"
    },
    {
      Symptoms: "chronically painful eye"
    },
    {
      Symptoms: "Oral mucosal Ulceration"
    },
    {
      Symptoms: "ecchymosis"
    },
    {
      Symptoms: "Tendency to avoid weight bearing"
    },
    {
      Symptoms: "Dyspnea with aspiration pneumonia"
    },
    {
      Symptoms: "May lead to Hyperthermia"
    },
    {
      Symptoms: "Variable pain"
    },
    {
      Symptoms: "aspiration pneumonia"
    },
    {
      Symptoms: "Abduction of thoracic limbs"
    },
    {
      Symptoms: "Gross anatomic defects"
    },
    {
      Symptoms: "Dependent pitting"
    },
    {
      Symptoms: "lymphadenitis"
    },
    {
      Symptoms: "distinguishing characteristic"
    },
    {
      Symptoms: "Cardiogenic Pulmonary edema"
    },
    {
      Symptoms: "different papilloma"
    },
    {
      Symptoms: "Hypertrophic osteopathy"
    },
    {
      Symptoms: "crouching"
    },
    {
      Symptoms: "Arterial pulses"
    },
    {
      Symptoms: "No correlation"
    },
    {
      Symptoms: "Pain on manipulation perianal area"
    },
    {
      Symptoms: "Weak arterial pulses"
    },
    {
      Symptoms: "injected mucus membranes rapid capillary refill time"
    },
    {
      Symptoms: "hydrocarbon poisoning"
    },
    {
      Symptoms: "Shakes or shivers"
    },
    {
      Symptoms: "muscle cramping"
    },
    {
      Symptoms: "Preservation of breath sounds dorsally"
    },
    {
      Symptoms: "rapid abdominal breathing common"
    },
    {
      Symptoms: "antibiotics"
    },
    {
      Symptoms: "Hemorrhagic colitis"
    },
    {
      Symptoms: "Circular erythematous or hyperpigmented patches"
    },
    {
      Symptoms: "Scale"
    },
    {
      Symptoms: "Cutaneous"
    },
    {
      Symptoms: "mucoid or urinous"
    },
    {
      Symptoms: "either horizontal"
    },
    {
      Symptoms: "normal anterior segment"
    },
    {
      Symptoms: "Inability to open or close the mouth"
    },
    {
      Symptoms: "Inflammation of joints"
    },
    {
      Symptoms: "May allow copulation"
    },
    {
      Symptoms: "Abdominal mass"
    },
    {
      Symptoms: "Worms present in feces"
    },
    {
      Symptoms: "Obstruction"
    },
    {
      Symptoms: "Watery Diarrhea"
    },
    {
      Symptoms: "Difficulty with swallowing and tongue movements"
    },
    {
      Symptoms: "Nails may also be affected"
    },
    {
      Symptoms: "Visible mass"
    },
    {
      Symptoms: "Pain while defecating"
    },
    {
      Symptoms: "redness and rash"
    },
    {
      Symptoms: "Acidosis"
    },
    {
      Symptoms: "Limb pain"
    },
    {
      Symptoms: "Inflammation of the eye"
    },
    {
      Symptoms: "No response of pupil to light"
    },
    {
      Symptoms: "Palpable or visible abdominal mass"
    },
    {
      Symptoms: "Excessive urination"
    },
    {
      Symptoms: "Poor coordination"
    },
    {
      Symptoms: "Sudden fainting"
    },
    {
      Symptoms: "Brain inflammation"
    },
    {
      Symptoms: "Kicking out front legs when walking"
    },
    {
      Symptoms: "Enlarge vulva and teats in female"
    },
    {
      Symptoms: "Increased frequency of urination"
    },
    {
      Symptoms: "Swollen belly"
    },
    {
      Symptoms: "Sores on top of the feet"
    },
    {
      Symptoms: "Ears or head and trunk affected"
    },
    {
      Symptoms: "Penile atrophy"
    },
    {
      Symptoms: "Allergies"
    },
    {
      Symptoms: "Urinates while making submissive gestures"
    },
    {
      Symptoms: "Instability or stumbling"
    },
    {
      Symptoms: "rear limb paresis"
    },
    {
      Symptoms: "Unusual Vocalizations"
    },
    {
      Symptoms: "rhinitis"
    },
    {
      Symptoms: "Poor haircoat"
    },
    {
      Symptoms: "Slow heartbeat"
    },
    {
      Symptoms: "Oral Ulcerations"
    },
    {
      Symptoms: "cream-colored meibomian glands"
    },
    {
      Symptoms: "hypovolemia"
    },
    {
      Symptoms: "poor hair coat"
    },
    {
      Symptoms: "aimless wandering"
    },
    {
      Symptoms: "Urination"
    },
    {
      Symptoms: "cataract"
    },
    {
      Symptoms: "brown corneal pigmentation"
    },
    {
      Symptoms: "limited to the mucocutaneous junctions"
    },
    {
      Symptoms: "Hypotension and Coma"
    },
    {
      Symptoms: "representing a distended cervical esophagus"
    },
    {
      Symptoms: "may ulcerate"
    },
    {
      Symptoms: "muscles of mastication"
    },
    {
      Symptoms: "lateral recumbency"
    },
    {
      Symptoms: "Mandibular Lymphadenomegaly neoplasia"
    },
    {
      Symptoms: "Hair coat"
    },
    {
      Symptoms: "A dog with heat stroke"
    },
    {
      Symptoms: "pinching of nearby muscle"
    },
    {
      Symptoms: "heart murmur or arrhythmia"
    },
    {
      Symptoms: "Multiple papillomas"
    },
    {
      Symptoms: "bowlegged"
    },
    {
      Symptoms: "Vertebral deformities"
    },
    {
      Symptoms: "Fecal incontinence"
    },
    {
      Symptoms: "Pulsus paradoxus"
    },
    {
      Symptoms: "Early decompensatory shock"
    },
    {
      Symptoms: "muscle cramping"
    },
    {
      Symptoms: "Dullness ventrally on thoracic percussion"
    },
    {
      Symptoms: "crackles"
    },
    {
      Symptoms: "loud breath sounds"
    },
    {
      Symptoms: "Retinitis"
    },
    {
      Symptoms: "Decreased to absent breath sounds dorsally"
    },
    {
      Symptoms: "antifungals and corticosteroids"
    },
    {
      Symptoms: "Unwillingness to lie down"
    },
    {
      Symptoms: "jugular venous distension and tachypnea"
    },
    {
      Symptoms: "Thoracic auscultation"
    },
    {
      Symptoms: "boggy"
    },
    {
      Symptoms: "abnormal nystagmus usually mild"
    },
    {
      Symptoms: "flaccid paralysis"
    },
    {
      Symptoms: "Abnormal facial symmetry"
    },
    {
      Symptoms: "Bowed legs"
    },
    {
      Symptoms: "Abnormally large abdomen"
    },
    {
      Symptoms: "ascending urinary tract Infection"
    },
    {
      Symptoms: "Dilated pupils"
    },
    {
      Symptoms: "Urinary and fecal incontinence"
    },
    {
      Symptoms: "Gaseous sounds from the gut"
    },
    {
      Symptoms: "Facial pruritis"
    },
    {
      Symptoms: "Vision problems"
    },
    {
      Symptoms: "Apathy"
    },
    {
      Symptoms: "Skin disorders"
    },
    {
      Symptoms: "Dull or depressed behavior"
    },
    {
      Symptoms: "Not wanting to exercise"
    },
    {
      Symptoms: "Slow growth"
    },
    {
      Symptoms: "Bleeding from vulva"
    },
    {
      Symptoms: "Metabolic abnormalities"
    },
    {
      Symptoms: "Bruising"
    },
    {
      Symptoms: "Annular to coalescing"
    },
    {
      Symptoms: "Testicular atrophy"
    },
    {
      Symptoms: "Inconsistencies in pulse"
    },
    //
    {
      Symptoms: "Elevated"
    },
    {
      Symptoms: "discomfort"
    },
    {
      Symptoms: "PU/PD"
    },
    {
      Symptoms: "vitreal Hemorrhage"
    },
    {
      Symptoms: "Nystagmus"
    },
    {
      Symptoms: "behavioral changes"
    },
    {
      Symptoms: "Stunting"
    },
    {
      Symptoms: "cyanotic"
    },
    {
      Symptoms: "fungal Infection"
    },
    {
      Symptoms: "MyeloFibrosis"
    },
    //
    {
      Symptoms: "Adypsia"
    },
    {
      Symptoms: "Heterozygous"
    },
    {
      Symptoms: "wheezes"
    },
    {
      Symptoms: "Joint instability"
    },
    {
      Symptoms: "cyanotic mucous membranes"
    },
    {
      Symptoms: "moth-eaten hair coat"
    },
    {
      Symptoms: "may reveal muffled heart sounds"
    },
    {
      Symptoms: "edematous regions"
    },
    {
      Symptoms: "vague signs of pain"
    },
    {
      Symptoms: "elevation of optic nerve head"
    },
    {
      Symptoms: "Curved spine"
    },
    {
      Symptoms: "One or both kidneys palpably large"
    },
    {
      Symptoms: "limbs"
    },
    {
      Symptoms: "Showing the whites of the eye"
    },
    {
      Symptoms: "Incontinence of bowels or urine"
    },
    {
      Symptoms: "Bulging Swollen eye"
    },
    {
      Symptoms: "Unstable gait"
    },
    {
      Symptoms: "Compulsive behavior"
    },
    {
      Symptoms: "Mouth ulcers"
    },
    {
      Symptoms: "Constant crying"
    },
    {
      Symptoms: "Trouble breathing"
    },
    {
      Symptoms: "Difficulty in house training"
    },
    {
      Symptoms: "attraction to opposite gender"
    },
    {
      Symptoms: "Nose bleeds"
    },
    {
      Symptoms: "Adherent scale"
    },
    {
      Symptoms: "Changes in prostate size"
    },
    {
      Symptoms: "Cool extremities"
    },
    {
      Symptoms: "Gastrointestinal cancer"
    },
    {
      Symptoms: "Absent reflexes"
    },
    {
      Symptoms: "Hypersalivation"
    },
    {
      Symptoms: "Endocarditis"
    },
    {
      Symptoms: "Dry eye"
    },
    {
      Symptoms: "noise breathing"
    },
    {
      Symptoms: "Stomach pain"
    },
    {
      Symptoms: "eye blinking"
    },
    {
      Symptoms: "red eye"
    },
    {
      Symptoms: "Higher Active"
    },
    {
      Symptoms: "may affect radius"
    },
    {
      Symptoms: "gallop sound"
    },
    {
      Symptoms: "lose pigmentation"
    },
    {
      Symptoms: "ambulation impaired"
    },
    {
      Symptoms: "difficult to breath"
    },
    {
      Symptoms: "subluxation"
    },
    {
      Symptoms: "Blindness"
    },
    {
      Symptoms: "crusty skin"
    },
    {
      Symptoms: "reduce breath sound"
    },
    {
      Symptoms: "Head shyness"
    },
    {
      Symptoms: "Excess urine"
    },
    {
      Symptoms: "Tetany"
    },
    {
      Symptoms: "Tail tucked under"
    },
    {
      Symptoms: "Excessive bruising"
    },
    {
      Symptoms: "Lesion in the nose"
    },
    {
      Symptoms: "Low temperature"
    },
    {
      Symptoms: "Elevated body temperature"
    },
    {
      Symptoms: "Otitis externa"
    },
    {
      Symptoms: "Mammary enlargement"
    },
    {
      Symptoms: "A daze-like condition"
    },
    {
      Symptoms: "Abdominal Swelling"
    },
    {
      Symptoms: "Attempted Respiratory compensation"
    },
    {
      Symptoms: "Cerebellar Ataxia"
    },
    {
      Symptoms: "Hair loss in patches"
    },
    {
      Symptoms: "Hair loss on sides"
    },
    {
      Symptoms: "Halitosis if coprophagia is the presenting problem"
    },
    {
      Symptoms: "May be Asymptomatic"
    },
    {
      Symptoms: "May be initially Asymptomatic"
    },
    {
      Symptoms: "Most are Asymptomatic"
    },
    {
      Symptoms: "Non-painful Swelling at the body"
    },
    {
      Symptoms: "Often no clinical signs of Illness"
    },
    {
      Symptoms: "Oral Swelling"
    },
    {
      Symptoms: "Peripheral limb Swelling"
    },
    {
      Symptoms: "Persistent Coughing"
    },
    {
      Symptoms: "Range from Asymptomatic to severe"
    },
    {
      Symptoms: "Respiratory tract damage"
    },
    {
      Symptoms: "Severe Respiratory distress"
    },
    {
      Symptoms: "Some animals Asymptomatic"
    },
    {
      Symptoms: "Some dogs are Asymptomatic"
    },
    {
      Symptoms: "Swelling of the neck"
    },
    {
      Symptoms: "Usually Asymptomatic"
    },
    {
      Symptoms: "Asymptomatic except"
    },
    {
      Symptoms: "Localized Swelling"
    },
    {
      Symptoms: "Muscle Swelling"
    },
    {
      Symptoms: "Muscular Weakness"
    },
    {
      Symptoms: "Nasal and muzzle Swelling"
    },
    {
      Symptoms: "Pain and Swelling in the abdomen"
    },
    {
      Symptoms: "Swelling of the inner eye"
    },
    {
      Symptoms: "Swelling of the testes"
    },
    {
      Symptoms: "Swelling under the tongue"
    },
    {
      Symptoms: "Upper Respiratory"
    },
    {
      Symptoms: "Upper Respiratory Infections"
    },
    {
      Symptoms: "Varying degrees of Respiratory distress"
    },
    {
      Symptoms: "Abnormal Respiratory effort"
    },
    {
      Symptoms: "Asymptomatic unless"
    },
    {
      Symptoms: "Ataxia and Incoordination"
    },
    {
      Symptoms: "Coughing and dyspnea"
    },
    {
      Symptoms: "Excessive thirst and urination"
    },
    {
      Symptoms: "Exertional Syncope"
    },
    {
      Symptoms: "Facial Swelling"
    },
    {
      Symptoms: "Gastrointestinal signs Inappetence"
    },
    {
      Symptoms: "Respiratory difficulty"
    },
    {
      Symptoms: "Swelling and redness at the site of the tumor"
    },
    {
      Symptoms: "Swelling in wrists and lips which may feel hot"
    },
    {
      Symptoms: "Swelling of the face, neck or front limbs"
    },
    {
      Symptoms: "Swelling of the scrotum"
    },
    {
      Symptoms: "Swelling on face"
    },
    {
      Symptoms: "Systemic Illness"
    },
    {
      Symptoms: "Apparent Swelling around eyes"
    },
    {
      Symptoms: "Cutaneous Swellings or abscesses with draining tracts"
    },
    {
      Symptoms: "Excessive urination and Excessive thirst"
    },
    {
      Symptoms: "Facial pain or Swelling"
    },
    {
      Symptoms: "Increased Swelling of vulva"
    },
    {
      Symptoms: "Manifest with Disorientation"
    },
    {
      Symptoms: "Often Asymptomatic"
    },
    {
      Symptoms: "Postural adaptations to Respiratory distress"
    },
    {
      Symptoms: "Respiratory failure"
    },
    {
      Symptoms: "Severe Respiratory difficulty"
    },
    {
      Symptoms: "Stranguria or dyschezia"
    },
    {
      Symptoms: "Stunted growth in some"
    },
    {
      Symptoms: "Swelling of the epididymides"
    },
    {
      Symptoms: "Swelling or Warmth of the joint"
    },
    {
      Symptoms: "Syncope and Coughing"
    },
    {
      Symptoms: "Air Scratching"
    },
    {
      Symptoms: "Ataxia or paresis"
    },
    {
      Symptoms: "Ear Infection - head shaking and Scratching"
    },
    {
      Symptoms: "Epiglottis"
    },
    {
      Symptoms: "Excessive Panting"
    },
    {
      Symptoms: "Excessive urination or thirst"
    },
    {
      Symptoms: "Hair loss in the area of the tumor"
    },
    {
      Symptoms: "Joint pain and Swelling"
    },
    {
      Symptoms: "Muscle Incoordination"
    },
    {
      Symptoms: "Occasional Coughing"
    },
    {
      Symptoms: "Occasional dyschezia"
    },
    {
      Symptoms: "Rear limb Weakness"
    },
    {
      Symptoms: "Recurrent Respiratory Infections"
    },
    {
      Symptoms: "Respiratory difficulty or obstructed breathing"
    },
    {
      Symptoms: "Respiratory distress or bronchospasm"
    },
    {
      Symptoms: "Swelling and vessel hardness"
    },
    {
      Symptoms: "Swelling of the abdomen"
    },
    {
      Symptoms: "Paws that are Swelling"
    },
    {
      Symptoms: "Poor appetite or no appetite"
    },
    {
      Symptoms: "Respiratory distress occasionally Coughing"
    },
    {
      Symptoms: "Swelling of either or both testicles"
    },
    {
      Symptoms: "Periorbital Swelling"
    },
    {
      Symptoms: "Productive Coughing"
    },
    {
      Symptoms: "Acute Swelling"
    },
    {
      Symptoms: "Chewing on one side of the mouth"
    },
    {
      Symptoms: "Edema and Swelling"
    },
    {
      Symptoms: "Muscle Swelling or atrophy"
    },
    {
      Symptoms: "Syncope or collapse."
    },
    {
      Symptoms: "Traumatic brain injury"
    },
    {
      Symptoms: "A severe case also documented hair loss"
    },
    {
      Symptoms: "Acute Muscle Swelling with exophthalmos"
    },
    {
      Symptoms: "Difficulty swallowing due to Swelling"
    },
    {
      Symptoms: "Excess scales and crust on the nasal planum"
    },
    {
      Symptoms: "Hair loss or poor regrowth"
    },
    {
      Symptoms: "Swelling of jaw bones"
    },
    {
      Symptoms: "Swelling of the vulva"
    },
    {
      Symptoms: "Trauma results in Halitosis and Ptyalism"
    },
    {
      Symptoms: "Vocalization or increased sleep during the day"
    },
    {
      Symptoms: "Persistent Halitosis"
    },
    {
      Symptoms: "Ptyalism and Halitosis"
    },
    {
      Symptoms: "Recurrent Illnesses"
    },
    {
      Symptoms: "Swelling of the face or legs"
    },
    {
      Symptoms: "Uremic Halitosis"
    },
    {
      Symptoms: "Disorientation or aimless wandering"
    },
    {
      Symptoms: "Dry Coughing"
    },
    {
      Symptoms: "May be mild and not associated with Respiratory difficulty"
    },
    {
      Symptoms: "Muscle Weakness"
    },
    {
      Symptoms: "Cardiac Tamponade"
    },
    {
      Symptoms: "Corneal Swelling"
    },
    {
      Symptoms: "Gasping for breath"
    },
    {
      Symptoms: "Increased Respiratory rate and effort"
    },
    {
      Symptoms: "Joint Swelling"
    },
    {
      Symptoms: "Lower Back pain"
    },
    {
      Symptoms: "Moist Coughing"
    },
    {
      Symptoms: "Muscle pain and Weakness"
    },
    {
      Symptoms: "Nagging Coughing"
    },
    {
      Symptoms: "Poor coat quality and Weight loss"
    },
    {
      Symptoms: "Unexplained Swelling"
    },
    {
      Symptoms: "Unexplained Weight loss"
    },
    {
      Symptoms: "Unusually Bad breath"
    },
    {
      Symptoms: "Optic Swelling"
    },
    {
      Symptoms: "Respiratory Illnesses such as asthma"
    },
    {
      Symptoms: "Respiratory muscle paralysis"
    },
    {
      Symptoms: "Syncope and episodes of collapse"
    },
    {
      Symptoms: "Systemic signs of Illness"
    },
    {
      Symptoms: "Cervical Swelling"
    },
    {
      Symptoms: "Chewing on objects"
    },
    {
      Symptoms: "Swelling of optic nerve head"
    },
    {
      Symptoms: "Syncope if cardiac involvement"
    },
    {
      Symptoms: "Coughing on tracheal palpation"
    },
    {
      Symptoms: "Asymptomatic in some animals"
    },
    //
    {
      Symptoms: "attempted respiratory compensation"
    },
    {
      Symptoms: "Bilateral epistaxis"
    },
    {
      Symptoms: "Cerebellar ataxia"
    },
    {
      Symptoms: "Coughing unresponsive to antibacterial therapy"
    },
    {
      Symptoms: "Depends on the site of infection"
    },
    {
      Symptoms: "excessive thirst"
    },
    //
    {
      Symptoms: "increased urination"
    },
    {
      Symptoms: "increased urination"
    },
    {
      Symptoms: "Maybe Asymptomatic"
    },
    //
    {
      Symptoms: "Muscle twitching and trembling"
    },
    {
      Symptoms: "non-painful swelling at the body"
    },
    {
      Symptoms: "number of uroliths"
    },
    {
      Symptoms: "number of uroliths"
    },
    {
      Symptoms: "often no clinical signs of illness"
    },
    {
      Symptoms: "oral swelling"
    },
    {
      Symptoms: "peripheral limb swelling"
    },
    {
      Symptoms: "poor appetite"
    },
    {
      Symptoms: "Post-infection"
    },
    {
      Symptoms: "respiratory tract damage"
    },
    //
    //
    {
      Symptoms: "urine leaking"
    },
    //
    //
    //
    {
      Symptoms: "increased urination"
    },
    //
    {
      Symptoms: "Intermittent large bowel diarrhea"
    },
    {
      Symptoms: "Localized swelling"
    },
    {
      Symptoms: "mucoid diarrhea"
    },
    {
      Symptoms: "muscle swelling"
    },
    {
      Symptoms: "Muscle trembling"
    },
    {
      Symptoms: "muscular Weakness"
    },
    {
      Symptoms: "Nasal and muzzle swelling"
    },
    {
      Symptoms: "number of uroliths"
    },
    {
      Symptoms: "number of uroliths"
    },
    {
      Symptoms: "Pain and swelling in the abdomen"
    },
    //
    {
      Symptoms: "upper respiratory"
    },
    {
      Symptoms: "Upper respiratory infections"
    },
    {
      Symptoms: "Abnormal respiratory effort"
    },
    {
      Symptoms: "febrile but normothermia does not rule out infection"
    },
    {
      Symptoms: "Gastrointestinal signs inappetence"
    },
    {
      Symptoms: "hematemesis"
    },
    {
      Symptoms: "hematemesis"
    },
    {
      Symptoms: "hyperthermia"
    },
    {
      Symptoms: "most infections inapparent"
    },
    //
    {
      Symptoms: "Recurrent infections"
    },
    {
      Symptoms: "respiratory difficulty"
    },
    {
      Symptoms: "swelling on face"
    },
    {
      Symptoms: "Systemic illness"
    },
    {
      Symptoms: "Uterine infections"
    },
    {
      Symptoms: "Apparent swelling around eyes"
    },
    {
      Symptoms: "circling"
    },
    {
      Symptoms: "Cutaneous swellings or abscesses with draining tracts"
    },
    //
    {
      Symptoms: "excessive Pacing"
    },
    {
      Symptoms: "Excessive urination and excessive thirst"
    },
    {
      Symptoms: "Facial pain or swelling"
    },
    {
      Symptoms: "gastrointestinal infection"
    },
    {
      Symptoms: "hematemesis"
    },
    {
      Symptoms: "hemoglobinuria less"
    },
    {
      Symptoms: "Increased swelling of vulva"
    },
    {
      Symptoms: "manifest with Disorientation"
    },
    {
      Symptoms: "Morbillivirus species infections"
    },
    {
      Symptoms: "muscular twitching"
    },
    {
      Symptoms: "Post-infection"
    },
    {
      Symptoms: "Severe respiratory difficulty"
    },
    {
      Symptoms: "swelling or Warmth of the joint"
    },
    {
      Symptoms: "Systemic illness"
    },
    {
      Symptoms: "Air scratching"
    },
    {
      Symptoms: "an infection of the nostrils with a cauliflower-like growth"
    },
    {
      Symptoms: "Cerebellar ataxia"
    },
    {
      Symptoms: "decreased activity"
    },
    {
      Symptoms: "Ear infection - head shaking and scratching"
    },
    {
      Symptoms: "epiglottis"
    },
    {
      Symptoms: "gingiva and epistaxis"
    },
    {
      Symptoms: "hair loss in the area of the tumor"
    },
    //
    //
    {
      Symptoms: "infectious agents such as ticks or other arachnids"
    },
    {
      Symptoms: "injected mucous membranes"
    },
    {
      Symptoms: "Joint pain and swelling"
    },
    {
      Symptoms: "Mild to moderate lymphadenomegaly"
    },
    {
      Symptoms: "poor appetite"
    },
    {
      Symptoms: "rear limb Weakness"
    },
    {
      Symptoms: "Recurrent respiratory infections"
    },
    {
      Symptoms: "Recurrent urinary tract infections"
    },
    {
      Symptoms: "respiratory difficulty or obstructed breathing"
    },
    {
      Symptoms: "Respiratory distress"
    },
    //
    {
      Symptoms: "Secondary bacterial infections"
    },
    {
      Symptoms: "Skin infection"
    },
    //
    {
      Symptoms: "staphylococcal infection itself"
    },
    {
      Symptoms: "swelling and vessel hardness"
    },
    {
      Symptoms: "Systemic illness"
    },
    {
      Symptoms: "common signs are ataxia"
    },
    {
      Symptoms: "Difficulty urinating or defecating"
    },
    {
      Symptoms: "Difficulty urinating or defecating"
    },
    {
      Symptoms: "Dorsal muzzle"
    },
    //
    {
      Symptoms: "female-only infections"
    },
    {
      Symptoms: "Generalized swelling"
    },
    {
      Symptoms: "increased respiratory rate"
    },
    {
      Symptoms: "inspiratory Respiratory distress"
    },
    {
      Symptoms: "Paws that are swelling"
    },
    {
      Symptoms: "Pitting quality lost with chronicity as fibrosis occurs"
    },
    {
      Symptoms: "Severe muscle pain"
    },
    {
      Symptoms: "Systemic illness"
    },
    {
      Symptoms: "Acute swelling"
    },
    {
      Symptoms: "Bladder infections"
    },
    {
      Symptoms: "compulsive circling"
    },
    {
      Symptoms: "decreased activity"
    },
    //
    {
      Symptoms: "edema and swelling"
    },
    {
      Symptoms: "Foot infections"
    },
    {
      Symptoms: "Incontinence"
    },
   //
    {
      Symptoms: "infection or abscess"
    },
    {
      Symptoms: "Localized swelling"
    },
    //
    {
      Symptoms: "Muscle swelling or atrophy"
    },
    {
      Symptoms: "No Vision loss unless mass"
    },
    //
    {
      Symptoms: "periorbital swelling"
    },
    {
      Symptoms: "ravenous appetite or inappetence"
    },
    //
    //
    {
      Symptoms: "Urinary tract infection"
    },
    {
      Symptoms: "acute muscle swelling with exophthalmos"
    },
    {
      Symptoms: "back and Neck Pain"
    },
    {
      Symptoms: "Compulsive circling"
    },
    {
      Symptoms: "Difficulty swallowing due to swelling"
    },
    {
      Symptoms: "inappetence and Lethargy"
    },
    {
      Symptoms: "Malocclusion"
    },
    {
      Symptoms: "Mild Coughing"
    },
    {
      Symptoms: "Nephroliths typically Asymptomatic"
    },
    {
      Symptoms: "Possible Jaundice and hemoglobinuria"
    },
    {
      Symptoms: "Recurrent skin infections"
    },
    {
      Symptoms: "Respiratory - pulmonary edema"
    },
    {
      Symptoms: "Urinary tract infections"
    },
    {
      Symptoms: "Variable muscle pain"
    },
   //
    //
    {
      Symptoms: "hemoglobinuria"
    },
    //
    {
      Symptoms: "Increased urination and thirst"
    },
    {
      Symptoms: "may be mild and not associated with respiratory difficulty"
    },
    //
    //
    {
      Symptoms: "pericardial effusion"
    },
    {
      Symptoms: "Recurrent illnesses"
    },
    {
      Symptoms: "Regional lymphadenomegaly"
    },
    {
      Symptoms: "Secondary bacterial and yeast skin infections"
    },
    {
      Symptoms: "swelling of the face or legs"
    },
    {
      Symptoms: "Twitching or trembling muscles"
    },
    //
    {
      Symptoms: "Cardiac tamponade"
    },
    {
      Symptoms: "continuous ataxia"
    },
    {
      Symptoms: "Corneal swelling"
    },
    {
      Symptoms: "Hypotensionn"
    },
    {
      Symptoms: "Increased respiratory rate and effort"
    },
    {
      Symptoms: "Joint swelling"
    },
    {
      Symptoms: "moist Coughing"
    },
    {
      Symptoms: "poor coat quality and weight loss"
    },
    {
      Symptoms: "pulmonary edema"
    },
    {
      Symptoms: "Respiratory distress"
    },
    {
      Symptoms: "Respiratory distress"
    },
    {
      Symptoms: "Skin infections characterized"
    },
    {
      Symptoms: "trembling"
    },
    {
      Symptoms: "Unexplained swelling"
    },
    {
      Symptoms: "Unexplained weight loss"
    },
    {
      Symptoms: "Urinary or vaginal infection"
    },
    {
      Symptoms: "Eye infections"
    },
    {
      Symptoms: "Often there is severe hemorrhagic diarrhean"
    },
    {
      Symptoms: "optic swelling"
    },
    {
      Symptoms: "Respiratory illnesses such as asthma"
    },
    {
      Symptoms: "respiratory infection"
    },
    {
      Symptoms: "respiratory muscle paralysis"
    },
    {
      Symptoms: "stertor or stridor"
    },
    {
      Symptoms: "Systemic signs of illness"
    },
    {
      Symptoms: "Respiratory distress"
    },
    {
      Symptoms: "Unexplained weight loss"
    },
    {
      Symptoms: "Watery diarrhea"
    },
    {
      Symptoms: "Cardiogenic pulmonary edema"
    },
    {
      Symptoms: "Cervical swelling"
    },
    {
      Symptoms: "may lead to hyperthermia"
    },
    {
      Symptoms: "ascending urinary tract infection"
    },
    {
      Symptoms: "Bilateral epistaxis"
    },
    {
      Symptoms: "Joint swelling"
    },
    {
      Symptoms: "Mandibular lymphadenomegaly neoplasia"
    },
    {
      Symptoms: "Respiratory distress"
    },
    {
      Symptoms: "respiratory illness"
    },
    {
      Symptoms: "swelling of optic nerve head"
    },
    {
      Symptoms: "Severe muscle pain"
    },
    {
      Symptoms: "fungal infection"
    },
    //
    {
      Symptoms: "Respiratory distress"
    },
    //
    {
      Symptoms: "Abdominal swelling"
    },
    //
    {
      Symptoms: "Facial swelling"
    }
    //
  ];
