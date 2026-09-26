import { useState, useEffect, useReducer, useRef, useLayoutEffect } from "react"
import { Custom_Input } from "./react_concepts/utils"
import { Arreys_what_do_they_know_do_they_know_things_lets_find_out } from "./arreys/every_arrey_methode_everyWhere_all_at_Once"
import { Functoins_what_do_they_know_do_they_know_things_lets_find_out } from "./functions/functions_everyWhere_all_at_Once"
import { Data } from "./react_concepts/assets"
import { Display } from "./react_concepts/Props_Handling"
import { B } from "./react_concepts/children/react_props"
import { Child } from "./react_concepts/children/reactChild"


function App() {
  const [data, setData] = useState([])
  const [search, setSearchTerm] = useState(localStorage.getItem('searchTerm') ?? '')
  useEffect(() => {
    localStorage.setItem('searchTerm', search)
  }, [])

  const handleData = d => setData((prev) => prev = d);
  const handleSearchTerm = event => setSearchTerm((prev) => prev = event.target.value)
  return (
    <>
      <Arreys_what_do_they_know_do_they_know_things_lets_find_out/>
      <Functoins_what_do_they_know_do_they_know_things_lets_find_out />
      <Data handleData={handleData} />
      <Custom_Input
        name = 'search'
        value={search}
        onChangeInput={handleSearchTerm}
      />
      <B>
        <Child/>
      </B>
      <Display data={data} handleData={(d)=>handleData(d) } search={search} />
      
    </>
  )
}
export default App
