import './App.css'
import { useState } from 'react'
import dbSartans from "./db/spartans.json"
import { getRandom } from './utils/random.js'
import SpartanBox from './components/SpartanBox'

function App() {
  const [spartan, setSpartan] = useState(getRandom(dbSartans))
  const handleChangeSpartan = () =>{
    setSpartan(getRandom(dbSartans));
  }
  return (
    <main className='app bg10'>
      <section>
          <h1>SPARTANS</h1>
        </section>
        <SpartanBox spartan={spartan} handleChangeSpartan={handleChangeSpartan} />
        <footer></footer>

        
    </main>
  )
}

export default App
