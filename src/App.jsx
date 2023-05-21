import './App.css'
import { useState } from 'react'
import dbSartans from "./db/spartans.json"
import { getRandom } from './utils/random.js'

function App() {
  const [spartan, setSpartan] = useState(getRandom(dbSartans))
  console.log(spartan)
  return (
    <main>

    </main>
  )
}

export default App
