import { useState } from "react"
import { Arreys_what_do_they_know_do_they_know_things_lets_find_out } from "./arreys/every_arrey_methode_everyWhere_all_at_Once"
import { Functoins_what_do_they_know_do_they_know_things_lets_find_out } from "./functions/functions_everyWhere_all_at_Once"
import { A } from "./react_concepts/Props_Handling"
import { Custom_Componant } from "./react_concepts/utils"
function App() {
  const [input, setInput] = useState('')
  function handleChange(e){
     setInput(e.target.value)
  }
  return (
    <>
      <Arreys_what_do_they_know_do_they_know_things_lets_find_out/>
      <Functoins_what_do_they_know_do_they_know_things_lets_find_out />
      <A />
      <Custom_Componant
        id={1}
        name={'input'}
        value={input}
        onInputChange={handleChange}
      />
    </>
  )
}

export default App
