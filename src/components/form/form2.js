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
      verifyType(json[i].type, i)
    )
    // console.log(i)
    
  }
  

  // var arrayDeNames = [];
  // for(var j=0; j<json.length; j++){
  //   arrayDeNames.push(
  //   verify(json[j].name, j)
  // )
  // }

  return (

    // <div>{arrayDeNames}</div>
    <div>{arrayDeInputs}</div>
  )
}

function verifyType(type, index){

  //criar label

 //são as condicionais que verifica o tipo de input e retorna
  return (

    <div key={index}>
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

//<Switch checked={true} onChange={console.log} ></Switch>

// function add(a, b){

//   return a + b
// }

// add(2,3)
//  add( 2, {3:3})

 
export default CreateForm;