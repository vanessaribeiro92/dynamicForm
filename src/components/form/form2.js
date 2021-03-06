import React from 'react'
import SwitchInput from '../form/switch/switch';
import Input from '../form/input/input'
import RadioButton from '../form/radio/radio'
//import Switch from "react-switch";
import PropTypes from 'prop-types'
//import Checkbox from '../form/checkbox/checkbox'

function CreateForm() {

  let json = [{
    name: 'name',
    type: 'text',
    
  }, {
    name: 'age',
    type: 'number',
  }, {
    name: 'email',
    type: 'email',
  }, {
    name: 'agree_terms',
    type: 'checkbox',
  }, {
    name: 'kinship',
    type: 'radio',
  }, {
    value: true,
    name: 'biometry',
    type:  'switch',
  }
]

  return (
    <div className="CreateForm">

      
      {parseJson(json)}
      

    </div>
  )

}

//{verifyType(json)}

function parseJson(json) {

  var arrayDeInputs = [];
  for(var i=0;i<json.length;i++){
    arrayDeInputs.push(
      verifyType(json[i].name,json[i].type, i)
    )
    // console.log(i)
    
  }
  

  return (
    <React.Fragment>
    <div>{arrayDeInputs}</div>
    </React.Fragment>
  )
}


function verifyType(name, type, index){

  //criar label

 //são as condicionais que verifica o tipo de input e retorna
  return (

    <div key={index}>
      <div>{name}</div>
      {type === 'text' ?
        ( <Input></Input> )
        :
        type === 'number' ?
        ( <Input></Input> )
        : 
        type === 'email' ?
        ( <Input></Input> )
        :
        type === 'checkbox' ?
        ( <div>checkbox</div> )
        :
        type === 'radio' ?
        ( <RadioButton></RadioButton> )
        :
        type === 'switch' ?
        ( <SwitchInput checked={PropTypes}></SwitchInput> )
        :
        (<div>default</div>)
      }
    </div>

  )


}

export default CreateForm;

//<Switch checked={true} onChange={console.log} ></Switch>

// function add(a, b){

//   return a + b
// }

// add(2,3)
//  add( 2, {3:3})

 
