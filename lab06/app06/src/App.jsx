import { useState } from 'react'
import KartaPrac from './KartaPrac.jsx'
import Formularz from './Formularz.jsx'

function App() {
  const [dziennikZadan, ustawDziennikZadan] = useState([])
  const dodajPrace = (zadanie) => {
    let zadania = [...dziennikZadan, zadanie]
    ustawDziennikZadan(zadania)
  }
  return (
    <section>
      <Formularz dodajPrace={dodajPrace} />
      <KartaPrac dziennik={dziennikZadan} />
    </section>
  )
}
export default App