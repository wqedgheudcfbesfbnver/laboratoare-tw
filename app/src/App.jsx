import { useState } from 'react'

import { destinatii as destinatiiInitiale } from './data/destinatii.js'

import {
  getNevizitate,
  totalZile,
  marcheazaVizitat,
  adaugaDestinatie
} from './utils/destinatii.js'

import Rezumat from './components/Rezumat.jsx'
import ListaDestinatii from './components/ListaDestinatii.jsx'
import FormularDestinatie from './components/FormularDestinatie.jsx'

import './App.css'

export default function App() {

  // Starea aplicației
  const [destinatii, setDestinatii] = useState(destinatiiInitiale)

  // Calcularea statisticilor
  const destinatiiNevizitate = getNevizitate(destinatii)

  const total = destinatii.length
  const nevizitate = destinatiiNevizitate.length
  const zile = totalZile(destinatiiNevizitate)

  // Marcarea unei destinații ca vizitată sau nevizitată
  function handleToggle(id) {
    setDestinatii((curent) => marcheazaVizitat(curent, id))
  }

  // Adăugarea unei destinații noi
  function handleAdd(destinatieNoua) {
    setDestinatii((curent) =>
      adaugaDestinatie(curent, destinatieNoua)
    )
  }

  // Ștergerea unei destinații
  function handleDelete(id) {
    setDestinatii((curent) =>
      curent.filter((destinatie) => destinatie.id !== id)
    )
  }

  return (
    <main>

      <h1>City Explorer</h1>

      <Rezumat
        total={total}
        nevizitate={nevizitate}
        zile={zile}
      />

      <FormularDestinatie
        onAdd={handleAdd}
      />

      <ListaDestinatii
        destinatii={destinatii}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />

    </main>
  )
}