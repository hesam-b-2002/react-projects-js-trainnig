import { useEffect, useState } from "react";
import { Data } from "./fetchData";
import { SearchField } from "./searchField";
import { SearchResults } from "./searchResults";
import { useRef } from "react";
import { ChildrenArrey } from "./childrenFetch";

const App = () => {
  const [data, setData] = useState([])
  const [pokie,setPokie] = useState([])
  const [searchTerm, setSearchTerm] = useState([])
  const dataHandler = (arr) => {
    setData(arr)
  }
  const searchTermHandler = (e) => {
    setSearchTerm(e.target.value)
  }
  const pokieHandler = (pokiemon) => {
    setPokie(pokiemon)
  }
  useEffect(() => {
    console.log(pokie)
  },[pokie])
 


  return (
    <>
      <h1>App</h1>
      <Data dataHandler={dataHandler} />
      <ChildrenArrey data={data} pokieHandler={pokieHandler}/>
      <SearchField searchTerm={searchTerm} searchTermHandler={searchTermHandler} />
      <SearchResults data={data}  />
    </> 
  )
 }
export default App;