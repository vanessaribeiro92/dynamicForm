import React from 'react'
import SwitchInput from '../form/switch/switch';
//import ReactDOM from 'react-dom'
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

      
      {parseJson(json)}

    </div>
  )

}

// componentWillMount() {
//{verifyType(json)}

// }

function parseJson(json) {

  var arrayDeInputs = [];
  for(var i=0;i<json.length;i++){
    arrayDeInputs.push(
      verifyType(json[i].type)
    )
    console.log(i)
  }
  
  //aqui vou criar quantos inputs vão aparecer
  //regras

  return (
    <div>{arrayDeInputs}</div>
    //[<SwitchInput></SwitchInput>]
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