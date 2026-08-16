import { useState, useEffect, useReducer } from "react"
import { Custom_Input } from "./react_concepts/utils"
import { Arreys_what_do_they_know_do_they_know_things_lets_find_out } from "./arreys/every_arrey_methode_everyWhere_all_at_Once"
import { Functoins_what_do_they_know_do_they_know_things_lets_find_out } from "./functions/functions_everyWhere_all_at_Once"



function App() {
  
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  return (
    <>
      <Arreys_what_do_they_know_do_they_know_things_lets_find_out/>
      <Functoins_what_do_they_know_do_they_know_things_lets_find_out />
      <Custom_Input data={data} handleData={handleData} />
    </>
  )
}
export default App
