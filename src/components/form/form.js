import React from 'react'
import axios from 'axios'
import SwitchInput from '../form/switch/switch';
import Input from '../form/input/input'
import RadioButton from '../form/radio/radio'
//import Switch from "react-switch";
import PropTypes from 'prop-types'
//import Checkbox from '../form/checkbox/checkbox'
import api from '../../services/api'



// axios.get('http://192.168.1.10/resident.json')
//   .then(function(response){
//     console.log(response.data)
//   })
//   .catch(function(error){
//     console.warn(error);
//   })




// function CreateForm() {



//   let json = [{
//     name: 'name',
//     type: 'text',
    
//   }, {
//     name: 'age',
//     type: 'number',
//   }, {
//     name: 'email',
//     type: 'email',
//   }, {
//     name: 'agree_terms',
//     type: 'checkbox',
//   }, {
//     name: 'kinship',
//     type: 'radio',
//   }, {
//     value: true,
//     name: 'biometry',
//     type:  'switch',
//   }
// ]

//   return (
//     <div className="CreateForm">

      
//       {parseJson(json)}
      

//     </div>
//   )

// }

//{verifyType(json)}


export default class CreateForm extends Component{
state = {
  
}

}


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

//type: password, submit,

// a info do json virá como variavel
// inputs precisam puxar info do json
// quando clicar em "cadastrar morador"  algo  cria os inputs com as informações puxadas do json

// condicionais para ler a info do json = regras
// return (
//   <div className="App">
//     <header className="App-header">
      
//       {json[0]['type'] === 'text' ?
//         ( <SwitchInput></SwitchInput> )
//         :
//         json[1]['type'] === 'number' ?
//         ( <input></input> )
//         : 
//         ( <div></div>)
//       }

//     </header>
//   </div>
// );


//____________________

  // var obj = JSON.parse(json);

  // for(var i = 0; i<= obj.length; i++){
  //   React.createElement(
  //     obj[i].type, 
  //     []
      
  //   )
  // }

  // const createElement = React.createElement
  
  // ReactDOM.render(
  //   createElement('div',json),
  //   document.getElementsByName('root')
  // )


  // createInput(){
  //   this.setState({
  //     input: true
  //   })
  // }