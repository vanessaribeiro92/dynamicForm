import React from 'react'
import SwitchInput from '../form/switch/switch';
// import Checkbox from './checkbox/checkbox'
// import Input from './input/input'
// import Label from './label/label'
// import Radio from './radio/radio'
// import SelectInput from './select/select'
// import SwitchInput from './switch/switch'

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
  }]

  return (
    <div className="CreateForm">

      {verifyType(json)}
      {parseJson(json)}

    </div>
  )

}


function parseJson(json) {


  // createInput(){
  //   this.setState({
  //     input: true
  //   })
  // }
  
  
  
  //aqui vou criar quantos inputs vão aparecer
  //regras

  return (
    [<SwitchInput></SwitchInput>]
  )
}

function verifyType(json){
 //são as condicionais que verifica o tipo de input e retorna
  return (

    <div>
      {json[0]['type'] === 'text' ?
        ( <SwitchInput></SwitchInput> )
        :
        json[1]['type'] === 'number' ?
        ( <input></input> )
        : 
        json[2]['type'] === 'email' ?
        ( <div></div> )
        :
        json[3]['type'] === 'checkbox' ?
        ( <div></div> )
        :
        (<radio></radio>)
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