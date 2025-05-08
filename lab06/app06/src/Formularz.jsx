import { useState } from 'react'

function Formularz({ dodajPrace }) {
  const [opis, ustawOpis] = useState('')
  const [nazwa, ustawNazwe] = useState('')
  const [data, ustawDate] = useState('')
  const [priorytet, ustawPriorytet] = useState('NIE')
  const [check, setCheck] = useState(false)
  const handleSubmit = (e) => {
    dodajPrace([opis, nazwa, data, priorytet])
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} class="col-lg-6 offset-lg-3">
      <div class="form-group mb-3">
        <label class="form-label">Nazwa</label>
        <input type="text" name="nazwa" class="form-control"
          value={nazwa} onChange={e => ustawNazwe(e.target.value)} />
      </div>
      <div class="form-group mb-3">
        <label class="form-label">Opis pracy</label>
        <input type="text" name="opis" class="form-control"
          value={opis} onChange={e => ustawOpis(e.target.value)} />
      </div>
      <div class="form-group mb-3">
        <label class="form-label">Data</label>
        <input type="date" name="data" class="form-control"
          value={data} onChange={e => ustawDate(e.target.value)} />
      </div>
      <div>
        <label>
          <input type="checkbox" name="priorytet" class="form-check-input"
            checked={check} onChange={e =>{
              e.target.checked ? ustawPriorytet("TAK") : ustawPriorytet("NIE")
              setCheck(e.target.checked)
            }
           } />
          Priorytet
        </label>
      </div>
      <input type="submit" name="submit" class="btn btn-primary" value="Dodaj pracę" />
    </form>
  )
}
export default Formularz