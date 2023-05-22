import './App.css'
import { useState } from 'react'
import dbSartans from "./db/spartans.json"
import { getRandom } from './utils/random.js'
import SpartanBox from './components/SpartanBox'

const bgsImages = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6", "bg7", "bg8", "bg9", "bg10"]


function App() {
  const [spartan, setSpartan] = useState(getRandom(dbSartans));
  const [bg, setBg] = useState(getRandom(bgsImages));
  const handleChangeSpartan = () =>{
    setSpartan(getRandom(dbSartans));
    setBg(getRandom(bgsImages));
  }
  return (
    <main className={`app ${bg}`}>
      <section>
          <h1>SPARTANS</h1>
        </section>
        <SpartanBox spartan={spartan} handleChangeSpartan={handleChangeSpartan} />
        <footer></footer>

        
    </main>
  )
}

export default App
